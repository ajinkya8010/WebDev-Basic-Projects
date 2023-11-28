<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'test';
$port='3307';

$conn = new mysqli($host, $username, $password, $database,$port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login'])) {
    $name = $_POST['name'];
    $position = $_POST['position'];
    $salary = $_POST['salary'];

    $sql = "SELECT * FROM employee WHERE name='$name' AND position='$position' AND salary='$salary'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // echo "Login successful.";
        // You can redirect to another page or perform additional actions here.
        header("location:selectoptions.html");
    } else {
        echo "Invalid credentials. <a href='login.html'>Try again</a>";
    }
}

$conn->close();
?>
