document.addEventListener('DOMContentLoaded', function() {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    
    const productinfoContainer = document.querySelector('.productinfo-container');
    const mainContainer = document.querySelector('.main-section');
    const subTotal = document.querySelector('.subtotal');
    let total = 0;

    updateContainerHeight();
    updatePrice();
    subTotal.innerText ='$' + total.toFixed(2);
    
    cartItems.forEach(function(cartItem) {
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('productInfoDiv');

        const image = document.createElement('img');
        image.src = cartItem.imageUrl;
        image.style.width = '150px';
        image.style.height = '100%';
        productInfoDiv.appendChild(image);
    
        const name = document.createElement('span');
        name.classList.add('product-name');
        name.innerText = cartItem.name;
        productInfoDiv.appendChild(name);
    
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('.quantity-container');

        const minusButton = document.createElement('button');
        minusButton.innerText = '-';
        minusButton.addEventListener('click', function(){
            if(cartItem.quantity > 1){
                cartItem.quantity--;
                quantity.value = cartItem.quantity;
                total = 0;
                updatePrice();
                subTotal.innerText = '$' + total.toFixed(2);
            }
        })
        quantityContainer.appendChild(minusButton);

        const quantity = document.createElement('input');
        quantity.type = 'text';
        quantity.value = cartItem.quantity;
        quantity.min = 1;
        quantity.addEventListener('input', function(){
            cartItem.quantity = parseInt(quantity.value);
            updatePrice();
        });
        quantityContainer.appendChild(quantity);

        const plusButton = document.createElement('button');
        plusButton.innerText = '+';
        plusButton.addEventListener('click', function() {
            cartItem.quantity++;
            quantity.value = cartItem.quantity;
            total = 0;
            updatePrice();
            subTotal.innerText = '$' + total.toFixed(2);
        });
        quantityContainer.appendChild(plusButton);

        productInfoDiv.appendChild(quantityContainer);
    
        const price = document.createElement('span');
        price.innerText = '$' + (cartItem.quantity * cartItem.price).toFixed(2);
        productInfoDiv.appendChild(price);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', function() {
            const index = cartItems.indexOf(cartItem);
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateContainerHeight();
            total = 0;
            updatePrice();
            showCartAmount();
            subTotal.innerText = '$' + total.toFixed(2);

            productInfoDiv.remove();
        });
        productInfoDiv.appendChild(deleteButton);

        productinfoContainer.appendChild(productInfoDiv);
    });

    function updateContainerHeight(){
        productinfoContainer.style.height = (cartItems.length) * 160 + 'px';
        if(cartItems.length > 3){
            mainContainer.style.height = (cartItems.length) * 220 + 'px';
        }
    };

    function updatePrice(){
        cartItems.forEach(function(product) {
            total += product.quantity * product.price;
        });
    };

    let cartAmount = document.querySelector('.cart-amount');

    showCartAmount()
    function showCartAmount(){
        cartAmount.innerText = cartItems.length;
    }
});

