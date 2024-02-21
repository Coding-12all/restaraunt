// script.js

// Ensure the DOM content is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var totalAmount = 0;

    // Function to handle the click event on breakfast items
    function showItemAmount(price) {
        // Parse the price to get the numerical value
        var numericalPrice = parseFloat(price.replace('$', ''));
        
        // Add the price to the total amount
        totalAmount += numericalPrice;

        // Display total amount
        var amountBox = document.getElementById('amount-details');
        amountBox.innerHTML = `<p>Total Amount: $${totalAmount.toFixed(2)}</p>`;
    }

    // Add event listeners to each breakfast item
    var breakfastItems = document.querySelectorAll('.menu-item');
    breakfastItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var price = item.querySelector('.price').textContent.trim();
            showItemAmount(price);
        });
    });
    var breakfastItems = document.querySelectorAll('.menu-item1');
    breakfastItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var price = item.querySelector('.price').textContent.trim();
            showItemAmount(price);
        });
    });
});
