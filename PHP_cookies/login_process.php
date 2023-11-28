<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // In a real scenario, you'd verify the login from a database
    // Here, for simplicity, I'm checking if the username matches the cookie
    if (isset($_COOKIE['username']) && $_COOKIE['username'] === $username && isset($_COOKIE['password']) && $_COOKIE['password'] === $password ) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password";
    }
}
?>
