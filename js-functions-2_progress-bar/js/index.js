console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');
progressBar.style.width = 0;

function calculateScrollPercentage() {
  // Find the current scroll distance
  const scrollDistance = window.scrollY;
  console.log("scrollDistance: ", scrollDistance);

  // Find the viewport height
  const viewportHeight = window.innerHeight;
  console.log("viewportHeight: ", viewportHeight);

  // Find the total height of the body content
  const bodyHeight = document.body.clientHeight;
  console.log("bodyHeight: ", bodyHeight);

  // Calculate the total scrollable distance
  const scrollable = bodyHeight - viewportHeight;
  console.log("scrollable: ", scrollable);

  // Calculate the current scroll percentage
  const scrolledInPercent = (scrollDistance * 100) / scrollable;
  console.log("scrolledInPercent: ", scrolledInPercent);

  progressBar.style.width = `${scrolledInPercent}%`;
}

// Add a scroll event listener to the window, triggering the calculation of scroll percentage when scrolled
window.addEventListener("scroll", calculateScrollPercentage);

calculateScrollPercentage();
