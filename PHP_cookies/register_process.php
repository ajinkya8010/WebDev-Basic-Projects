<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // You can store this data in a database, but for simplicity, I'll use cookies here
    setcookie("username", $username, time() + 3600, "/"); // Cookie set to expire in 1 hour

    echo "Registration successful! Go to <a href='login.php'>Login</a>";
}
?>
