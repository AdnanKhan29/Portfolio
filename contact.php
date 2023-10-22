<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "maaj20056@gmail.com";
    $headers = "From: $email";
    $message_body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage:\n$message";

    if (mail($to, "Contact Form Submission", $message_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending the message.";
    }
}
?>
