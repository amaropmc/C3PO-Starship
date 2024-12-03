import { formPage } from "/js/views/components/form/form.js"; 
import { homePageHeader } from "/js/views/components/form/home-page-header.js";
import { div } from "/js/views/components/commons/div.js";

window.addEventListener("DOMContentLoaded", function () {
  initializeFormPage();
});

function initializeFormPage() {
  const container = document.querySelector(".container");

  // Picture div 
  const imageDiv = div(["image-container"]);
  const image = document.createElement("img");
  image.src = "/assets/C-3PO.jpg";
  image.alt = "C-3PO robot";
  imageDiv.appendChild(image);

  // Header and Form container 
  const headerFormDiv = div(["header-form-container"]);

  // Header div
  const headerDiv = div(["home-header-container"]);
  renderHomePageHeader(headerDiv);

  // Form div
  const formDiv = div(["form-container"]);
  const form = formPage();

  const userNameInput = document.createElement("input");
  userNameInput.type = "text";
  userNameInput.placeholder = "What is your name, Jedi?";
  userNameInput.name = "user";
  userNameInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";

  form.appendChild(userNameInput);
  form.appendChild(submitButton);

  formDiv.appendChild(form);

  // Append Header and Form to their container
  headerFormDiv.appendChild(headerDiv); 
  headerFormDiv.appendChild(formDiv);

  // Append both main sections to the container
  container.appendChild(headerFormDiv);
  container.appendChild(imageDiv);
 

  // Form submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = userNameInput.value.trim();
    const password = passwordInput.value.trim();

  });
}

function renderHomePageHeader(container) {
  if (typeof homePageHeader !== "function") {
    console.error("homePageHeader is not a valid function");
    return;
  }

  const header = homePageHeader(addNewEvent);
  container.appendChild(header);
}

function addNewEvent() {
  console.log("Add new event triggered");
}
