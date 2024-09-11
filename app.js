// Get elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

let total = 0;  // Store total price

// Add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const price = parseFloat(e.target.getAttribute('data-price'));
        const productName = e.target.parentElement.querySelector('h3').innerText;

        // Add product to cart
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - $${price}`;
        cartItems.appendChild(listItem);

        // Update total
        total += price;
        totalDisplay.textContent = total.toFixed(2);
    });
});
