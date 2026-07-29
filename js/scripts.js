const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-link");


/* ==============================
   ACTIVE NAV LINK ON SCROLL
================================ */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* ==============================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const mobileMenu = document.querySelector(".nav-links");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");


function openMenu() {

    mobileMenu.classList.add("open");
    menuOverlay.classList.add("active");

    document.body.classList.add("menu-open");

    menuBtn.setAttribute("aria-expanded", "true");
}


function closeMenu() {

    mobileMenu.classList.remove("open");
    menuOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuBtn.setAttribute("aria-expanded", "false");
}


menuBtn.addEventListener("click", openMenu);

menuCloseBtn.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", closeMenu);


mobileMenuLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu();
    }

});


/* ==============================
   THEME SWITCH
================================ */

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const html = document.documentElement;


function setTheme(theme) {

    html.setAttribute("data-theme", theme);

    const isDark = theme === "dark";

    themeIcon.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
    );

    localStorage.setItem("nws-theme", theme);
}


/* Check whether the user already chose a theme */

const savedTheme = localStorage.getItem("nws-theme");


if (savedTheme === "dark" || savedTheme === "light") {

    setTheme(savedTheme);

} else {

    setTheme(
        html.getAttribute("data-theme") || "light"
    );

}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

    const currentTheme =
        html.getAttribute("data-theme");

    setTheme(
        currentTheme === "dark"
            ? "light"
            : "dark"
    );

});