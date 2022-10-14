const $ = (selector) => document.querySelector(selector);

function attachEvent() {
  const input = $("input");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value) {
      addTag(input.value);
      input.value = "";
    }
  });
}

function addTag(inputValue) {
  const ul = $("ul");
  const li = document.createElement("li");
  li.innerText = inputValue;
  ul.appendChild(li);
  //태그를 클릭하면 삭제.
  li.addEventListener("click", (e) => {
    e.target.remove();
  });
}

attachEvent();
