// ================================
// Mobile Menu
// ================================

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
};

// Close menu after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    });
});

// ================================
// Header Background on Scroll
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#2f1b14";
        header.style.transition = ".4s";
    } else {
        header.style.background = "rgba(0,0,0,.55)";
    }

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================================
// Reveal Animation
// ================================

const sections = document.querySelectorAll("section");

const revealSection = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all .8s ease";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";

});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// ================================
// Button Hover Effect
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ================================
// Current Year in Footer (Optional)
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Brew Haven Coffee. All Rights Reserved.`;

}