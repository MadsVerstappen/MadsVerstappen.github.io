// script.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
      });
  });
});

// Event handler for Add to Cart button
const addToCartButtons = document.querySelectorAll('.btn-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
      alert('Product added to cart!');
  });
});

// Event handler for View Product button
const viewProductButtons = document.querySelectorAll('.btn-view');
viewProductButtons.forEach(button => {
  button.addEventListener('click', () => {
      alert('Viewing product details...');
  });
});
// Function to handle "View Product" button click
function viewProduct(productId) {
  // Redirect to the product detail page with product ID as a URL parameter
  window.location.href = `detail produk1.html=${productId}`;
}

// Function to handle "Add to Cart" button click
function addToCart(productId) {
  // Redirect to the cart page with product ID as a URL parameter
  window.location.href = `cart.html?product=${productId}`;
}
