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

        <label for="from_currency">From Currency:</label>
        <select name="from_currency" required>
            <!-- Add your currency options here -->
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <!-- Add more currencies as needed -->
        </select>

        <label for="to_currency">To Currency:</label>
        <select name="to_currency" required>
            <!-- Add your currency options here -->
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <!-- Add more currencies as needed -->
        </select>

        <button type="submit" name="convert">Convert</button>
    </form>

    <?php
    if (isset($_POST['convert'])) {
        // Get user input
        $amount = $_POST['amount'];
        $from_currency = $_POST['from_currency'];
        $to_currency = $_POST['to_currency'];

        // Fetch exchange rates from the API
        $api_key = 'YOUR_EXCHANGE_RATE_API_KEY';
        $api_url = "https://open.er-api.com/v6/latest/{$from_currency}?apikey={$api_key}";
        $exchange_rates = json_decode(file_get_contents($api_url), true);

        // Perform the conversion
        $rate = $exchange_rates['rates'][$to_currency];
        $converted_amount = $amount * $rate;

        // Display the result
        echo "<p>{$amount} {$from_currency} is equal to {$converted_amount} {$to_currency}</p>";
    }
    ?>
</body>
</html>
