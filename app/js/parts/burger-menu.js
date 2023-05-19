const burgerButton = document.querySelector(".burger-button");
const siteMenu = document.querySelector(".page__site-header");
const pageContent = document.querySelector(".page__page-content");

burgerButton.addEventListener("click",() => {
  burgerButton.classList.toggle("burger-button--active")
  if(burgerButton.classList.contains("burger-button--active")) {
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
