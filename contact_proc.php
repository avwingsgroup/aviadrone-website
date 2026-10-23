<?php
// Enable error reporting (for debugging, remove on production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $secret = "6LdBtEorAAAAAG3NbOF_nn3P5QKQ3YVzvFACwV_6";
    $captchaResponse = $_POST['g-recaptcha-response'] ?? '';

    if (empty($captchaResponse)) {
        echo "captcha_failed";
        exit;
    }

    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$captchaResponse}");
    $responseData = json_decode($verifyResponse);

    if (!$responseData->success) {
        echo "captcha_failed";
        exit;
    }

    // Sanitize inputs
    $name = filter_var(trim($_POST["name"] ?? ''), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"] ?? ''), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"] ?? ''), FILTER_SANITIZE_STRING);

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "error";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid_email";
        exit;
    }

    // Prepare admin email content
    $email_message = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.5; }
                h2 { color: #333; }
                p { margin: 5px 0; }
                strong { color: #007bff; }
            </style>
        </head>
        <body>
            <h2>Contact Message</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        </body>
        </html>
    ";

    // Prepare auto-reply email content
    $auto_message = "
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; color: #333; padding: 30px; }
                .container { max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
                h2 { color: #004aad; }
                p { font-size: 15px; line-height: 1.6; }
                .footer { margin-top: 30px; font-size: 13px; color: #777; text-align: center; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>Thank you for contacting Aviadrones</h2>
                <p>Hi <strong>{$name}</strong>,</p>
                <p>We’ve received your message and our team is reviewing it. One of our representatives will get back to you as soon as possible.</p>
                <p>If you have submitted your message during working hours, expect a quicker response. For messages sent after hours, kindly allow up to 24 hours.</p>
                <p>We appreciate your patience and look forward to assisting you!</p>
                <p>Best regards,<br><strong>Aviadrones Support Team</strong></p>
                <div class='footer'>&copy; " . date('Y') . " Aviadrones. All rights reserved.</div>
            </div>
        </body>
        </html>
    ";

    // PHPMailer send
    try {
        // Admin mail
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'aviadrones.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@aviadrones.com';
        $mail->Password = 'aviadrones10x';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('info@aviadrones.com', 'Aviadrones Support');
        $mail->addAddress('info@aviadrones.com', 'Aviadrones Admin');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Contact Message: $subject";
        $mail->Body    = $email_message;

        $mail->send();

        // User auto-reply
        $userMail = new PHPMailer(true);
        $userMail->isSMTP();
        $userMail->Host = 'aviadrones.com';
        $userMail->SMTPAuth = true;
        $userMail->Username = 'info@aviadrones.com';
        $userMail->Password = 'aviadrones10x';
        $userMail->SMTPSecure = 'tls';
        $userMail->Port = 587;

        $userMail->setFrom('info@aviadrones.com', 'Aviadrones Support');
        $userMail->addAddress($email, $name);

        $userMail->isHTML(true);
        $userMail->Subject = "We've received your message – Aviadrones Support";
        $userMail->Body    = $auto_message;

        $userMail->send();

        echo "success";

    } catch (Exception $e) {
        error_log("Mailer Error: " . $e->getMessage());
        echo "error";
    }
}
?>
