// /static/js/payment.js
document.addEventListener("DOMContentLoaded", () => {
    const paymentContent = document.getElementById("payment-content");

    // Helper function to display a custom message box
    function showMessageBox(message, type = 'error') {
        let messageBox = document.getElementById('message-box');
        if (!messageBox) {
            messageBox = document.createElement('div');
            messageBox.id = 'message-box';
            document.body.appendChild(messageBox);
        }
        messageBox.textContent = message;
        messageBox.className = type;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    // Retrieve the cart data from localStorage
    const cartItemJSON = localStorage.getItem("cartItemForPayment");

    if (!cartItemJSON) {
        paymentContent.innerHTML = `<div class="error-message">No order details found. Please return to your cart.</div>`;
        return;
    }

    try {
        const cartItem = JSON.parse(cartItemJSON);
        console.log("Order details loaded:", cartItem);

        const paymentHTML = `
            <div class="billing-details">
                <form id="billing-form">
                    <div class="form-group">
                        <label for="firstName">First Name<span>*</span></label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName">
                    </div>
                    <div class="form-group">
                        <label for="streetAddress">Street Address<span>*</span></label>
                        <input type="text" id="streetAddress" name="streetAddress" required>
                    </div>
                    <div class="form-group">
                        <label for="apartment">Apartment, Floor, etc (Optional)</label>
                        <input type="text" id="apartment" name="apartment">
                    </div>
                    <div class="form-group">
                        <label for="city">Town / City<span>*</span></label>
                        <input type="text" id="city" name="city" required>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number<span>*</span></label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address<span>*</span></label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-checkbox">
                        <input type="checkbox" id="saveInfo" name="saveInfo">
                        <label for="saveInfo">Save this information for faster check-out next time</label>
                    </div>
                    <button id="place-order-btn" class="place-order-button" type="submit">Place Order</button>
                </form>
            </div>
            
            <div class="cart-total-summary">
                <div class="cart-total-box">
                    <h2 class="cart-total-title">Cart Total</h2>
                    <div class="summary-line">
                        <span>Subtotal:</span>
                        <span>₹${cartItem.total}</span>
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
                        <span>₹${cartItem.total - 250}</span>
                    </div>
                    <div class="payment-methods">
                        <img src="https://placehold.co/60x30/FFFFFF/000000?text=GPay" alt="GPay" class="payment-icon">
                        <img src="https://placehold.co/60x30/FFFFFF/000000?text=Apple" alt="Apple Pay" class="payment-icon">
                        <img src="https://placehold.co/60x30/FFFFFF/000000?text=Amazon" alt="Amazon Pay" class="payment-icon">
                        <img src="https://placehold.co/60x30/FFFFFF/000000?text=PayPal" alt="PayPal" class="payment-icon">
                        <img src="https://placehold.co/60x30/FFFFFF/000000?text=Mastercard" alt="Mastercard" class="payment-icon">
                        <span class="add-payment">+ Add</span>
                    </div>
                    <div class="payment-option">
                        <input type="radio" id="cod" name="payment-method" value="cod" checked>
                        <label for="cod">Cash on delivery</label>
                    </div>
                </div>
            </div>
        `;
        
        paymentContent.innerHTML = paymentHTML;

        // Add event listener for the form submission
        const billingForm = document.getElementById("billing-form");
        billingForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission by default

            // Validate the form fields
            if (validateForm()) {
                showMessageBox("Order placed successfully!", "success");
                // Redirect to the order success page after a short delay
                setTimeout(() => {
                    window.location.href = "/ordersuccess";
                }, 1000);
            }
        });

        // Validation Logic
        function validateForm() {
            const requiredFields = ["firstName", "streetAddress", "city", "phoneNumber", "email"];
            let isValid = true;
            let firstInvalidField = null;

            requiredFields.forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (!input.value.trim()) {
                    input.classList.add("invalid-field");
                    isValid = false;
                    if (!firstInvalidField) {
                        firstInvalidField = input;
                    }
                } else {
                    input.classList.remove("invalid-field");
                }
            });

            if (!isValid) {
                showMessageBox("Please fill out all required fields.");
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            }
            return isValid;
        }

    } catch (e) {
                console.error("Failed to parse cart data from localStorage", e);
                paymentContent.innerHTML = `<div class="error-message">Error loading order details.</div>`;
    }
});
