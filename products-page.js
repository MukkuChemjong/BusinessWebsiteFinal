document.addEventListener('DOMContentLoaded', function() {
    /*Products Section*/
    const productAmericano = document.querySelectorAll('.product-americano');
    const productMacchiato = document.querySelectorAll('.product-macchiato');
    const productCappuccino = document.querySelectorAll('.product-cappuccino');
    const productFlatwhite = document.querySelectorAll('.product-flatwhite');
    const productLatte = document.querySelectorAll('.product-latte');
    const productCortado = document.querySelectorAll('.product-cortado');
    const productCaffemocha = document.querySelectorAll('.product-caffemocha');
    const productAffogato = document.querySelectorAll('.product-affogato');

    productAmericano.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product-page.html';
        })
    })

    productMacchiato.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product2-page.html';
        })
    })

    productCappuccino.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product3-page.html';
        })
    })

    productFlatwhite.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product4-page.html';
        })
    })

    productLatte.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product5-page.html';
        })
    })

    productCortado.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product6-page.html';
        })
    })

    productCaffemocha.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product7-page.html';
        })
    })

    productAffogato.forEach(function(product) {
        product.addEventListener('click', function() {
            window.location.href = 'product8-page.html';
        })
    })

    /*Cart Amount Section */
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    let cartAmount = document.querySelector('.cart-amount');

    showCartAmount()
    function showCartAmount(){
        cartAmount.innerText = cartItems.length;
    }
})