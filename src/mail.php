<?php
header("Access-Control-Allow-Origin: *"); // Replace '*' with a specific domain for better security
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


// Define the recipient email address
$input = json_decode(file_get_contents('php://input'), true);
$recipientEmail = "innostruct@gmail.com";

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Get POST data and sanitize it
	$productType = htmlspecialchars($input['productType']);
	$name = htmlspecialchars($input['name']);
	$address = htmlspecialchars($input['address']);
	$phone = htmlspecialchars($input['phone']);

	// Validate email
	// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	// 		die("Invalid email address.");
	// }

	// Prepare the email content
	$subject = "New Message: $messageType";
	$body = "
	You have received a new message:
	
	Phone: $phone

	Name: $name

	Product Type: $productType

	Address:
	$address
	";

	$headers = [
			"From: phtan6661@gmail.com",
			"Reply-To: $email",
			"Content-Type: text/plain; charset=UTF-8"
	];

	// Send the email
	if (mail($recipientEmail, $subject, $body, implode("\r\n", $headers))) {
			echo "Message sent successfully.";
	} else {
			echo "Failed to send the message.";
	}
}
?>