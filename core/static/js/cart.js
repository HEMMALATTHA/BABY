// /static/js/cart.js
document.addEventListener("DOMContentLoaded", () => {
    const cartItemList = document.getElementById("cart-item-list");
    const cartSummary = document.getElementById("cart-summary");

    // Retrieve the cart data from localStorage
    const cartItemJSON = localStorage.getItem("cartItem");
    
    if (!cartItemJSON) {
        cartItemList.innerHTML = `<div class="empty-cart-message">Your cart is empty.</div>`;
        cartSummary.innerHTML = "";
        return;
    }

    try {
        let cartItem = JSON.parse(cartItemJSON);
        
        const renderCart = () => {
            // Render cart item list
            cartItemList.innerHTML = `
                <div class="cart-table-header">
                    <span class="product-col">Product</span>
                    <span class="price-col">Price</span>
                    <span class="quantity-col">Quantity</span>
                    <span class="subtotal-col">Subtotal</span>
                </div>
                <div class="cart-item-row">
                    <div class="product-info-cell">
                        <img src="${cartItem.img}" alt="${cartItem.name}" class="product-image">
                        <span class="product-name">${cartItem.name}</span>
                    </div>
                    <span class="price-cell">₹${cartItem.price}</span>
                    <div class="quantity-cell">
                        <button class="quantity-btn" id="minus-btn">-</button>
                        <span class="quantity-value" id="quantity-value">${cartItem.quantity}</span>
                        <button class="quantity-btn" id="plus-btn">+</button>
                    </div>
                    <span class="subtotal-cell" id="subtotal-value">₹${cartItem.total}</span>
                    <button class="remove-btn">×</button>
                </div>
            `;
            
            // Render cart summary
            cartSummary.innerHTML = `
                <div class="cart-total-box">
                    <h2 class="cart-total-title">Cart Total</h2>
                    <div class="summary-line">
                        <span>Subtotal:</span>
                        <span id="summary-subtotal">₹${cartItem.total}</span>
                    </div>
                    <div class="summary-line">
                        <span>Discount:</span>
                        <span>₹250</span>
                    </div>
                    <div class="summary-line shipping-line">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div class="summary-line total-line">
                        <span>Total:</span>
                        <span id="summary-total">₹${cartItem.total - 250}</span>
                    </div>
                    <button class="checkout-button">Process to checkout</button>
                </div>
            `;

            // Add event listeners after rendering
            const minusBtn = document.getElementById("minus-btn");
            const plusBtn = document.getElementById("plus-btn");
            const checkoutButton = document.querySelector(".checkout-button");
            
            minusBtn.addEventListener("click", () => {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                    cartItem.total = cartItem.price * cartItem.quantity;
                    localStorage.setItem("cartItem", JSON.stringify(cartItem));
                    renderCart();
                }
            });

            plusBtn.addEventListener("click", () => {
                cartItem.quantity++;
                cartItem.total = cartItem.price * cartItem.quantity;
                localStorage.setItem("cartItem", JSON.stringify(cartItem));
                renderCart();
            });

            checkoutButton.addEventListener("click", () => {
                // Save the final cart item to local storage
                localStorage.setItem("cartItemForPayment", JSON.stringify(cartItem));
                // Navigate to the payment page
                window.location.href = "/payment";
            });
        };

        renderCart();

    } catch (e) {
        console.error("Failed to parse cart data from localStorage", e);
        cartItemList.innerHTML = `<div class="error-message">Error loading cart data.</div>`;
        cartSummary.innerHTML = "";
    }
});
