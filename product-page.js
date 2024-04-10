document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.main-image-container img');
  let currentIndex = 0;

  /*Gallery Section*/

  document.getElementById('arrow-image-forward').addEventListener('click', function(){
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('arrow-image-back').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image1').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 0;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image2').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 1;
    images[currentIndex].classList.add('active');
  })

  document.getElementById('gallery-image3').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex = 2;
    images[currentIndex].classList.add('active');
  })

  /*Review Section*/
  const stars = document.querySelectorAll('.star');
  const reviewText = document.getElementById('review-text');
  const reviewsContainer = document.querySelector('.reviews');
  const submitReviewButton = document.querySelector('.submit-review'); 
 
  stars.forEach(function(star) {
    star.addEventListener('click', function() {
      const starDataValue = parseInt(star.dataset.value);

      stars.forEach(function(s) {
        s.classList.remove('active');
      });

      for(let i=0;i<starDataValue; i++){
        stars[i].classList.add('active');
      }
    })
  })

  let totalReviews = 4;

  let progress1 = document.getElementById('1bar');
  let percent1 = document.getElementById('percent1');
  let progress1Count = 0;

  let progress2 = document.getElementById('2bar');
  let percent2 = document.getElementById('percent2');
  let progress2Count = 0;

  let progress3 = document.getElementById('3bar');
  let percent3 = document.getElementById('percent3');
  let progress3Count = 0;

  let progress4 = document.getElementById('4bar');
  let percent4 = document.getElementById('percent4');
  let progress4Count = 2;

  let progress5 = document.getElementById('5bar');
  let percent5 = document.getElementById('percent5');
  let progress5Count = 2;

  submitReviewButton.addEventListener('click', function() {
    const rating = document.querySelectorAll('.star.active').length;
    const reviewTextValue = reviewText.value;
    const starActive = 5-rating;

    if(rating > 0 && reviewTextValue != ''){
      const newReview = document.createElement('div');
      newReview.classList.add('review');

      newReview.innerHTML = `
        <div class="rating"> <span class='star-active'>${'&#9733;'.repeat(rating)}</span> <span class='review-star'>${'&#9733;'.repeat(starActive)}</span> </div>
        <div class="text">${reviewTextValue}</div>
      `
      reviewsContainer.appendChild(newReview);

      reviewTextValue.value = '';
      
      if(rating === 1){
        totalReviews++;
        progress1Count++;

        progress1.value = (progress1Count/totalReviews) * 100;
        progress2.value = (progress2Count/totalReviews) * 100;
        progress3.value = (progress3Count/totalReviews) * 100;
        progress4.value = (progress4Count/totalReviews) * 100;
        progress5.value = (progress5Count/totalReviews) * 100;

        percent1.innerHTML = `${Math.round((progress1Count/totalReviews) * 100)}%`;
        percent2.innerHTML = `${Math.round((progress2Count/totalReviews) * 100)}%`;
        percent3.innerHTML = `${Math.round((progress3Count/totalReviews) * 100)}%`;
        percent4.innerHTML = `${Math.round((progress4Count/totalReviews) * 100)}%`;
        percent5.innerHTML = `${Math.round((progress5Count/totalReviews) * 100)}%`;
      } else if(rating === 2){
        totalReviews++;
        progress2Count++;

        progress1.value = (progress1Count/totalReviews) * 100;
        progress2.value = (progress2Count/totalReviews) * 100;
        progress3.value = (progress3Count/totalReviews) * 100;
        progress4.value = (progress4Count/totalReviews) * 100;
        progress5.value = (progress5Count/totalReviews) * 100;

        percent1.innerHTML = `${Math.round((progress1Count/totalReviews) * 100)}%`;
        percent2.innerHTML = `${Math.round((progress2Count/totalReviews) * 100)}%`;
        percent3.innerHTML = `${Math.round((progress3Count/totalReviews) * 100)}%`;
        percent4.innerHTML = `${Math.round((progress4Count/totalReviews) * 100)}%`;
        percent5.innerHTML = `${Math.round((progress5Count/totalReviews) * 100)}%`;
      } else if(rating === 3){
        totalReviews++;
        progress3Count++;

        progress1.value = (progress1Count/totalReviews) * 100;
        progress2.value = (progress2Count/totalReviews) * 100;
        progress3.value = (progress3Count/totalReviews) * 100;
        progress4.value = (progress4Count/totalReviews) * 100;
        progress5.value = (progress5Count/totalReviews) * 100;

        percent1.innerHTML = `${Math.round((progress1Count/totalReviews) * 100)}%`;
        percent2.innerHTML = `${Math.round((progress2Count/totalReviews) * 100)}%`;
        percent3.innerHTML = `${Math.round((progress3Count/totalReviews) * 100)}%`;
        percent4.innerHTML = `${Math.round((progress4Count/totalReviews) * 100)}%`;
        percent5.innerHTML = `${Math.round((progress5Count/totalReviews) * 100)}%`;
      }else if(rating === 4){
        totalReviews++;
        progress4Count++;

        progress1.value = (progress1Count/totalReviews) * 100;
        progress2.value = (progress2Count/totalReviews) * 100;
        progress3.value = (progress3Count/totalReviews) * 100;
        progress4.value = (progress4Count/totalReviews) * 100;
        progress5.value = (progress5Count/totalReviews) * 100;

        percent1.innerHTML = `${Math.round((progress1Count/totalReviews) * 100)}%`;
        percent2.innerHTML = `${Math.round((progress2Count/totalReviews) * 100)}%`;
        percent3.innerHTML = `${Math.round((progress3Count/totalReviews) * 100)}%`;
        percent4.innerHTML = `${Math.round((progress4Count/totalReviews) * 100)}%`;
        percent5.innerHTML = `${Math.round((progress5Count/totalReviews) * 100)}%`;
      }else if(rating === 5){
        totalReviews++;
        progress5Count++;

        progress1.value = (progress1Count/totalReviews) * 100;
        progress2.value = (progress2Count/totalReviews) * 100;
        progress3.value = (progress3Count/totalReviews) * 100;
        progress4.value = (progress4Count/totalReviews) * 100;
        progress5.value = (progress5Count/totalReviews) * 100;

        percent1.innerHTML = `${Math.round((progress1Count/totalReviews) * 100)}%`;
        percent2.innerHTML = `${Math.round((progress2Count/totalReviews) * 100)}%`;
        percent3.innerHTML = `${Math.round((progress3Count/totalReviews) * 100)}%`;
        percent4.innerHTML = `${Math.round((progress4Count/totalReviews) * 100)}%`;
        percent5.innerHTML = `${Math.round((progress5Count/totalReviews) * 100)}%`;
      }
    } else {
      alert('Please enter a valid rating and review.')
    }
  })

  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let cartAmount = document.querySelector('.cart-amount');

  showCartAmount()
  function showCartAmount(){
      cartAmount.innerText = cartItems.length;
  }
})
  let cartItemsAmount = 0;
  /*Cart*/
function addToCart(){
  const productImageUrl = document.getElementById('gallery-image1').src;
  const productName = document.getElementById('product-name').innerText;
  const productPrice = 2;
  const productQuantity = parseInt(document.getElementById('quantity').value);
  const cartAmount = document.querySelector('.cart-amount');

  const item = {
    imageUrl: productImageUrl,
    name: productName,
    price: productPrice,
    quantity: productQuantity
  }

  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  cartItems.push(item);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  cartItemsAmount = 0;
  cartItems.forEach(function(cartItem){
    console.log(cartItem.quantity)
    cartItemsAmount += cartItem.quantity;
  })
  
  cartAmount.innerText = cartItemsAmount;
}