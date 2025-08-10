// /static/js/checkout.js
document.addEventListener("DOMContentLoaded", () => {
    const checkoutContent = document.getElementById("checkout-content");

    // 1. Retrieve the product data from localStorage
    const productJSON = localStorage.getItem("selectedProduct");
    
    if (!productJSON) {
        // If no product is found, show an error message
        checkoutContent.innerHTML = `<div class="error-message">No product selected. Please go back and select a product.</div>`;
        return;
    }

    try {
        const product = JSON.parse(productJSON);
        console.log("Product data loaded:", product);

        // 2. Build the HTML string using the product data
        const productHTML = `
            <main class="product-container">
                <!-- Product Image Section -->
                <section class="image-section">
                    <div class="coupon-tag">Coupon: EB55</div>
                    <img src="${product.img}" alt="${product.name}" class="product-image">
                </section>

                <!-- Product Details Section -->
                <section class="details-section">
                    <h1 class="product-title">${product.name}</h1>
                    <div class="rating-info">
                        <div class="star-rating">${'★'.repeat(Math.floor(product.rating))}</div>
                        <span class="reviews">(18 Reviews)</span> |
                        <span class="stock-status">In Stock</span>
                    </div>
                    <p class="product-description">
                        Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for all-day comfort and protection. Crafted with ultra-soft, breathable materials, these diapers keep your little one dry, happy, and rash-free. The super-absorbent core locks in moisture for up to 12 hours of leak-free protection, while the flexible waistband ensures a snug yet comfy fit as your baby moves and plays. Plus, a built-in wetness indicator makes changing time easier than ever.
                    </p>
                    <div class="product-variants">
                        <div class="variant-label">Colours:</div>
                        <div class="color-swatch purple-swatch"></div>
                        <div class="color-swatch cyan-swatch"></div>
                        <div class="variant-label size-label">Size: Free Size</div>
                    </div>
                    <div class="price-box">
                        <span class="mrp-price">MRP ₹${product.mrp}</span>
                        <span class="sale-price" id="sale-price">Sale Price ₹${product.price}</span>
                    </div>
                    <div class="quantity-control">
                        <button class="quantity-btn minus-btn" id="minus-btn">-</button>
                        <span class="quantity-value" id="quantity-value">1</span>
                        <button class="quantity-btn plus-btn" id="plus-btn">+</button>
                    </div>
                    <button class="buy-now-btn" id="buy-now-btn">Buy Now</button>
                </section>
            </main>

            <!-- Delivery and Return Info Section -->
            <section class="info-container">
                <div class="info-card">
                    <div class="info-header">
                        <span class="icon">🚚</span>
                        <h3>Free Delivery</h3>
                    </div>
                    <p class="info-text">
                        <a href="#">Enter your postal code for Delivery Availability</a>
                    </p>
                </div>
                <div class="info-card">
                    <div class="info-header">
                        <span class="icon">🔄</span>
                        <h3>Return Delivery</h3>
                    </div>
                    <p class="info-text">
                        <a href="#">Free 7 Days Delivery Returns. <u>Details</u></a>
                    </p>
                </div>
            </section>
        `;

        // 3. Inject the HTML into the page
        checkoutContent.innerHTML = productHTML;

        // 4. Add event listeners for the quantity buttons and 'Buy Now' button
        const minusBtn = document.getElementById("minus-btn");
        const plusBtn = document.getElementById("plus-btn");
        const quantityValue = document.getElementById("quantity-value");
        const buyNowBtn = document.getElementById("buy-now-btn");
        const salePriceElement = document.getElementById("sale-price");
        
        let quantity = 1;
        const basePrice = product.price;

        function updatePrice() {
            const totalPrice = basePrice * quantity;
            salePriceElement.textContent = `Sale Price ₹${totalPrice}`;
        }
        
        minusBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
                updatePrice();
            }
        });

        plusBtn.addEventListener("click", () => {
            quantity++;
            quantityValue.textContent = quantity;
            updatePrice();
        });

        buyNowBtn.addEventListener("click", () => {
            // Create a cart item object
            const cartItem = {
                id: product.id, // Assuming product has a unique ID
                name: product.name,
                img: product.img,
                price: product.price,
                mrp: product.mrp,
                quantity: quantity,
                total: basePrice * quantity
            };
            
            // Save the cart item to localStorage
            // You can also add it to an existing array of cart items if you have a full cart
            localStorage.setItem("cartItem", JSON.stringify(cartItem));
            
            // Redirect to the cart page
            window.location.href = "/cart";
        });

    } catch (e) {
        console.error("Failed to parse product data from localStorage", e);
        checkoutContent.innerHTML = `<div class="error-message">Error loading product data.</div>`;
    }
});
