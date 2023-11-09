
//first code//
/*const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});*/

//second code//
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length == textInput.getAttribute("data-length")) {
      textInput.classList.add("valid");
      textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
   
  }
});