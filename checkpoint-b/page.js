import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");

  element.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");

    li.classList.add("tile");
    li.textContent = `${item.name} - ${item.price} EGP`;

    element.append(li);
  });
}

export function matching() {
  return items.filter(item => item.inStock === true);
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}