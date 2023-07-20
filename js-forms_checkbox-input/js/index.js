console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const successElement = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  successElement.removeAttribute("hidden");
}
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const tosElement = event.target.elements.tos;

  if (!tosElement.checked) {
    showTosError();
    return;
  } else {
    hideTosError();
    showSuccess();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
