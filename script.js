// Minimal "Add to Cart" Logic Using localStorage

// Update the cart display in the offcanvas panel
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalElem = document.getElementById('cartTotal');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cartItemsContainer.innerHTML = '';
  let total = 0;
  
  cart.forEach((item, index) => {
    total += parseFloat(item.price);
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${item.name} - $${item.price} <button class="btn btn-sm btn-danger remove-item" data-index="${index}">&times;</button>`;
    cartItemsContainer.appendChild(li);
  });
  
  cartTotalElem.textContent = `$${total.toFixed(2)}`;
  
  // Attach event listeners to remove buttons
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      removeFromCart(index);
    });
  });
}

// Add a product to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  alert(product.name + ' added to cart!');
}

// Remove a product from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    const productName = this.getAttribute('data-product-name');
    const productPrice = this.getAttribute('data-product-price');
    const product = {
      id: productId,
      name: productName,
      price: productPrice
    };
    addToCart(product);
  });
});

// Initialize the cart display when the page loads
document.addEventListener('DOMContentLoaded', updateCartDisplay);
