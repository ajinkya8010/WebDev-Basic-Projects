<?php
// Database connection parameters
$host = "localhost";
$port = "3307";  // Specify the correct port here
$user = "root";
$password = "";
$database = "studentresults";

// Connect to the database with port
$conn = mysqli_connect("$host:$port", $user, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve data from the POST request
$name = mysqli_real_escape_string($conn, $_POST['name']);
$prn = mysqli_real_escape_string($conn, $_POST['prn']);
$subject1 = mysqli_real_escape_string($conn, $_POST['subject1']);
$subject2 = mysqli_real_escape_string($conn, $_POST['subject2']);
$subject3 = mysqli_real_escape_string($conn, $_POST['subject3']);
$subject4 = mysqli_real_escape_string($conn, $_POST['subject4']);

// Check if the record already exists
$query = "SELECT * FROM results WHERE name = '$name' AND prn = '$prn'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // Record already exists, redirect to index.html
    header("Location: indexresult.html");
    exit();
} else {
    // Record does not exist, proceed to insert
    $insertQuery = "INSERT INTO results(name, prn, subject1,subject2, subject3, subject4) VALUES('$name', '$prn','$subject1','$subject2','$subject3','$subject4')";
    if (mysqli_query($conn, $insertQuery)) {
        // Successfully inserted, redirect to index.html
        header("Location: indexresult.html");
        exit();
    } else {
        echo "Error inserting data: " . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
