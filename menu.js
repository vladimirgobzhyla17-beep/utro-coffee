const filters = document.querySelector(".filters");
const buttons = filters.querySelectorAll("button");
const categories = document.querySelectorAll(".category");

function showCategory(id) {
  for (const category of categories) {
    category.hidden = category.id !== id;
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.dataset.show === id));
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => showCategory(button.dataset.show));
}
for (const category of categories) {
  category.querySelector("h3").hidden = true;
}
showCategory("coffee");
filters.hidden = false;
