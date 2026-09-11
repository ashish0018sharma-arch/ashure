// ========================================
// MOBILE MENU
// ========================================

const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".navbar nav");


// Create mobile menu button

const menuButton = document.createElement("button");

menuButton.className = "menu-button";

menuButton.innerHTML = "☰";

navbar.appendChild(menuButton);


// Open / Close Menu

menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});


// ========================================
// CURRENT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}