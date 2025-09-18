function setBodyClass(page) {
  document.body.className = ""; // reset classes
  document.body.classList.add(page); // "home", "about", "contact"
}

export const loadHome = (container) => {
    setBodyClass("home");
    container.innerHTML = ``;
    container.innerHTML = `
            <section class="hero">
                <h1 class="hero-title">Food that speaks for itself.</h1>
                <!-- BIG text -->
                <p class="hero-subtitle">Fresh. Honest. Unforgettable.</p>
                <!-- SMALL text -->
                <button>Explore the Menu</button>
            </section>`;
}