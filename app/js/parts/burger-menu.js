const burgerButton = document.querySelector(".burger-button");
const siteMenu = document.querySelector(".page__site-header");
const pageContent = document.querySelector(".page__page-content");
const menuLinks = siteMenu.querySelectorAll(".site-navigation__link");
const pageHtml = document.querySelector("html");
let widthHeader = window.getComputedStyle(siteMenu).getPropertyValue("--width-header");
const overlay = document.querySelector(".overlay");


const sections = document.querySelectorAll(".fullsize");

function callbackObserver(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting === true) {
      menuLinks.forEach(link => {
        let id = link.getAttribute("href").replace("#", "");

        if (id === entry.target.id) {
          link.classList.add("site-navigation__link--active");
        } else {
          link.classList.remove("site-navigation__link--active");
        }
      })
    }
  })
}
const observer = new IntersectionObserver(callbackObserver,
  { root: document.querySelector("page__page-content"),threshold: 0.1 }
);
sections.forEach(section => observer.observe(section));

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button--active")
  if (burgerButton.classList.contains("burger-button--active")) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  siteMenu.classList.add("page__site-header--active");
  pageHtml.classList.add("no-scroll");
  overlay.classList.add("overlay--active");
}

function closeMenu() {
  burgerButton.classList.remove("burger-button--active");
  siteMenu.classList.remove("page__site-header--active");
  pageHtml.classList.remove("no-scroll");
  overlay.classList.remove("overlay--active");
}

overlay.addEventListener("click", () => {
  if(overlay.classList.contains("overlay--active")) {
    closeMenu();
  }
})
