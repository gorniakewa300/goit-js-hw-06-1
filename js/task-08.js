const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
    if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log({email: email, password: password});
  form.reset();
};