const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", ()=>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
    menuButton.classList.toggle("nav__link--active");
});

const mobileNav= document.getElementById("mobile-nav");
const mobileNavButton = document.getElementById("mobile-nav-button");
const mobileNavCloseButton = document.getElementById("mobile-nav-close");

mobileNavButton.addEventListener("click", ()=>{
    mobileNav.classList.add("mobile-nav--open");
});

mobileNavCloseButton.addEventListener("click", ()=>{
    mobileNav.classList.remove("mobile-nav--open");
});

const mobileMenuButton = document.getElementById("menu-button-mobile");

mobileMenuButton.addEventListener("click", ()=>{
    const menuAccordion = document.getElementById("menu-accordion");
    menuAccordion.classList.toggle("mobile-nav__item--open");
});