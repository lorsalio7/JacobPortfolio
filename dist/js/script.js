"use strict";

var burgerButton = document.querySelector(".burger-button");
var siteMenu = document.querySelector(".page__site-header");
var pageContent = document.querySelector(".page__page-content");
burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("burger-button--active");
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
;