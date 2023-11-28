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

if (isset($_POST['register_complaint'])) {
    $name = $_POST['name'];
    $prn = $_POST['prn'];
    $complaints = $_POST['complaint'];

    $sql = "INSERT INTO studentscomplaints (name, prn, complaints) VALUES ('$name', '$prn', '$complaints')";

    if ($conn->query($sql) === TRUE) {
        echo "Complaint registered successfully.";
        
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
