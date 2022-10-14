const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

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
  const tagList = $("ul.tagList");
  const li = document.createElement("li");
  const tags = $$("li.tag");
  const tagTextArr = Array.from(tags).map((tag) => tag.innerText);

  li.innerText = inputValue;
  li.className = "tag";
  //중복 방지.
  tagTextArr.includes(inputValue)
    ? alert("중복된 태그입니다.")
    : tagList.appendChild(li);
  //태그를 클릭하면 삭제.
  li.addEventListener("click", (e) => {
    e.target.remove();
  });
}

attachEvent();
