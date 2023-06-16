const siteHeader = document.querySelector(".page__site-header");

if(siteHeader) {
  const burgerButton = document.querySelector(".burger-button");
  const pageContent = document.querySelector(".page__page-content");
  const menuLinks = siteHeader.querySelectorAll(".site-navigation__link");
  const pageHtml = document.querySelector("html");
  let widthHeader = window.getComputedStyle(siteHeader).getPropertyValue("--width-header");
  const overlay = document.querySelector(".overlay");
  let burgerMenuWidth = window.matchMedia("(max-width: 1124px)");


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
    let widthScroll = window.innerWidth - document.body.offsetWidth + "px";
    siteHeader.classList.add("page__site-header--active");
    pageHtml.classList.add("no-scroll");
    overlay.classList.add("overlay--active");
    document.body.style.paddingRight = widthScroll;
  }

  function closeMenu() {
    burgerButton.classList.remove("burger-button--active");
    siteHeader.classList.remove("page__site-header--active");
    pageHtml.classList.remove("no-scroll");
    overlay.classList.remove("overlay--active");
    document.body.style.paddingRight = 0;
  }

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if(siteHeader.classList.contains("page__site-header--active")) {
        closeMenu();
      }
    })
  })

  document.addEventListener("keydown", (e) => {
    if(siteHeader.classList.contains("page__site-header--active") && e.keyCode === 27) {
      closeMenu();
    }
  })

  overlay.addEventListener("click", () => {
    if(overlay.classList.contains("overlay--active")) {
      closeMenu();
    }
  })

  function changeMenuView(width) {
    if(!width) {
      closeMenu();
    }
  }

  burgerMenuWidth.onchange = (e) => {
    changeMenuView(e.matches);
  }
}

