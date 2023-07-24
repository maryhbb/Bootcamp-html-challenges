console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Log user data to the console
  console.log(data);

  // Clear the form and focus on the headline input
  form.reset();
  document.getElementById("headline").focus();

  // Create list entry using the data
  const listItem = document.createElement("li");
  const headlineElement = document.createElement("h3");
  const taskElement = document.createElement("p");

  headlineElement.textContent = data.headline;
  taskElement.textContent = data.task;

  listItem.append(headlineElement);
  listItem.append(taskElement);

  todoList.append(listItem);
});
