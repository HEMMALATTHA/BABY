document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".eb-dropbtn");
    const dropContent = document.querySelector(".eb-dropdown-content");

    dropBtn.addEventListener("click", function (e) {
        e.preventDefault();
        dropContent.style.display = 
            dropContent.style.display === "block" ? "none" : "block";
    });
});
