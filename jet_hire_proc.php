<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
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
    // Sanitize and validate inputs
    $fullname = filter_var(trim($_POST["fullname"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
    $departurecity = filter_var(trim($_POST["departurecity"]), FILTER_SANITIZE_STRING);
    $arrivalcity = filter_var(trim($_POST["arrivalcity"]), FILTER_SANITIZE_STRING);
    $departuredate = filter_var(trim($_POST["departuredate"]), FILTER_SANITIZE_STRING);
    $returndate = isset($_POST["returndate"]) ? filter_var(trim($_POST["returndate"]), FILTER_SANITIZE_STRING) : "N/A";
    $passengersno = filter_var(trim($_POST["passengersno"]), FILTER_SANITIZE_NUMBER_INT);
    $additionalmsg = filter_var(trim($_POST["additionalmsg"]), FILTER_SANITIZE_STRING);
    $aircraftType = filter_var(trim($_POST["aircraftType"]), FILTER_SANITIZE_STRING);
    $tripType = filter_var(trim($_POST["tripType"]), FILTER_SANITIZE_STRING);

    $pickupCoords = $_POST["pickupCoords"] ?? "N/A";
    $destinationCoords = $_POST["destinationCoords"] ?? "N/A";
    $arrivalPlace = $_POST["arrivalPlace"] ?? "N/A";
    $location = $_POST["location"] ?? "N/A";

    if (
        empty($fullname) || empty($email) || empty($phone) || empty($departurecity) ||
        empty($arrivalcity) || empty($departuredate) || empty($aircraftType) || empty($tripType)
    ) {
        echo "error";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid_email";
        exit;
    }

    // Common email headers
    $headers = "From: Aviadrones <noreply@aviadrones.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // === Admin Notification ===
    $to = "support@aviadrones.com";
    $subject = "Flight Quote Request from $fullname";
    $adminMessage = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
            .container { background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd; }
            h2 { color: #333; }
            p { margin: 10px 0; }
            strong { color: #007bff; }
        </style>
    </head>
    <body>
    <div class='container'>
        <h2>Flight Quote Request</h2>
        <p><strong>Name:</strong> $fullname</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Departure City:</strong> $departurecity</p>
        <p><strong>Arrival City:</strong> $arrivalcity</p>
        <p><strong>Departure Date:</strong> $departuredate</p>
        <p><strong>Trip Type:</strong> $tripType</p>";

    if ($tripType === "roundtrip") {
        $adminMessage .= "<p><strong>Return Date:</strong> $returndate</p>";
    }

    $adminMessage .= "
        <p><strong>Passengers:</strong> $passengersno</p>
        <p><strong>Aircraft Type:</strong> $aircraftType</p>";

    if ($aircraftType === "helicopter") {
        $adminMessage .= "
        <h3>Helicopter Flight Details</h3>
        <p><strong>Pickup Coordinates:</strong> $pickupCoords</p>
        <p><strong>Destination Coordinates:</strong> $destinationCoords</p>
        <p><strong>Arrival Place:</strong> $arrivalPlace</p>";
    }

    if ($aircraftType === "privatejet") {
        $adminMessage .= "
        <h3>Private Jet Flight Details</h3>
        <p><strong>Location:</strong> $location</p>";
    }

    $adminMessage .= "
        <p><strong>Additional Notes:</strong> $additionalmsg</p>
    </div>
    </body>
    </html>";

    // === Auto-Reply to User ===
    $userSubject = "We've received your flight quote request ✈️";
    $userMessage = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f3f3f3; padding: 20px; }
            .email-wrapper { background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0; max-width: 600px; margin: auto; }
            h2 { color: #007bff; }
            p { color: #333; }
        </style>
    </head>
    <body>
        <div class='email-wrapper'>
            <h2>Hello $fullname,</h2>
            <p>Thank you for choosing <strong>Aviadrones</strong> for your flight hire needs.</p>
            <p>We've received your request and our team will review your details and get back to you shortly.</p>
            <p>If this was not you, kindly disregard this message.</p>
            <p>Best regards,<br><strong>Aviadrones Team</strong></p>
        </div>
    </body>
    </html>";

    // Send admin mail
    $adminSent = mail($to, $subject, $adminMessage, $headers);

    // Send user confirmation
    $userSent = mail($email, $userSubject, $userMessage, $headers);

    echo ($adminSent && $userSent) ? "success" : "error";
} else {
    echo "invalid_request";
}
?>
