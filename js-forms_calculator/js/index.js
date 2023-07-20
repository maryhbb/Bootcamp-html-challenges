console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const a = parseInt(data.numberA);
  const b = parseInt(data.numberB);
  console.log(data);

  if (data.operator === "addition") {
    result = add(a, b);
  }
  if (data.operator === "subtraction") {
    result = subtract(a, b);
  }

  if (data.operator === "multiplication") {
    result = multiply(a, b);
  }
  if (data.operator === "division") {
    result = divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
