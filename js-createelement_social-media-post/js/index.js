console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

const articleElement = document.createElement("article");
const pElement = document.createElement("p");
const footerElement = document.createElement("footer");
const spanElement = document.createElement("span");
const buttonElement = document.createElement("button");

articleElement.classList.add("post");
pElement.classList.add("post__content");
footerElement.classList.add("post__footer");
spanElement.classList.add("post__username");
buttonElement.classList.add("post__button");

pElement.append(
  "the most-liked tweet has over 6.9 million likes and was tweeted by the account of American actor Chadwick Boseman"
);
buttonElement.append(" ♥ Like");
spanElement.append(" @username");

footerElement.append(spanElement, buttonElement);
articleElement.append(pElement, footerElement);
body.appendChild(articleElement);

buttonElement.addEventListener("click", handleLikeButtonClick);
