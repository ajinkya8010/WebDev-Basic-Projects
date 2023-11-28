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

if (isset($_POST['delete_employee'])) {
    $employee_name = $_POST['employee_name'];

    $sql = "DELETE FROM employee WHERE name='$employee_name'";

    if ($conn->query($sql) === TRUE) {
        echo "Employee deleted successfully. <a href='selectoptions.html'>Go back</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
