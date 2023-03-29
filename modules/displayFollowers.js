const container = document.querySelector(".container");

// TEMP display followers function
const displayFollowers = (followers) => {
  const mapFollowers = followers
    .map((person) => {
      //destructure incoming object
      const { id, avatar_url, login, html_url } = person;
      //return HTML structure
      return `<article class="card" data-id="${id}">
        <img src="${avatar_url}" alt="${login}">
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join("");
  //push to DOM
  container.innerHTML = mapFollowers;
};

export default displayFollowers;
