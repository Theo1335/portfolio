document.addEventListener("DOMContentLoaded", () => {

  const players = document.querySelectorAll("dotlottie-player");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const player = entry.target;

      if (entry.isIntersecting) {
        // Reset au début pour être sûr
        player.setAttribute("loop", "");
        player.play();
      } else {
        player.pause();
        player.stop(); // stop complet
      }
    });
  }, {
    threshold: 0.5
  });

  players.forEach(player => {
    player.pause();
    observer.observe(player);
  });

});

/*
const container = document.getElementById("container-projet");

for (let i = 1; i <= 6; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.textContent = `Div numéro ${i}`;
  container.appendChild(div);
}

*/