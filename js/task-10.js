
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

const handler = () => {
  const amount = document.querySelector("#controls input[type=number]").value;
  createBoxes(amount);
};
const removeHandler = () => {
  boxes.innerHTML = ' ';
};
createBtn.addEventListener("click", handler);

destroyBtn.addEventListener("click", removeHandler);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    boxes.insertAdjacentHTML(
          "beforeend",
          `<div style="width:${Math.floor(i * 10 + 20)}px; 
        height: ${Math.floor(i * 10 + 20)}px; 
        background-color:${getRandomHexColor()}; 
        margin:10px; 
    "></div>`
    )
  }
};
// drugi sposób rozwiązania//
/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("div#controls > input");

const BASE_WIDTH_PX = 30;
const BASE_HEIGHT_PX = BASE_WIDTH_PX;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.width = `${BASE_WIDTH_PX + 10 * i}px`;
    element.style.height = `${BASE_HEIGHT_PX + 10 * i}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxes.insertAdjacentElement("beforeend", element);
  }
}

function destroyBoxes() {
  boxes.innerHTML =' ';
}

function handleCreateClick() {
  const boxes = input.value;
  createBoxes(boxes);
}

createBtn.addEventListener('click',handleCreateClick);
destroyBtn.addEventListener('click', destroyBoxes);*/