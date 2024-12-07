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
  image.src = "/assets/c3po/C-3PO.png";
  image.alt = "C-3PO robot";
  const eyeLeft = div(["eye-container"]);
  const eyeRight = div(["eye-container", "eye-right"]);


  imageDiv.appendChild(eyeLeft);
  imageDiv.appendChild(eyeRight);
  imageDiv.appendChild(image);



  // Header and Form container 
  const headerFormDiv = div(["header-form-container"]);
  
    //Title div
    const titleDiv = div(["title-container"]);
    const h1 = document.createElement("h1"); 
    h1.classList.add("custom-font");
    h1.textContent = "C - 3 P 0";
    titleDiv.appendChild(h1); 
  

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
  headerFormDiv.appendChild(titleDiv);
  headerFormDiv.appendChild(headerDiv); 
  headerFormDiv.appendChild(formDiv);

  // Append both main sections to the container
  container.appendChild(headerFormDiv);
  container.appendChild(imageDiv);
  

 

  // Form submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = userNameInput.value.trim();

  });
}

function renderHomePageHeader(container) {
  const header = homePageHeader(addNewEvent);
  container.appendChild(header);
}

function addNewEvent() {
  console.log("Add new event triggered");
}
