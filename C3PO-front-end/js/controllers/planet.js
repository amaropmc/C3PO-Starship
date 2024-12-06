import { pageHeader } from "/js/views/components/commons/page-header.js";
import { div } from "/js/views/components/commons/div.js";
import { createCuriosityCard } from "/js/views/components/planet/card.js"; 

window.addEventListener("DOMContentLoaded", function () {

    const planetContainer = document.querySelector(".planet-container");

 //ATUALIZAR PARA INTEGRAR A BASE DE DADOS
    // Create a div for the planet image
    const planetImageDiv = div(["planet-image-container"]);
    const planetImage = document.createElement("img");
    planetImage.src = "assets/planet_tatooine.png"; 
    planetImage.alt = "Planet Image";
    planetImageDiv.appendChild(planetImage);

   // Create a container for the header and curiosity card
   const headerCardDiv = div(["header-card-container"]);

   // Header div with title and button
   const headerDiv = div(["header-container"]);

   function handleButtonClick() {
       const titleText = "Welcome to Tatooine";
       const buttonText = "Let's Go";

       const headerElement = pageHeader(titleText, buttonText, handleButtonClick);
       headerDiv.innerHTML = "";     //NÃO ESQUECER DE CORRIGIR A LÓGICA!!
       headerDiv.appendChild(headerElement);
   }

   handleButtonClick();

   // Create the curiosity card
   const curiosityCard = createCuriosityCard();

     // Picture div 
     const imageDiv = div(["image-container"]);
     const image = document.createElement("img");
     image.src = "/assets/C-3PO.jpg"; 
     image.alt = "C-3PO robot";
     imageDiv.appendChild(image);

    // Add the header and curiosity card to the container
    headerCardDiv.appendChild(headerDiv);
    headerCardDiv.appendChild(curiosityCard);

    // Append elements to the main container
    planetContainer.appendChild(planetImageDiv);
    planetContainer.appendChild(headerCardDiv);
    planetContainer.appendChild(imageDiv)
});


