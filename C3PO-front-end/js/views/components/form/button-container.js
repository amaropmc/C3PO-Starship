import { div } from "/js/views/components/commons/div.js";
import { element } from "/js/views/components/commons/element.js";
import { button } from "/js/views/components/commons/button.js";

const submitButtonEvent = async (event) => {
  event.preventDefault();

  submitForm();
};

const cancelButtonEvent = (form) => {
  form.reset();
  window.location.href = routes.homePage.path;
};

function buttonContainer(form) {
  const article = element("article");
  const btnContainer = div(["btn-container", "fullwidth"]);

  const submitButton = button("Save Changes", submitButtonEvent, "CTA");
  submitButton.type = "submit";

  const cancelButton = button("Cancel", () => cancelButtonEvent(form));

  btnContainer.appendChild(submitButton);
  btnContainer.appendChild(cancelButton);

  article.appendChild(btnContainer);

  return article;
}

export { buttonContainer };