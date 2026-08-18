<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './src/Exception.php';
require './src/PHPMailer.php';
require './src/SMTP.php';

$mail = new PHPMailer(true);

$allowedRecipients = [
    '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $recipientId = $_GET['id'] ?? '';

    if (
        !filter_var($recipientId, FILTER_VALIDATE_EMAIL) ||
        !in_array($recipientId, $allowedRecipients, true)
    ) {
        http_response_code(400);
        echo "Invalid or unauthorized recipient.";
        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $body = '<div style="border:1px solid rgba(80,80,80,1); padding:20px;">';

    foreach ($data as $key => $value) {

        $label = ucfirst(str_replace('_', ' ', $key));

        if (is_array($value)) {
            $value = implode(', ', $value);
        }
        $safeValue = htmlspecialchars($value);

        $body .= "
            <p>
                <b>{$label}:</b> {$safeValue}
            </p>
        ";
    }

    $body .= '</div>';

    $senderName = htmlspecialchars($data['name'] ?? 'Website Form');

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@astack.co';
        $mail->Password = 'Astack#123';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom('noreply@astack.co', $senderName);
        $mail->addAddress($recipientId);

        $mail->isHTML(true);
        $mail->Subject = 'Quote From Website';
        $mail->Body = $body;
        $mail->AltBody = strip_tags($body);

        $mail->send();

        echo "Your message has been sent successfully!";

    } catch (Exception $e) {

        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}