<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['student_name'];
    $email = $_POST['student_email'];

    $sql = "INSERT INTO students (student_name, student_email) VALUES ('$name', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Student registered successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration</title>
</head>
<body>
    <h2>Student Registration</h2>
    <form action="register.php" method="post">
        <label for="student_name">Student Name:</label>
        <input type="text" name="student_name" required><br>

        <label for="student_email">Student Email:</label>
        <input type="email" name="student_email" required><br>

        <input type="submit" value="Register">
        <p>Are you a teacher? <a href="login.php">login!</a></p>
    </form>
</body>
</html>
