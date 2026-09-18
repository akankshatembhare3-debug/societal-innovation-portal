// ===============================
// CampusConnect - Common JS
// ===============================

// Mobile menu toggle
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// Highlight current page in navbar
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});