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
    $name = $_POST['name'];
    $prn = $_POST['prn'];

    $sql = "SELECT * FROM studentsc WHERE name='$name' AND prn='$prn'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        // Redirect to the complaints page or perform other actions
        header("location: complaints.html");
        exit;
    } else {
        echo "Invalid credentials. <a href='login.html'>Try again</a>";
    }
}

$conn->close();
?>
