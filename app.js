// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

// Menu toggle function
function toggleMenu() {
    const hamburger = document.querySelector(".hamburger-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
}

document.addEventListener("DOMContentLoaded", () => {
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        const mobileMenu = document.querySelector(".mobile-menu");
        const hamburger = document.querySelector(".hamburger-btn");
        
        if (mobileMenu.classList.contains("active") && 
            !e.target.closest(".mobile-menu") && 
            !e.target.closest(".hamburger-btn")) {
            mobileMenu.classList.remove("active");
            hamburger.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});
