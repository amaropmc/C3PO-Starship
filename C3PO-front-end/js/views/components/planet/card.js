import { div } from "/js/views/components/commons/div.js";

function createCuriosityCard() {
    const cardDiv = div(["curiosity-card"]);  

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = "Did you know:"; 
    const cardText = document.createElement("p");
    cardText.textContent = "jjj"

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardText);

    return cardDiv;
}

export { createCuriosityCard };
