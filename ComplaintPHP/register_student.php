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

if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $prn = $_POST['prn'];

    // Check if the PRN already exists
    $checkExistingPRN = "SELECT * FROM studentsc WHERE prn='$prn'";
    $result = $conn->query($checkExistingPRN);

    if ($result->num_rows > 0) {
        echo "PRN already registered. <a href='login.html'>Login</a>";
    } else {
        // Register the new student
        $sql = "INSERT INTO studentsc (name, prn) VALUES ('$name', '$prn')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful. <a href='login.html'>Login</a>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
