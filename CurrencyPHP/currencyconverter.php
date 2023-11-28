<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
</head>
<body>
    <h2>Currency Converter</h2>

    <form action="" method="post">
        <label for="amount">Amount:</label>
        <input type="number" name="amount" required>

        <label for="currency_type">Currency Type:</label>
        <select name="currency_type" required>
            <option value="rs">Rupees (INR)</option>
            <option value="usd">Dollars (USD)</option>
        </select>
        <label for="conversion_rate">Conversion Rate:</label>
        <input type="number" name="conversion_rate" required>

        <button type="submit" name="convert">Convert</button>
    </form>

    <?php
    if (isset($_POST['convert'])) {
        // Get user input
        $amount = $_POST['amount'];
        $currency_type = $_POST['currency_type'];
        $conversion_rate = $_POST['conversion_rate'];
        // Perform the conversion
        if ($currency_type === 'rs') {
            $converted_amount = $amount / $conversion_rate;
            echo "<p>{$amount} INR is equal to {$converted_amount} USD</p>";
        } elseif ($currency_type === 'usd') {
            $converted_amount = $amount * $conversion_rate;
            echo "<p>{$amount} USD is equal to {$converted_amount} INR</p>";
        }
    }
    ?>
</body>
</html>
