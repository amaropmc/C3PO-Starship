import { formPage } from "/js/views/components/form/form.js"; 

window.addEventListener("DOMContentLoaded", function () {
  initializeFormPage();
});

function initializeFormPage() {
  const editContainer = document.querySelector(".edit-container");

  // Create the form element using the formPage function
  const form = formPage();

  const userNameInput = document.createElement("input");
  userNameInput.type = "text";
  userNameInput.placeholder = "Hi Jedi! What is your Jedi name?";
  userNameInput.name = "user";
  userNameInput.required = true;

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Create a good and safe password! May The Force Be With You!";
  passwordInput.name = "password";
  passwordInput.required = true;

  // Create the submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";

  form.appendChild(userNameInput);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);


  editContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = userNameInput.value;
    const password = passwordInput.value;

 
    if (userName && password) {
      alert(`Username: ${userName}\nPassword submitted: ${password}`);
    } else {
      alert("Please enter both username and password!");
    }
  });
}
