// Mode Toggle Logic
const mode = localStorage.getItem("mode") || "dark-mode";
document.body.classList.add(mode);
const toggleButton = document.querySelector(".toggle-mode");
toggleButton.textContent = mode === "dark-mode" ? "🌙" : "☀️";

function toggleMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
    localStorage.setItem("mode", "light-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "🌙";
    localStorage.setItem("mode", "dark-mode");
  }

  // Redraw particles with updated colors
  particles.forEach((particle) => particle.draw());
}

// Particle Background Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
const particles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = isDarkMode
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.5)";
    ctx.fill();
    ctx.closePath();
  }
}

function initParticles() {
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

let lastRenderTime = 0;

function animateParticles(timestamp) {
  if (timestamp - lastRenderTime > 1000 / 30) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    lastRenderTime = timestamp;
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

toggleButton.addEventListener("click", toggleMode);
