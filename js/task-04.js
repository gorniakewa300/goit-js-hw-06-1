let counterValue = 0;
const currentValue = document.querySelector("#value");
const buttonOneDown = document.querySelector('button[data-action="decrement"]');
const handleMinus = () => {
  counterValue--;
  currentValue.textContent = counterValue;
};
buttonOneDown.addEventListener("click", handleMinus);

const buttonOneUp = document.querySelector('button[data-action="increment"]');
const handlePlus = () => {
  counterValue++;
  currentValue.textContent = counterValue;
};
buttonOneUp.addEventListener("click", handlePlus);
