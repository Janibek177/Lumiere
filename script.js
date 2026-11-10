const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const addToCartButtons = document.querySelectorAll('.add-cart-btn');
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

openCartBtn.addEventListener('click', () => {
    cartDrawer.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
        cartDrawer.classList.add('open');
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        const priceSpan = document.createElement('span');
        
        nameSpan.textContent = item.name;
        priceSpan.textContent = '$' + item.price.toFixed(2);
        
        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        cartItemsElement.appendChild(li);
        
        total += item.price;
    });
    
    cartTotalElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields');
    } else {
        alert('Successfully sent');
        contactForm.reset();
    }
});