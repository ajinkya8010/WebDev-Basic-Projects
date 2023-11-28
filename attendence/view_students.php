<?php
session_start();
include 'db.php';

if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

$sql = "SELECT * FROM students";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Students</title>
</head>
<body>
    <h2>View Students</h2>
    <form action="submit_attendence.php" method="post">
        <?php
        while ($row = $result->fetch_assoc()) {
            echo "<input type='checkbox' name='student_ids[]' value='{$row['id']}'> {$row['student_name']}<br>";
        }
        ?>

        <input type="submit" value="Submit Attendance">
    </form>
</body>
