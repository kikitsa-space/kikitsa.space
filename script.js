/* ==========================
   KIKITSA
   script.js
========================== */

// Fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document
    .querySelectorAll(".feature, .card, .gallery img")
    .forEach((el) => observer.observe(el));


// Sticky header effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
    } else {
        header.style.padding = "22px 8%";
        header.style.boxShadow = "none";
    }

});


// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Gallery Lightbox
const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="close-lightbox">&times;</span>
    <img id="lightbox-image">
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImage.src = image.src;

        document.body.style.overflow = "hidden";

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";
        document.body.style.overflow = "auto";

    }

});


// Escape key closes lightbox
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";
        document.body.style.overflow = "auto";

    }

});


// Smooth button hover
document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


// Welcome message
console.log(" website loaded successfully.");
