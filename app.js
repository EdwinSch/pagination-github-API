/* ---- IMPORT MODULES ---- */
import fetchFollowers from "./modules/fetchFollowers.js";
import displayFollowers from "./modules/displayFollowers.js";
import paginate from "./modules/paginate.js";

/* ---- TARGETS && INITIALIZERS ---- */
const heading = document.querySelector(".section-title h1");

/* ---- SCRIPT ---- */

// App initialization function
const init = async () => {
  // Await fetch API call
  const followers = await fetchFollowers();
  // Call display followers function and pass followers array
  displayFollowers(paginate(followers)[0]);
  // change 'loading' heading text to new text
  heading.textContent = "pagination";
  // call paginate function
  const pages = paginate(followers);
  console.log(pages);
};

// On Load: trigger init function
window.addEventListener("load", init);
