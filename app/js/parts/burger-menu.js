const burgerButton = document.querySelector(".burger-button");
const siteMenu = document.querySelector(".page__site-header");
const pageContent = document.querySelector(".page__page-content");
const menuLinks = siteMenu.querySelectorAll(".site-navigation__link");

// menuLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     removeActiveClass(menuLinks);
//     link.classList.add("site-navigation__link--active");
//   })
// });

// function removeActiveClass(elements) {
//   for(let i = 0; i < elements.length; i++) {
//     elements[i].classList.remove("site-navigation__link--active");
//   }
// }


const sections = document.querySelectorAll(".fullsize");

function callbackObserver(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting === true) {
      console.log(entry.target.id);
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
  { root: document.querySelector("page__page-content"),threshold: 0.5 }
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
  pageContent.style.transform = "translateX(300px)";
  siteMenu.classList.add("page__site-header--active");
}

function closeMenu() {
  pageContent.style.transform = "translateX(0)";
  siteMenu.classList.remove("page__site-header--active");
}
