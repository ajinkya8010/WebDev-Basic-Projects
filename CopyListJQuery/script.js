$(document).ready(function() {
    // Function to join lists when the button is clicked
    $('#joinButton').on('click', function() {
        // Select the source list items
        var sourceItems = $('#sourceList li');

        // Clone the items to avoid modifying the original source list
        var clonedItems = sourceItems.clone();

        // Append the cloned items to the target list
        $('#targetList').append(clonedItems);
    });
});
