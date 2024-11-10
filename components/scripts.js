// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;
    document.getElementById('cart-count').innerText = cartCount;
}

// Function to add product to cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');

    const product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
    };

    // Get the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count
    updateCartCount();

    // Alert user that the item has been added to the cart
    alert(`${productName} has been added to your cart.`);
}

// Event listener for add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Update cart count on page load
window.onload = updateCartCount;
