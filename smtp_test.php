<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP server configuration
    $mail->isSMTP();
    $mail->Host       = 'aviadrones.com';  // ✅ use "mail." before your domain
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@aviadrones.com';  // Your full email address
    $mail->Password   = 'aviadrones10x';        // Your actual email password (not Gmail App Password)
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient
    $mail->setFrom('info@aviadrones.com', 'Aviadrones Website');
    $mail->addAddress('uppahush@gmail.com', 'Receiver Name');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'SMTP Test Email';
    $mail->Body    = 'This is a <b>test email</b> sent using PHPMailer and your domain SMTP.';

    $mail->send();
    echo '✅ Email sent successfully!';
} catch (Exception $e) {
    echo "❌ Message could not be sent. Error: {$mail->ErrorInfo}";
}
