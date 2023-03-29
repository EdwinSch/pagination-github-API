/* ---- IMPORT MODULES ---- */
import fetchFollowers from "./modules/fetchFollowers.js";

/* ---- TARGETS && INITIALIZERS ---- */

/* ---- SCRIPT ---- */

// App initialization function (await fetch API call)
const init = async () => {
  const followers = await fetchFollowers();
  console.log(followers);
};

// On Load: trigger init function
window.addEventListener("load", init);
