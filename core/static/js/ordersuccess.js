 // ordersuccess.js
        document.addEventListener("DOMContentLoaded", () => {
            const countdownElement = document.getElementById("countdown");
            let countdownValue = 5;

            // Helper function to display a custom message box
            function showMessageBox(message, type = 'success') {
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

            const intervalId = setInterval(() => {
                countdownValue--;
                if (countdownElement) {
                    countdownElement.textContent = countdownValue;
                }

                if (countdownValue <= 0) {
                    clearInterval(intervalId);
                    
                    // Clear the cart data from localStorage
                    localStorage.removeItem("cartItem");
                    localStorage.removeItem("cartItemForPayment");
                    showMessageBox("Redirecting to the home page...");
                    
                    // Redirect to the home page
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000);
                }
            }, 1000);
        });