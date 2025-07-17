// Enhanced Cart functionality
let cartItems = [];

// Floating Notification System
function showFloatingNotification(title, message, type = 'default', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.floating-notification');
    existingNotifications.forEach(notification => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 400);
    });

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `floating-notification ${type}`;
    
    const iconSymbol = type === 'success' ? '✓' : 
                      type === 'info' ? 'i' : 
                      type === 'process' ? '⚡' : '🛒';
    
    notification.innerHTML = `
        <div class="notification-icon">${iconSymbol}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close">&times;</button>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 400);
    });

    // Auto hide after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 400);
        }
    }, duration);
}

function updateCartNotification() {
    const notificationElement = document.querySelector('.notification-number');
    // Show total number of items in cart (not individual quantities)
    notificationElement.textContent = cartItems.length;
}

function addToCart(productName, price, imageSrc = '') {
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showFloatingNotification(
            'Item Updated!', 
            `${productName} quantity increased to ${existingItem.quantity}`, 
            'success'
        );
    } else {
        cartItems.push({ 
            name: productName, 
            price: price, 
            quantity: 1,
            image: imageSrc
        });
        showFloatingNotification(
            'Added to Cart!', 
            `${productName} has been added to your cart`, 
            'success'
        );
    }
    
    updateCartNotification();
    updateCartDisplay();
}

function removeFromCart(productName) {
    const itemIndex = cartItems.findIndex(item => item.name === productName);
    if (itemIndex > -1) {
        const item = cartItems[itemIndex];
        cartItems.splice(itemIndex, 1);
        updateCartNotification();
        updateCartDisplay();
        showFloatingNotification(
            'Item Removed', 
            `${productName} has been removed from your cart`, 
            'info'
        );
    }
}

function updateQuantity(productName, newQuantity) {
    const item = cartItems.find(item => item.name === productName);
    if (item) {
        const oldQuantity = item.quantity;
        item.quantity = Math.max(1, newQuantity);
        updateCartNotification();
        updateCartDisplay();
    }
}

function calculateCartTotal() {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = cartItems.length > 0 ? 299 : 0;
    const tax = Math.round(subtotal * 0.08); // 8% tax, rounded to whole number
    const total = subtotal + deliveryFee + tax;
    
    return { subtotal, deliveryFee, tax, total };
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartContent = document.querySelector('.cart-content');
    
    if (cartItems.length === 0) {
        cartContent.style.display = 'none';
        emptyCartMessage.style.display = 'block';
    } else {
        cartContent.style.display = 'flex';
        emptyCartMessage.style.display = 'none';
        
        cartItemsList.innerHTML = '';
        
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image || './product-img/1.png'}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">৳${item.price} each</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', ${item.quantity - 1})">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            `;
            cartItemsList.appendChild(cartItemElement);
        });
        
        // Update totals
        const totals = calculateCartTotal();
        document.getElementById('cart-subtotal').textContent = `৳${totals.subtotal}`;
        document.getElementById('delivery-fee').textContent = `৳${totals.deliveryFee}`;
        document.getElementById('tax-amount').textContent = `৳${totals.tax}`;
        document.getElementById('cart-total').textContent = `৳${totals.total}`;
    }
}

