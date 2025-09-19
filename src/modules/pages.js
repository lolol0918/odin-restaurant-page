import { menu } from "./menu";

function setBodyClass(page) {
  document.body.className = ""; // reset all classes
  if (page) {
    document.body.classList.add(page); // only add if not empty
  }
}

function setDivClass(arg) {
  const content = document.getElementById("content");
  content.className = "";
  if (arg) {
    content.classList.add(arg); // only add if not empty
  }
}
// it takes "content" as an argument on the index.js
export const loadHome = (container) => {
  setBodyClass("home");
  setDivClass("")
  container.innerHTML = ``;
  container.innerHTML = `
            <section class="hero">
                <h1 class="hero-title">Food that speaks for itself.</h1>
                <!-- BIG text -->
                <p class="hero-subtitle">Fresh. Honest. Unforgettable.</p>
                <!-- SMALL text -->
                <button id="menu">Explore the Menu</button>
            </section>`;
  document.getElementById("menu").addEventListener('click', () => loadMenu(container));

}

export const loadMenu = (container) => {
  setBodyClass("");
  setDivClass("grid");
  container.innerHTML = ``;

  // loops through each objects 
  menu.forEach(dish => {
    container.innerHTML += `
    <div class="menu-card">
        <img src="images/${dish.img}" alt="${dish.name}" class="menu-image">
        <div class="menu-content">
          <div class="menu-header">
            <h3 class="menu-title">${dish.name}</h3>
            <span class="menu-price">$${dish.price}</span>
          </div>
          <p class="menu-description">
            ${dish.description}
          </p>
          <div class="accent-line"></div>
        </div>
      </div>
    `;
  });

}