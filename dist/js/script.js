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
var accordion = document.querySelector(".accordion");
if (accordion) {
  var closeSpoiler = function closeSpoiler(index) {
    accordionPanels.forEach(function (accordionPanel, index2) {
      if (index != index2) {
        accordionPanel.style.maxHeight = 0;
        accordionPanel.setAttribute("aria-hidden", "true");
        var accordionItem2 = accordionPanel.parentNode;
        var button2 = accordionPanel.previousElementSibling;
        accordionItem2.style.paddingBottom = 0;
        button2.classList.remove("accordion__button--active");
        button2.setAttribute("aria-expanded", "false");
      }
    });
  };
  var accordionItems = accordion.querySelectorAll(".accordion__item");
  var accordionButtons = accordion.querySelectorAll(".accordion__button");
  var accordionPanels = accordion.querySelectorAll(".accordion__panel");
  accordionItems[0].style.paddingBottom = 24 + "px";
  accordionButtons[0].classList.add("accordion__button--active");
  accordionPanels[0].style.maxHeight = accordionPanels[0].scrollHeight + "px";
  accordionButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      button.classList.toggle("accordion__button--active");
      button.setAttribute("aria-expanded", "true");
      var accordionItem = button.parentNode;
      var panel = button.nextElementSibling;
      if (button.classList.contains("accordion__button--active")) {
        accordionItem.style.paddingBottom = 24 + "px";
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.setAttribute("aria-hidden", "false");
      } else {
        accordionItem.style.paddingBottom = 0;
        panel.style.maxHeight = 0;
        panel.setAttribute("aria-hidden", "true");
        button.setAttribute("aria-expanded", "false");
      }
      closeSpoiler(index);
    });
  });
}
;
var loadMoreWorkButton = document.querySelector(".work__button");
var allWorkItemsLength = document.querySelectorAll(".work__item").length;
var workItemsCount = 4;
loadMoreWorkButton.addEventListener("click", function () {
  workItemsCount += 2;
  var arrayWorkItems = Array.from(document.querySelector(".work__list").children);
  var visibleWorkItems = arrayWorkItems.slice(0, workItemsCount);
  visibleWorkItems.forEach(function (el) {
    return el.classList.add("work__item--visible");
  });
  if (visibleWorkItems.length === allWorkItemsLength) {
    loadMoreWorkButton.classList.add("button--disabled");
    loadMoreWorkButton.setAttribute("disabled", "disabled");
  }
});
;
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    pagination: false,
    gap: 50,
    classes: {
      prev: "splide__arrow--prev testimonial-slider__prev-button",
      next: "splide__arrow--next testimonial-slider__next-button"
    }
  });
  splide.mount();
});
;