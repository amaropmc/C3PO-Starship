import { formPage } from "/js/views/components/form/form.js"; 
import { homePageHeader } from "/js/views/components/form/home-page-header.js";
import { div } from "/js/views/components/commons/div.js";
import { populatePlanets } from "/js/controllers/planets.js";
import { loadPlanets } from "/js/controllers/planets.js";

const C3PO_URL = "http://localhost:8080/api/c3po"; 

window.addEventListener("DOMContentLoaded", function () {
  initializeFormPage();
});

function initializeFormPage() {
  const container = document.querySelector(".container");

  // Picture div 
  const imageDiv = div(["image-robot-container"]);
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
  
  // Title div
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

  // User Name input
  const userNameInput = document.createElement("input");
  userNameInput.type = "text";
  userNameInput.placeholder = "What is your name, Jedi?";
  userNameInput.name = "user";
  userNameInput.id = "user"; 
  userNameInput.required = true;

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";

  // Form submit handler
 form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const userName = document.getElementById("user").value.trim();
    window.history.pushState({}, '', `/planets?user=${userName}`);
  loadPlanets(populatePlanets);
});


   /* const userName = userNameInput.value.trim();;

    if (!userName) {
      alert("What is your name, Jedi?");
      return;
    }

    const player = { username: userName, score: 0 };
    submitButton.disabled = true;
    submitButton.textContent = "Be ready!";

    try {
      await addPlayer(player); // Save to the backend
      populatePlanets();
    } catch (error) {
      console.error("Error adding player:", error.message);
      alert("Failed to add player. Please try again.");
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    }
  });
  
  // Function to call the backend and save the player
  async function addPlayer(player) {
    try {
        const response = await fetch(`${C3PO_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName : userName, 
        }),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error("Player already exists");
            }
            throw new Error("Failed to add player");
        }

        return await response.text();
    } catch (error) {
        console.error("Error adding player:", error.message);
        throw error;
    }
}
    */

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

  function renderHomePageHeader(container) {
    const header = homePageHeader(addNewEvent);
    container.appendChild(header);
  }

  function addNewEvent() {
    console.log("Add new event triggered");
  }
}
