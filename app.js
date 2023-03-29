/* ---- IMPORT MODULES ---- */
import fetchFollowers from "./modules/fetchFollowers.js";
import displayFollowers from "./modules/displayFollowers.js";

/* ---- TARGETS && INITIALIZERS ---- */
const heading = document.querySelector(".section-title h1");
const container = document.querySelector(".container");

/* ---- SCRIPT ---- */

// App initialization function
const init = async () => {
  // Await fetch API call
  const followers = await fetchFollowers();
  // Call display followers function and pass followers array
  displayFollowers(followers);
  // change 'loading' heading text to new text
  heading.textContent = "pagination";
};

// On Load: trigger init function
window.addEventListener("load", init);
