
<?php
// Your database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "studentresults";
$port = 3307;
$finalresults = 0;
// Create connection
$conn = new mysqli("$servername:$port", $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the PRN is set in the POST request
if (isset($_POST['prn'])) {
    // Sanitize and get the PRN number from the POST data
    $prnNumber = mysqli_real_escape_string($conn, $_POST['prn']);

    // Prepare SQL statement
    $sql = "SELECT * FROM results WHERE prn = '$prnNumber'";
    
    // Execute the query
    $result = $conn->query($sql);

    // Check if any rows are returned (PRN exists)
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $finalresults = $row['subject1'] + $row['subject2'] + $row['subject3'] + $row['subject4'];
    } else {
        echo "Please register then check";
    }
} else {
    echo "PRN not provided in the POST request.";
}

// Close the database connection
$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result Page</title>
</head>
<body>
    <h2>Results</h2>

    <p>your percentage is :<?php echo $finalresults/400*(100) ?></p>
</body>
</html>
