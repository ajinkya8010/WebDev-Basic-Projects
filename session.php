<?php
// Set the session save path

session_start();

$maxSessions = 3; // Maximum number of concurrent sessions allowed for a user
$id=0;

if (!isset($_SESSION['session_count'])) {
    $_SESSION['session_count'] = 1;
	
} else {
    $_SESSION['session_count']++;
	$id++;

    if ($_SESSION['session_count'] > $maxSessions || $id==$maxSessions)  {
		echo "ID value".$id.".";
        session_unset();
        session_destroy();
        echo "Maximum session limit exceeded. Please log in again.";
        exit;
    }
}
echo "Session active. Session count: " . $_SESSION['session_count'];

?>