function openCart() {
    document.getElementById('cart-page').style.display = 'block';
    updateCartDisplay();
    // Prevent body scroll when cart is open
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-page').style.display = 'none';
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Order Now button functionality
function handleOrderNowClick() {
    showFloatingNotification(
        'Order Now', 
        'Scrolling to menu... Select your favorite items!', 
        'info'
    );
    // Scroll to products section
    document.querySelector('.product').scrollIntoView({ behavior: 'smooth' });
}

// Order Process button functionality
function handleOrderProcessClick() {
    showFloatingNotification(
        'Order Process', 
        'Check out our simple 6-step ordering process', 
        'process',
        5000
    );
}

// Newsletter subscription functionality
function handleNewsletterSubscription() {
    var emailInput = document.getElementById('email-input');
    var message = document.getElementById('subscribe-message');

    if (emailInput.value.trim() !== '') {
        showFloatingNotification(
            'Subscribed!', 
            'You have successfully subscribed to our newsletter', 
            'success'
        );
        message.style.display = 'none';
        emailInput.value = ''; // Clear the input
    } else {
        showFloatingNotification(
            'Invalid Email', 
            'Please enter a valid email address', 
            'info'
        );
    }
}

// Show More/Less Products functionality
function handleToggleProducts() {
    var hiddenProducts = document.querySelectorAll('.food-box-container .food-box[style*="display: none"]');
    var button = document.getElementById('toggle-products-button');

    if (hiddenProducts.length > 0) {
        hiddenProducts.forEach(function (product) {
            product.style.display = 'block';
        });
        button.textContent = 'Show Less';
        showFloatingNotification(
            'Menu Expanded', 
            'Showing all available items', 
            'info'
        );
    } else {
        var visibleProducts = document.querySelectorAll('.food-box-container .food-box');
        var counter = 0;
        visibleProducts.forEach(function (product) {
            if (counter >= 6) {
                product.style.display = 'none';
            }
            counter++;
        });
        button.textContent = 'Show More Products';
        showFloatingNotification(
            'Menu Collapsed', 
            'Showing popular items only', 
            'info'
        );
    }
}

// Checkout functionality
function handleCheckout() {
    if (cartItems.length === 0) {
        showFloatingNotification(
            'Cart Empty', 
            'Add some delicious items to checkout!', 
            'info'
        );
        return;
    }
    
    const totals = calculateCartTotal();
    showFloatingNotification(
        'Order Confirmed!', 
        `Thank you! Your order total is ৳${totals.total}. We'll prepare it right away!`, 
        'success',
        5000
    );
    
    // Clear cart after checkout
    cartItems = [];
    updateCartNotification();
    closeCart();
}

// Browse menu functionality
function handleBrowseMenu() {
    closeCart();
    document.querySelector('.product').scrollIntoView({ behavior: 'smooth' });
}

// Navigation functionality
function handleNavigationClick(navItem) {
    if (navItem.textContent === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showFloatingNotification(
            'Welcome Back', 
            'Scrolling to top of the page', 
            'info'
        );
    } else if (navItem.textContent === 'Cart') {
        openCart();
    }
}

// Footer newsletter subscription functionality
function handleFooterSubscription(emailInput) {
    if (emailInput.value.trim() !== '') {
        showFloatingNotification(
            'Newsletter Subscription', 
            'Thank you for subscribing to our newsletter!', 
            'success'
        );
        emailInput.value = '';
    } else {
        showFloatingNotification(
            'Invalid Email', 
            'Please enter a valid email address', 
            'info'
        );
    }
}

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all "Add To Cart" buttons
    const addToCartButtons = document.querySelectorAll('.text-box-left button');
    
    addToCartButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            const foodBox = button.closest('.food-box');
            const productName = foodBox.querySelector('h3').textContent;
            const priceText = foodBox.querySelector('.text-box-right p').textContent;
            const price = parseInt(priceText.replace('৳', ''));
            const imageSrc = foodBox.querySelector('#product-img').src;
            
            addToCart(productName, price, imageSrc);
        });
    });

    // Cart icon click functionality
    document.querySelector('.cart').addEventListener('click', openCart);
    document.querySelector('.cart-image').addEventListener('click', openCart);

    // Cart page event listeners
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('continue-shopping').addEventListener('click', closeCart);
    document.getElementById('browse-menu').addEventListener('click', handleBrowseMenu);

    // Order buttons
    document.getElementById('or-btn-1').addEventListener('click', handleOrderNowClick);
    document.getElementById('or-btn-2').addEventListener('click', handleOrderProcessClick);

    // Newsletter subscription
    document.getElementById('subscribe-button').addEventListener('click', handleNewsletterSubscription);

    // Toggle products button
    document.getElementById('toggle-products-button').addEventListener('click', handleToggleProducts);

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);

    // Close cart when clicking outside
    document.getElementById('cart-page').addEventListener('click', function(e) {
        if (e.target.id === 'cart-page') {
            closeCart();
        }
    });

    // Footer newsletter subscription functionality
    const footerSubscribeButtons = document.querySelectorAll('footer button');
    footerSubscribeButtons.forEach(function(button) {
        if (button.textContent.trim() === '>') {
            button.addEventListener('click', function() {
                const emailInput = button.previousElementSibling;
                if (emailInput && emailInput.type === 'email') {
                    handleFooterSubscription(emailInput);
                }
            });
        }
    });

    // Navigation functionality for Home and Cart
    const navItems = document.querySelectorAll('.nav h2');
    
    navItems.forEach(function(navItem) {
        navItem.style.cursor = 'pointer';
        navItem.addEventListener('click', function() {
            handleNavigationClick(navItem);
        });
    });
});
