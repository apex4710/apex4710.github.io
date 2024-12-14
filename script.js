// Retrieve and apply the saved mode (dark or light) from localStorage
const savedMode = localStorage.getItem("mode") || "dark-mode";
document.body.classList.add(savedMode);

const toggleButton = document.querySelector(".toggle-mode");
toggleButton.textContent = savedMode === "dark-mode" ? "🌙" : "☀️";

// Toggle between dark and light modes
function toggleMode() {
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Toggle classes and update button text
  document.body.classList.toggle("dark-mode", !isDarkMode);
  document.body.classList.toggle("light-mode", isDarkMode);
  toggleButton.textContent = isDarkMode ? "☀️" : "🌙";

  // Save the current mode to localStorage
  localStorage.setItem("mode", isDarkMode ? "light-mode" : "dark-mode");

  // Redraw particles with updated colors
  particles.forEach((particle) => particle.draw());
}

// Particle Background Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
const particles = [];

// Adjust canvas size to match the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Particle class for background animation
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce particles off canvas edges
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

// Initialize particles
function initParticles() {
  particles.length = 0; // Clear existing particles on reinitialization
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

// Animation loop
let lastRenderTime = 0;
function animateParticles(timestamp) {
  if (timestamp - lastRenderTime > 1000 / 30) {
    // 30 FPS limit
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    lastRenderTime = timestamp;
  }
  requestAnimationFrame(animateParticles);
}

// Event listeners
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

toggleButton.addEventListener("click", toggleMode);

// Initial setup
resizeCanvas();
initParticles();
animateParticles();
