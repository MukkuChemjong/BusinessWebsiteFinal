document.addEventListener('DOMContentLoaded', function() {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    let cartAmount = document.querySelector('.cart-amount');

    showCartAmount()
    function showCartAmount(){
        cartAmount.innerText = cartItems.length;
    }
})