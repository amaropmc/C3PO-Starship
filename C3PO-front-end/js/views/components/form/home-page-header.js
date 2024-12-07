import { div } from "/js/views/components/commons/div.js";
import { element } from "/js/views/components/commons/element.js";

function homePageHeader() {
  const header = div(["header"]);
  const h1 = element("h1", ["custom-font"], "Greetings! I am C-3P0, your protocol droid guide. Welcome to the galaxy far, far away! Together, we will navigate through thrilling adventures. Stay alert, and may the Force be with you!");
  header.appendChild(h1);

  const btnContainer = div(["btn-container"]);

  header.appendChild(btnContainer);

  return header;
}

export { homePageHeader};
