<!DOCTYPE html>

<head>
	<title>Calculate Electricity Bill</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<?php
$result_str = $result = '';
if (isset($_POST['unit-submit'])) {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];
    $units = $_POST['units'];

    if (!empty($units)) {
        $result = calculate_bill($units);
        $result_str = 'Name: ' . $name . '<br />';
        $result_str .= 'Mobile Number: ' . $mobile . '<br />';
        $result_str .= 'Address: ' . $address . '<br />';
        $result_str .= 'Total amount of ' . $units . ' units - ' . $result;
    }
}
/**
 * To calculate electricity bill as per unit cost
 */
function calculate_bill($units) {
    $unit_cost_first = 3.50;
    $unit_cost_second = 4.00;
    $unit_cost_third = 5.20;
    $unit_cost_fourth = 6.50;

    if($units <= 50) {
        $bill = $units * $unit_cost_first;
    }
    else if($units > 50 && $units <= 100) {
        $temp = 50 * $unit_cost_first;
        $remaining_units = $units - 50;
        $bill = $temp + ($remaining_units * $unit_cost_second);
    }
    else if($units > 100 && $units <= 200) {
        $temp = (50 * 3.5) + (100 * $unit_cost_second);
        $remaining_units = $units - 150;
        $bill = $temp + ($remaining_units * $unit_cost_third);
    }
    else {
        $temp = (50 * 3.5) + (100 * $unit_cost_second) + (100 * $unit_cost_third);
        $remaining_units = $units - 250;
        $bill = $temp + ($remaining_units * $unit_cost_fourth);
    }
    return number_format((float)$bill, 2, '.', '');
}

?>

<body>
	<h1>Calculate Electricity Bill</h1>
    <div id="page-wrap">
	   <form action="" method="post" id="bill-form">
            <table>
                <tr>
                    <td>     
                        <label for="name">Name:</label>
                    </td>
                    <td>     
                        <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </td>
                </tr>
                <tr>
                    <td>     
                        <label for="mobile">Mobile Number:</label>
                    </td>
                    <td>     
                        <input type="tel" name="mobile" id="mobile" placeholder="Your Mobile Number" required />
                    </td>
                </tr>
                <tr>
                    <td>     
                        <label for="address">Address:</label>
                    </td>
                    <td>     
                        <textarea name="address" id="address" placeholder="Your Address" required></textarea>
                    </td>
                </tr>
                <tr>
                    <td>     
                         <label for="units">No. of Units:</label>
                    </td>
                    <td>     
                        <input type="number" name="units" id="units" placeholder="Please enter no. of Units" required />
                    </td>
                </tr>
                <tr>
                    <td id="btn" colspan="2">
                        <input type="submit" name="unit-submit" id="unit-submit" value="Calculate Bill" />
                    </td>
                </tr>
            </table>
	    </form>
	    <div>
		    <?php echo '<br />' . $result_str; ?>
	    </div>
	</div>
</body>
</html>
