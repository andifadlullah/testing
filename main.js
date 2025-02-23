// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);181204
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar color change on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Hero text animation
    const heroText = document.querySelector(".hero-name span");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(20px)";
        setTimeout(() => {
            heroText.style.transition = "all 1s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 500);
    }

    // Button hover effect
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Add fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(el => observer.observe(el));
});

// Burger menu
document.addEventListener("DOMContentLoaded", function () {
    const offcanvasElement = document.getElementById("offcanvasDarkNavbar");
    const menuItems = document.querySelectorAll(".nav-link"); // Sesuaikan dengan class item menu

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide(); // Menutup offcanvas
        });
    });
});