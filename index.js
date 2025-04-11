// Sélectionne tous les carrousels (haut et bas)
const carousels = document.querySelectorAll(".carousel-track");

carousels.forEach((track) => {
  // Met l'animation en pause quand la souris est dessus
  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
  });

  // Reprend l'animation quand la souris quitte
  track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
  });
});
