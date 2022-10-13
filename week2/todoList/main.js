const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//클릭한 버튼이 today tomorrow인지 구분
function handleSection({ addButtons }) {
  addButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.parentElement.classList.contains("today")) {
        handleListItem({ addButtons }, 0);
      } else {
        handleListItem({ addButtons }, 1);
      }
    });
  });
}

//할 일 리스트 추가.
function handleListItem({ addButtons }, idx) {
  const lists = $$("ul");
  const inputs = $$("input");

  addButtons[idx].addEventListener("click", (e) => {
    e.preventDefault();
    if (inputs[idx].value) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");
      p.innerText = inputs[idx].value;
      button.innerText = "X";
      button.classList = "delete";
      lists[idx].appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
      li.classList.add("listItem");
      inputs[idx].value = "";
      deleteListItem();
    }
  });
}

function deleteListItem() {
  const deleteButtons = $$("button.delete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
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
  handleSection(todo);
  deleteListItem();
  handleLayout(todo);
}

window.onload = () => {
  eventManager({
    navButtons: $$("nav > button"),
    todaySection: $("section.today"),
    tomorrowSection: $("section.tomorrow"),
    addButtons: $$("button.add"),
  });
};
