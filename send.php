<?php
$to = "uppahush@gmail.com";
$subject = "Test Email";
$message = "This is a test.";
$headers = "From: test@yourdomain.com";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ Mail sent successfully";
} else {
    echo "❌ Mail failed";
}
?>
