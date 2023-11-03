const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == dataLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});