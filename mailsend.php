
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$msg = "";

if(isset($_POST['send'])){

$to = $_POST['to'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$from = $_POST['from'];

$names = [
"info@aviadrones.com" => "Aviadrones and Energy",
"support@aviadrones.com" => "Aviadrones Support",
"business@aviadrones.com" => "Aviadrones and Energy"
];

try {

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp-relay.brevo.com';
$mail->SMTPAuth = true;
$mail->Username = 'a69f0b001@smtp-brevo.com';
$mail->Password = 'y7xtkC4dbK6NGAwr';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom($from, $names[$from]);
$mail->addAddress($to);

$mail->isHTML(true);
$mail->Subject = $subject;

$departmentBadge = '';
if($from == 'info@aviadrones.com') $departmentBadge = 'General Information (info)';
if($from == 'support@aviadrones.com') $departmentBadge = 'Technical Support';
if($from == 'business@aviadrones.com') $departmentBadge = 'Business ';

$mail->Body = "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Aviadrones Message</title>
</head>
<body style='margin:0;padding:0;background:#eef2f8;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;'>

<table width='100%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td align='center' style='padding:40px 20px;'>

<table width='650' style='max-width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.08),0 5px 12px rgba(0,0,0,0.05);border:1px solid rgba(0,74,173,0.1);'>



<tr>
<td style='padding:20px 30px 30px 30px;'>
<div style='background:#fafcff;border-radius:20px;padding:28px;border:1px solid #e9edf2;'>
<div style='color:#1a2c3e;font-size:15px;line-height:1.65;'>
".nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'))."
</div>
</div>
</td>
</tr>

<tr>
<td style='background:#f8fafc;padding:24px 30px;text-align:center;border-top:1px solid #eef2f8;'>
<p style='margin:0 0 8px;font-size:13px;color:#5a6e8a;'>
&copy; ".date("Y")." Aviadrones and Energy
</p>
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
";

$mail->send();

$msg = "Email Sent Successfully from " . $names[$from];

}catch (Exception $e){
$msg = "Mailer Error: ".$mail->ErrorInfo;
}

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aviadrones and Energy | Professional Email Dispatch</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
background:linear-gradient(135deg,#0a2b4e 0%,#0f3b6a 50%,#1a4a7a 100%);
min-height:100vh;
padding:40px 20px;
}

.container{
max-width:580px;
margin:0 auto;
background:#ffffff;
border-radius:32px;
box-shadow:0 25px 50px -12px rgba(0,0,0,0.35),0 4px 12px rgba(0,0,0,0.1);
overflow:hidden;
}

.form-header{
background:linear-gradient(135deg,#004aad 0%,#002b5e 100%);
padding:32px 28px;
text-align:center;
}

.form-header h2{
color:white;
font-size:28px;
font-weight:700;
margin-bottom:8px;
letter-spacing:-0.3px;
}

.form-header p{
color:rgba(255,255,255,0.8);
font-size:14px;
margin:0;
}

.form-body{
padding:32px 32px 40px;
}

.input-group{
margin-bottom:24px;
}

.input-group label{
display:block;
font-weight:600;
color:#1e2a3e;
margin-bottom:8px;
font-size:14px;
letter-spacing:-0.2px;
}

input,select,textarea{
width:100%;
padding:14px 16px;
font-size:14px;
font-family:inherit;
background:#f9fafc;
border:1.5px solid #e2e8f0;
border-radius:16px;
transition:all 0.2s ease;
outline:none;
color:#1e2a3e;
}

input:focus,select:focus,textarea:focus{
border-color:#004aad;
background:#ffffff;
box-shadow:0 0 0 4px rgba(0,74,173,0.1);
}

select{
cursor:pointer;
appearance:none;
background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a5b6e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
background-repeat:no-repeat;
background-position:right 16px center;
background-size:16px;
}

textarea{
resize:vertical;
min-height:130px;
line-height:1.5;
}

button{
width:100%;
padding:15px;
background:linear-gradient(135deg,#004aad 0%,#00327a 100%);
color:white;
font-weight:700;
font-size:16px;
border:none;
border-radius:40px;
cursor:pointer;
transition:all 0.25s ease;
margin-top:8px;
display:flex;
align-items:center;
justify-content:center;
gap:10px;
box-shadow:0 4px 12px rgba(0,74,173,0.25);
}

button:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(0,74,173,0.35);
background:linear-gradient(135deg,#005bc0 0%,#0043a0 100%);
}

button:active{
transform:translateY(1px);
}

.msg{
margin-top:20px;
padding:14px 18px;
border-radius:16px;
text-align:center;
font-weight:500;
font-size:14px;
background:#f0fdf4;
color:#166534;
border-left:4px solid #22c55e;
}

.msg.error{
background:#fef2f2;
color:#991b1b;
border-left-color:#ef4444;
}

.department-badge{
margin-top:20px;
padding:12px;
background:#f8fafc;
border-radius:12px;
text-align:center;
font-size:12px;
color:#5a6e8a;
border:1px dashed #cbd5e1;
}

@media(max-width:640px){
.form-body{
padding:24px 24px 32px;
}
.form-header{
padding:24px 20px;
}
.form-header h2{
font-size:24px;
}
}
</style>

</head>

<body>

<div class="container">

<div class="form-header">
<h2>Aviadrones and Energy</h2>
<p>Professional email dispatch system</p>
</div>

<div class="form-body">

<form method="post">

<div class="input-group">
<label>Send From (Department)</label>

<select name="from" required>
<option value="info@aviadrones.com" <?php echo (isset($_POST['from']) && $_POST['from']=='info@aviadrones.com')?'selected':''; ?>>Info - Aviadrones and Energy (General)</option>

<option value="support@aviadrones.com" <?php echo (isset($_POST['from']) && $_POST['from']=='support@aviadrones.com')?'selected':''; ?>>Support - Aviadrones and Energy (Technical)</option>

<option value="business@aviadrones.com" <?php echo (isset($_POST['from']) && $_POST['from']=='business@aviadrones.com')?'selected':''; ?>>Business - Aviadrones and Energy </option>
</select>

</div>

<div class="input-group">
<label>Recipient Email</label>

<input type="email" name="to" required placeholder="client@example.com" value="<?php echo isset($_POST['to']) ? htmlspecialchars($_POST['to']) : ''; ?>">
</div>

<div class="input-group">
<label>Subject</label>

<input type="text" name="subject" required placeholder="Enter email subject..." value="<?php echo isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : ''; ?>">
</div>

<div class="input-group">
<label>Message</label>

<textarea name="message" rows="6" required placeholder="Write your message here..."><?php echo isset($_POST['message']) ? htmlspecialchars($_POST['message']) : ''; ?></textarea>
</div>

<button type="submit" name="send">
Send Email
</button>

</form>

<?php if(!empty($msg)): ?>

<div class="msg <?php echo (strpos($msg,'Mailer Error')!==false)?'error':''; ?>">
<?php echo htmlspecialchars($msg); ?>
</div>

<?php endif; ?>

<div class="department-badge">
Secured | Messages are sent from your selected department email
</div>

</div>
</div>

</body>
</html>
