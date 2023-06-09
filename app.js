/* ---- IMPORT MODULES ---- */
import fetchFollowers from "./modules/fetchFollowers.js";
import displayFollowers from "./modules/displayFollowers.js";
import paginate from "./modules/paginate.js";
import displayButtons from "./modules/displayButtons.js";

/* ---- TARGETS && INITIALIZERS ---- */
const heading = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];
/* ---- SCRIPT ---- */

// Setup UI function
const setupUI = () => {
  // Call display followers function and pass pages
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

// App initialization function
const init = async () => {
  // Await fetch API call
  const followers = await fetchFollowers();

  // change 'loading' heading text to new text
  heading.textContent = "pagination";
  // call paginate function
  pages = paginate(followers);
  // call setup UI function
  setupUI();
};

// Page buttons functionalty
btnContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-container")) {
    return;
  }
  if (event.target.classList.contains("page-btn")) {
    index = parseInt(event.target.dataset.index);
  }
  if (event.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (event.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

// On Load: trigger init function
window.addEventListener("load", init);
