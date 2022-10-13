const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function addListItem({
  todayAddButton,
  todayInputValue,
  todayList,
  tomorrowAddButton,
  tomorrowInputValue,
  tomorrowList,
}) {
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
  });
}

function deleteListItem() {
  const deleteButtons = $$("button.delete");
  for (const button of deleteButtons) {
    button.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
}

function handleLayout({ todaySection, tomorrowSection, navButtons }) {
  navButtons[0].addEventListener("click", (e) => {
    e.preventDefault();
    todaySection.className = "today slideToRight";
    tomorrowSection.className = "tomorrow hidden";
  });

  navButtons[1].addEventListener("click", (e) => {
    e.preventDefault();
    todaySection.className = "slideToOrigin today";
    tomorrowSection.className = "slideToOrigin tomorrow";
    setTimeout(() => {
      todaySection.classList.remove("slideToOrigin");
      tomorrowSection.classList.remove("slideToOrigin");
    }, 500);
  });

  navButtons[2].addEventListener("click", (e) => {
    e.preventDefault();
    todaySection.className = "today hidden";
    tomorrowSection.className = "tomorrow slideToLeft";
  });
}

function eventManager(todo) {
  addListItem(todo);
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
