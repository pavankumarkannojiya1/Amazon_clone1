document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const placeOrderButton = document.getElementById('place-order');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-item');
            const itemPrice = parseFloat(button.getAttribute('data-price'));
            cart.push({ name: itemName, price: itemPrice });
            updateCartUI();
        });
    });

    placeOrderButton.addEventListener('click', () => {
        alert('Order placed! Total amount: $' + cart.reduce((total, item) => total + item.price, 0).toFixed(2));
        cart = [];
        updateCartUI();
    });

    function updateCartUI() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
        cartTotal.textContent = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
});
