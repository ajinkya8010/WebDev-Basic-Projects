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

if (isset($_POST['register_employee'])) {
    $name = $_POST['name'];
    $position = $_POST['position'];
    $salary = $_POST['salary'];

    $sql = "INSERT INTO employee (name, position, salary) VALUES ('$name', '$position', '$salary')";

    if ($conn->query($sql) === TRUE) {
        echo "Employee registration successful. <a href='login.html'>Login</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
