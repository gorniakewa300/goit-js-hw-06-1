function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorResult = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorResult.textContent = color;
});