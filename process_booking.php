<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // === CAPTCHA VALIDATION ===
    $secret = "6LdBtEorAAAAAG3NbOF_nn3P5QKQ3YVzvFACwV_6";
    $captchaResponse = $_POST['g-recaptcha-response'];

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

    // === REST OF YOUR FORM PROCESSING STARTS HERE ===
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = isset($_POST["phone"]) ? filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING) : "Not provided";
    $service = filter_var(trim($_POST["service"]), FILTER_SANITIZE_STRING);
    $date = isset($_POST["date"]) ? filter_var(trim($_POST["date"]), FILTER_SANITIZE_STRING) : "Not specified";
    $details = isset($_POST["message"]) ? filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING) : "No additional details provided";

    if (empty($name) || empty($email) || empty($service)) {
        echo "error";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid_email";
        exit;
    }

    // ... (the rest of your mailing logic remains unchanged)

    $to = "business@aviadrones.com";
    $subject = "New Service Booking Request from $name";
    $headers = "From: support@aviadrones.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $message = "
        <html>
        <head>...</head>
        <body>
            <h2>Booking Request Details</h2>
            <p><strong>Name:</strong> $name</p>
            ...
        </body>
        </html>
    ";

    $auto_subject = "Your Booking Request – Aviadrones";
    $auto_headers = "From: Aviadrones Support <support@aviadrones.com>\r\n";
    $auto_headers .= "MIME-Version: 1.0\r\n";
    $auto_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $auto_message = "
        <html>
        <head>...</head>
        <body>
            <div class='container'>
                <h2>Booking Received</h2>
                ...
            </div>
        </body>
        </html>
    ";

    $admin_sent = mail($to, $subject, $message, $headers);
    $user_sent = mail($email, $auto_subject, $auto_message, $auto_headers);

    if ($admin_sent && $user_sent) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
