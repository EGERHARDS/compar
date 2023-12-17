<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Append email to a file
        file_put_contents("emails.txt", $email . PHP_EOL, FILE_APPEND);
        echo "Thank you for signing up!";
    }
}
?>
