const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function attachToggleEvent() {
  const selectTerm = $(".selectTerm");
  const term = $(".term");
  const termOptionList = $(".termOptionList");
  const termOptions = $$(".termOption");

  selectTerm.addEventListener("click", () => {
    termOptionList.classList.toggle("hidden");
  });
  termOptionList.addEventListener("click", (e) => {
    termOptions.forEach((option) => {
      option.classList.remove("colorGreen");
    });
    term.innerText = e.target.innerText;
    e.target.classList.add("colorGreen");
  });
}

window.onload = () => {
  attachToggleEvent();
};
