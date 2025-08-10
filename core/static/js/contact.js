
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Email regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone regex (10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if (!firstName) {
        alert("Please enter your First Name.");
        return;
    }
    if (!lastName) {
        alert("Please enter your Last Name.");
        return;
    }
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid Email.");
        return;
    }
    if (!phone || !phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit Phone Number.");
        return;
    }
    if (!message) {
        alert("Please enter your message.");
        return;
    }

    alert("Message sent!");
    document.getElementById("contactForm").reset();
});

