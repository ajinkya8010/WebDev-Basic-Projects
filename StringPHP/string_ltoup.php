<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Transformation</title>
</head>
<body>
    <h2>String Transformation</h2>
    <form action="" method="post">
        <label for="inputString">Enter a String:</label>
        <input type="text" name="inputString" required>
        <br>

        <input type="radio" name="transformation" value="uppercase" checked>
        <label for="uppercase">Uppercase</label>

        <input type="radio" name="transformation" value="lowercase">
        <label for="lowercase">Lowercase</label>

        <input type="radio" name="transformation" value="capitalize">
        <label for="capitalize">Capitalize First Character</label>

        <br>

        <button type="submit" name="transform">Transform</button>
    </form>

    <?php
    if (isset($_POST['transform'])) {
        $inputString = $_POST['inputString'];
        $transformation = $_POST['transformation'];

        switch ($transformation) {
            case 'uppercase':
                $result = strtoupper($inputString);
                break;

            case 'lowercase':
                $result = strtolower($inputString);
                break;

            case 'capitalize':
                $result = ucfirst(strtolower($inputString));
                break;

            default:
                $result = "Invalid transformation option";
                break;
        }

        echo "<p>Original String: $inputString</p>";
        echo "<p>Transformed String: $result</p>";
    }
    ?>
</body>
</html>
