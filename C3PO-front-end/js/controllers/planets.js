let loadingPlanets = true;
const PLANETS_URL = "https://swapi.dev/api/planets/";
let planets = [];

const selectedPlanets = [
  "Tatooine",
  "Alderaan",
  "Hoth",
  "Bespin",
  "Endor",
  "Dagobah",
];

const loadPlanets = async (func) => {
  const response = await fetch(PLANETS_URL);
  if (response.ok) {
    const data = await response.json();
    planets = data.results;
    loadingPlanets = false;

    console.log(planets);
    func();
  }
};

const openQuiz = (planetName) => {
  const quizFramework = document.getElementById("quiz-framework");
  const mainElement = document.getElementById("main");
  mainElement.className = "pop-up";
  quizFramework.innerHTML = planetName;
  quizFramework.setAttribute("style", "display: block");
};

const populatePlanets = () => {
  const loadingElement = document.getElementById("loading");
  const mainElement = document.getElementById("main");

  loadingElement.setAttribute("style", "display: none");
  mainElement.setAttribute("style", "display: block");

  planets = planets.filter((planet) => {
    return selectedPlanets.includes(planet.name);
  });
  console.log(planets);
  const planetContainer = document.getElementById("planet-container");
  planets.forEach((planet, index) => {
    const randomNumber = Math.random() * 6;

    // planet wrapper
    const planetWrapper = document.createElement("div");
    planetWrapper.className = "planet-wrapper";
    planetWrapper.setAttribute("style", `flex-grow: ${randomNumber}`);

    //planet info
    const infoPlanetWrapper = document.createElement("div");
    infoPlanetWrapper.className = "info-planet-wrapper";

    const planetInfo = document.createElement("div");
    planetInfo.className = "planet-info";
    planetInfo.innerHTML = `<div>
    <div><span class="label">$ Name:<\span> ${planet.name}</div> 
    <div><span class="label" >$ Rotation Period:<\span> ${planet.rotation_period}</div> 
    <div><span class="label">$ orbital Period:<\span> ${planet.orbital_period}</div> 
    <div><span class="label">$ Diameter:<\span> ${planet.diameter}</div> 
    <div><span class="label">$ Climate:<\span> ${planet.climate}</div> 
    <div><span class="label">$ Gravity:<\span> ${planet.gravity}</div>
    <div><span class="label">$ Terrain:<\span> ${planet.terrain}</div> 
    <div><span class="label">$ Surface Water:<\span> ${planet.surface_water}</div> 
    <div><span class="label">$ Population:<\span> ${planet.population}</div></div>`;

    // planet
    const planetItem = document.createElement("div");
    planetItem.setAttribute(
      "style",
      `background-image: url(/assets/Planets/${planet.name}.jpeg);`
    );
    let planetItemClassName = "star-wars-planets";
    if (index % 2 == 0) {
      planetItemClassName += " planet-even";
    }
    planetItem.className = planetItemClassName;

    // planet button
    const planetButton = document.createElement("button");
    planetButton.className = "planet-button";
    planetButton.textContent = "Take quiz";
    planetButton.onclick = () => {
      openQuiz(planet.name);
    };

    infoPlanetWrapper.appendChild(planetItem);
    infoPlanetWrapper.appendChild(planetInfo);
    planetInfo.appendChild(planetButton);
    planetWrapper.appendChild(infoPlanetWrapper);
    planetContainer.appendChild(planetWrapper);
  });
};

window.onload = () => {
  loadPlanets(populatePlanets);
};
