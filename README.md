# 🍔 GOOD FOOD - Food Delivery Website

A modern, responsive food delivery website built with HTML, CSS, and JavaScript. This project features a complete e-commerce experience with shopping cart functionality, floating notifications, and professional UI/UX design.

![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Live Demo

Visit the live website: [Good Food Delivery](https://github.com/Ajlanalif/food-delivery)

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Business Information](#-business-information)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🛒 **E-commerce Functionality**

- **Complete Shopping Cart System** with add, remove, and quantity management
- **Real-time Cart Updates** with notification badges
- **Order Summary** with subtotal, delivery fee (৳299), and 8% tax calculation
- **Checkout Process** with order confirmation

### 🎨 **Modern UI/UX Design**

- **Responsive Design** optimized for desktop and mobile devices
- **Professional Floating Notifications** replacing browser alerts
- **Smooth Animations** and hover effects throughout
- **Consistent Color Scheme** with orange/yellow branding (#F48E28)

### 🍽️ **Product Management**

- **12 Food Items** with high-quality images and ratings
- **Show More/Less Functionality** (6 items initially, expandable to 12)
- **Uniform Product Cards** with consistent sizing and layout
- **Star Ratings** and Bangladeshi Taka (৳) pricing

### 📱 **Interactive Features**

- **Smooth Scrolling Navigation** between sections
- **Newsletter Subscription** with email validation
- **Search Bar** (UI ready for implementation)
- **Cart Modal** with full-screen overlay

### 🏢 **Business Sections**

- **Hero Banner** with featured menu items
- **Services Section** highlighting quality, health, and fast delivery
- **Customer Testimonials** with professional layout
- **Contact Information** and business hours

## 🗂️ Project Structure

```
food-delivery/
├── 📄 index.html          # Main HTML structure
├── 📄 script.js           # All JavaScript functionality
├── 🎨 root.css           # Global styles and variables
├── 🎨 banner.css         # Header and banner styling
├── 🎨 main.css           # Product and main content styles
├── 🎨 footer.css         # Footer section styles
├── 🎨 cart.css           # Shopping cart modal styles
├── 📁 logo/              # Brand logos and icons
│   ├── Untitled-1 1.png
│   ├── burger.png
│   ├── cart logo.png
│   └── ...
├── 📁 product-img/       # Food product images (1.png - 12.png)
├── 📁 service/           # Service icons (1.png - 3.png)
├── 📁 testi/             # Testimonial images
└── 📄 README.md          # Project documentation
```

## 🛠️ Technologies Used

### **Frontend**

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - Interactive functionality and DOM manipulation

### **Design Features**

- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Animations** - Smooth transitions and effects
- **Modular CSS** - Organized stylesheet architecture

### **Development Practices**

- **Separation of Concerns** - HTML, CSS, and JS in separate files
- **Clean Code** - Well-organized and commented code
- **Performance Optimization** - Efficient loading and caching
- **Cross-browser Compatibility** - Works across modern browsers

## 🚀 Installation

### **Prerequisites**

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### **Setup Instructions**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ajlanalif/food-delivery.git
   cd food-delivery
   ```

2. **Open the project**

   - Simply open `index.html` in your web browser
   - Or use a local server for development:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. **Start developing**
   - Modify CSS files for styling changes
   - Update `script.js` for functionality enhancements
   - Add new product images to `product-img/` folder

## 💻 Usage

### **For Customers**

1. **Browse Menu**: Scroll through available food items
2. **Add to Cart**: Click "Add To Cart" on desired items
3. **Manage Cart**: Adjust quantities or remove items
4. **Checkout**: Review order and proceed to checkout
5. **Newsletter**: Subscribe for deals and updates

### **For Developers**

1. **Product Management**: Add new items by updating HTML and adding images
2. **Styling**: Modify CSS files for design changes
3. **Functionality**: Enhance JavaScript for new features
4. **Responsive Design**: Test across different screen sizes

### **Desktop View**

- Modern hero section with featured items
- Grid layout for food products
- Professional cart modal interface

### **Mobile View**

- Responsive design with optimized layouts
- Touch-friendly navigation and buttons
- Stacked layout for smaller screens

## 🎯 Key Features Breakdown

### **Shopping Cart System**

```javascript
// Add item to cart
addToCart(productName, price, imageSrc);

// Update quantity
updateQuantity(productName, newQuantity);

// Remove item
removeFromCart(productName);

// Calculate totals
calculateCartTotal();
```

### **Notification System**

```javascript
// Show floating notification
showFloatingNotification(title, message, type, duration);
```

### **Responsive Design**

```css
/* Mobile-first approach */
@media only screen and (min-width: 200px) and (max-width: 768px) {
  /* Mobile styles */
}
```

## 🔧 Customization

### **Adding New Products**

1. Add product image to `product-img/` folder
2. Update HTML with new product card
3. Ensure consistent pricing format: `৳XXXX`

### **Modifying Styles**

- **Colors**: Update CSS variables in `root.css`
- **Layout**: Modify grid/flexbox properties in respective CSS files
- **Animations**: Adjust transition timings and effects

### **Enhancing Functionality**

- **Payment Integration**: Add payment gateway to checkout process
- **User Authentication**: Implement login/signup functionality
- **Order Tracking**: Add order status and tracking features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines**

1. **Code Style**: Maintain consistent formatting and naming conventions
2. **Comments**: Add clear comments for complex functionality
3. **Testing**: Test across different browsers and devices
4. **Documentation**: Update README for significant changes

### **How to Contribute**

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Future Enhancements

- [ ] **Backend Integration** - Add server-side functionality
- [ ] **Payment Gateway** - Integrate online payment systems
- [ ] **User Accounts** - Registration and login system
- [ ] **Order Tracking** - Real-time order status updates
- [ ] **Admin Panel** - Content management system
- [ ] **Multi-language** - Support for Bengali and English
- [ ] **PWA Features** - Offline functionality and app-like experience

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ajlanalif**

- GitHub: [@Ajlanalif](https://github.com/Ajlanalif)
- Project: [food-delivery](https://github.com/Ajlanalif/food-delivery)

## 🙏 Acknowledgments

- **Images**: Food product images and icons
- **Inspiration**: Modern food delivery platforms
- **Design**: Material Design principles and modern UI/UX trends

---

⭐ **Star this repository if you found it helpful!**

For questions or support, please open an issue on GitHub.
