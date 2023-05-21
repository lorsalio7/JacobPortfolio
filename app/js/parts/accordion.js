const accordion = document.querySelector(".accordion");

if(accordion) {
  const accordionItems = accordion.querySelectorAll(".accordion__item");
  const accordionButtons = accordion.querySelectorAll(".accordion__button");
  const accordionPanels = accordion.querySelectorAll(".accordion__panel");

  accordionItems[0].style.paddingBottom = 24 + "px";
  accordionButtons[0].classList.add("accordion__button--active");
  accordionPanels[0].style.maxHeight = accordionPanels[0].scrollHeight + "px";

  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.classList.toggle("accordion__button--active");
      button.setAttribute("aria-expanded", "true");
      let accordionItem = button.parentNode;
      let panel = button.nextElementSibling;

      if(button.classList.contains("accordion__button--active")) {
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
  function closeSpoiler(index) {
    accordionPanels.forEach((accordionPanel, index2) => {
      if(index != index2) {
        accordionPanel.style.maxHeight = 0;
        accordionPanel.setAttribute("aria-hidden", "true");
        let accordionItem2 = accordionPanel.parentNode;
        let button2 = accordionPanel.previousElementSibling;
        accordionItem2.style.paddingBottom = 0;
        button2.classList.remove("accordion__button--active");
        button2.setAttribute("aria-expanded", "false");
      }
    })
  }
}
