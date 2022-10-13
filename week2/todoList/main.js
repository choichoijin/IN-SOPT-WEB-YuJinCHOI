const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function todayAddList({ todayAddButton, todayInputValue, todayList }) {
  todayAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (todayInputValue.value) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");
      p.innerText = todayInputValue.value;
      button.innerText = "X";
      button.classList = "delete";
      todayList.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
      li.classList.add("listItem");
      todayInputValue.value = "";
      deleteListItem();
    }
  });
}

function tomorrowAddList({
  tomorrowAddButton,
  tomorrowInputValue,
  tomorrowList,
}) {
  tomorrowAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (tomorrowInputValue.value) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");
      p.innerText = tomorrowInputValue.value;
      button.innerText = "X";
      button.classList = "delete";
      tomorrowList.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
      li.classList.add("listItem");
      tomorrowInputValue.value = "";
      deleteListItem();
    }
  });
}

function deleteListItem() {
  const deleteButtons = $$("button.delete");
  for (const button of deleteButtons) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.remove();
    });
  }
}

function handleLayout({ todaySection, tomorrowSection, navButtons }) {
  navButtons[0].addEventListener("click", (e) => {
    e.preventDefault();
    tomorrowSection.classList.remove("slideToLeft");
    todaySection.classList.remove("hidden");
    todaySection.classList.add("slideToRight");
    tomorrowSection.classList.add("hidden");
  });

  navButtons[1].addEventListener("click", (e) => {
    e.preventDefault();
    todaySection.classList.remove("slideToRight", "hidden");
    tomorrowSection.classList.remove("slideToLeft", "hidden");
    todaySection.classList.add("slideToOrigin");
    tomorrowSection.classList.add("slideToOrigin");
    setTimeout(() => {
      todaySection.classList.remove("slideToOrigin");
      tomorrowSection.classList.remove("slideToOrigin");
    }, 500);
  });

  navButtons[2].addEventListener("click", (e) => {
    e.preventDefault();
    todaySection.classList.remove("slideToRight");
    tomorrowSection.classList.remove("hidden");
    tomorrowSection.classList.add("slideToLeft");
    todaySection.classList.add("hidden");
  });
}

function eventManager(todo) {
  todayAddList(todo);
  tomorrowAddList(todo);
  deleteListItem();
  handleLayout(todo);
}

window.onload = () => {
  eventManager({
    navButtons: $$("nav > button"),
    todaySection: $("section.today"),
    tomorrowSection: $("section.tomorrow"),
    todayList: $("ul.todayList"),
    tomorrowList: $("ul.tomorrowList"),
    todayInputValue: $("input.todayInput"),
    tomorrowInputValue: $("input.tomorrowInput"),
    todayAddButton: $("button.todayAdd"),
    tomorrowAddButton: $("button.tomorrowAdd"),
  });
};
