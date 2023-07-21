console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastList = document.createElement("li");
  toastContainer.append(toastList);

  toastList.classList.add("toast-container__message");
  // toastList.textContent = "I'm a toast message.";
  toastList.append("I'm a toast message.");
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages

  toastContainer.innerHTML = "";
});
