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

$sql = "SELECT * FROM studentscomplaints";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row['name'] . "<br>";
        echo "PRN Number: " . $row['prn'] . "<br>";
        echo "Complaint: " . $row['complaints'] . "<br>";
        echo "<hr>";
    }
} else {
    echo "No complaints registered yet.";
}

$conn->close();
?>
