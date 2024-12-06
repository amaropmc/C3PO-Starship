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
    console.log(randomNumber);

    // planet wrapper
    const planetWrapper = document.createElement("div");
    planetWrapper.className = "planet-wrapper";
    planetWrapper.setAttribute("style", `flex-grow: ${randomNumber}`);

    // planet info
    const planetInfo = document.createElement("div");
    planetInfo.className = "planet-info";
    planetInfo.innerHTML = `<div><span class="label">$ Name:<\span> ${planet.name}</div> 
    <div>
    <span class="label" >$ Rotation Period:<\span>
    ${planet.rotation_period}</div> 
    <div><span class="label">$ orbital Period:<\span> ${planet.orbital_period}</div> 
    <div><span class="label">$ Diameter:<\span> ${planet.diameter}</div> 
    <div><span class="label">$ Climate:<\span> ${planet.climate}</div> 
    <div><span class="label">$ Gravity:<\span> ${planet.gravity}</div>
    <div><span class="label">$ Terrain:<\span> ${planet.terrain}</div> 
    <div><span class="label">$ Surface Water:<\span> ${planet.surface_water}</div> 
    <div><span class="label">$ Population:<\span> ${planet.population}</div>`;

    planetWrapper.appendChild(planetInfo);
    planetContainer.appendChild(planetWrapper);

    // planet
    const planetItem = document.createElement("div");
    planetItem.setAttribute(
      "style",
      `background-image: url(/assets/Planets/${planet.name}.jpeg);`
    );
    let planetItemClassName = "star-wars-planets";
    if (index % 2 == 0) {
      planetItemClassName = planetItemClassName + " planet-even";
    }
    planetItem.className = planetItemClassName;
    planetWrapper.appendChild(planetItem);
    planetContainer.appendChild(planetWrapper);
  });
};

window.onload = () => {
  loadPlanets(populatePlanets);

  //deinir array com nome dos planetas
  //filtrar array com os planetas q escolheram
  //planetas: Tattooine, Alderaan,  Hoth, Bespin, Endor e Dagobah
};
