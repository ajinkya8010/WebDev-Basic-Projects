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

$sql = "SELECT * FROM employee";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Employee Records</h2>";
    echo "<table border='1'>";
    echo "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['position'] . "</td>";
        echo "<td>" . $row['salary'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No records found.";
}

$conn->close();
?>
