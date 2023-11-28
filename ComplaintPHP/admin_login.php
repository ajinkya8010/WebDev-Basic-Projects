<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'test';
$port ='3307';

$conn = new mysqli($host, $username, $password, $database,$port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM admins WHERE username='$username' AND passwordd='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        // Redirect to the admin dashboard or perform other actions
        header("location: complaints.php");
        exit;
    } else {
        echo "Invalid credentials. <a href='admin_login.html'>Try again</a>";
    }
}

$conn->close();
?>
