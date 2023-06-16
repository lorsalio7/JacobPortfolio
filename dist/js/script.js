"use strict";

var siteHeader = document.querySelector(".page__site-header");
if (siteHeader) {
  var callbackObserver = function callbackObserver(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting === true) {
        menuLinks.forEach(function (link) {
          var id = link.getAttribute("href").replace("#", "");
          if (id === entry.target.id) {
            link.classList.add("site-navigation__link--active");
          } else {
            link.classList.remove("site-navigation__link--active");
          }
        });
      }
    });
  };
  var openMenu = function openMenu() {
    var widthScroll = window.innerWidth - document.body.offsetWidth + "px";
    siteHeader.classList.add("page__site-header--active");
    pageHtml.classList.add("no-scroll");
    overlay.classList.add("overlay--active");
    document.body.style.paddingRight = widthScroll;
  };
  var closeMenu = function closeMenu() {
    burgerButton.classList.remove("burger-button--active");
    siteHeader.classList.remove("page__site-header--active");
    pageHtml.classList.remove("no-scroll");
    overlay.classList.remove("overlay--active");
    document.body.style.paddingRight = 0;
  };
  var changeMenuView = function changeMenuView(width) {
    if (!width) {
      closeMenu();
    }
  };
  var burgerButton = document.querySelector(".burger-button");
  var pageContent = document.querySelector(".page__page-content");
  var menuLinks = siteHeader.querySelectorAll(".site-navigation__link");
  var pageHtml = document.querySelector("html");
  var widthHeader = window.getComputedStyle(siteHeader).getPropertyValue("--width-header");
  var overlay = document.querySelector(".overlay");
  var burgerMenuWidth = window.matchMedia("(max-width: 1124px)");
  var sections = document.querySelectorAll(".fullsize");
  var observer = new IntersectionObserver(callbackObserver, {
    root: document.querySelector("page__page-content"),
    threshold: 0.1
  });
  sections.forEach(function (section) {
    return observer.observe(section);
  });
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger-button--active");
    if (burgerButton.classList.contains("burger-button--active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (siteHeader.classList.contains("page__site-header--active")) {
        closeMenu();
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (siteHeader.classList.contains("page__site-header--active") && e.keyCode === 27) {
      closeMenu();
    }
  });
  overlay.addEventListener("click", function () {
    if (overlay.classList.contains("overlay--active")) {
      closeMenu();
    }
  });
  burgerMenuWidth.onchange = function (e) {
    changeMenuView(e.matches);
  };
}
;
var navigationList = document.querySelector(".site-navigation__list");
if (navigationList) {
  var scroll = new SmoothScroll(".site-navigation__link");
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
var workList = document.querySelector(".work__list");
if (workList) {
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
}
;
var testimonialSlider = document.querySelector(".testimonial__slider");
if (testimonialSlider) {
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
}
;