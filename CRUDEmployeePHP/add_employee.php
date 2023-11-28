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

if (isset($_POST['add_employee'])) {
    $employee_name = $_POST['employee_name'];
    $employee_position = $_POST['employee_position'];
    $employee_salary = $_POST['employee_salary'];

    $sql = "INSERT INTO employee (name, position, salary) VALUES ('$employee_name', '$employee_position', '$employee_salary')";

    if ($conn->query($sql) === TRUE) {
        echo "Employee added successfully. <a href='selectoptions.html'>Go back</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
