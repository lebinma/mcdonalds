export default class Header {
  constructor(el) {
    this.el = el;
    this.initEventHandlers();
  }

  initEventHandlers() {
    this.el
      .querySelector(".nav .nav__menu-button")
      .addEventListener("click", (e) => this.toggleFoodMenu(e));

    this.el
      .querySelector(".mobile-nav .mobile-nav__hamburger-button")
      .addEventListener("click", (e) => this.toggleMobileMenu(e));

    this.el
      .querySelector(".mobile-nav .mobile-nav__close-button")
      .addEventListener("click", (e) => this.toggleMobileMenu(e));

    this.el
      .querySelectorAll(".mobile-nav .mobile-nav__accordion-button")
      .forEach((el) =>
        addEventListener("click", (e) => this.toggleAccordion(e))
      );
  }

  toggleFoodMenu() {
    this.el.querySelector(".menu").classList.toggle("open");
    this.el.classList.toggle("nav__link--active");
  }

  toggleMobileMenu() {
    this.el.querySelector(".mobile-nav").classList.toggle("mobile-nav--open");
  }

  toggleAccordion(e) {
    e.target.parentElement.classList.toggle("mobile-nav__item--open");
  }
}
