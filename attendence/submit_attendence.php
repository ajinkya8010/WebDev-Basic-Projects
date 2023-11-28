<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming 'student_ids' is an array of selected student IDs
    $selectedStudentIds = isset($_POST['student_ids']) ? $_POST['student_ids'] : array();

    // Filter out invalid or empty values
    $selectedStudentIds = array_filter($selectedStudentIds, function($value) {
        return is_numeric($value) && $value > 0;
    });

    // Query to get details of present students
    $selectedStudentIdsStr = implode(',', $selectedStudentIds);
    $sql = "SELECT * FROM students WHERE id IN ($selectedStudentIdsStr)";
    $result = $conn->query($sql);

    // Display the list of present students
    echo "<h2>Present Students</h2>";
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>{$row['student_name']}</li>";
    }
    echo "</ul>";
} else {
    // Redirect if not submitted via POST
    header("Location: view_students.php");
    exit();
}
?>
