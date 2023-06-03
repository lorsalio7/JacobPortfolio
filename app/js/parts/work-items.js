const loadMoreWorkButton = document.querySelector(".work__button");
const allWorkItemsLength = document.querySelectorAll(".work__item").length;

let workItemsCount = 4;

loadMoreWorkButton.addEventListener("click", () => {
  workItemsCount += 2;
  const arrayWorkItems = Array.from(document.querySelector(".work__list").children);
  const visibleWorkItems = arrayWorkItems.slice(0, workItemsCount);

  visibleWorkItems.forEach(el => el.classList.add("work__item--visible"));

  if(visibleWorkItems.length === allWorkItemsLength) {
    loadMoreWorkButton.classList.add("button--disabled");
    loadMoreWorkButton.setAttribute("disabled","disabled");
  }
});
