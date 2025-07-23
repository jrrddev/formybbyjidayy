// Sparkles like on the index
const sparkleContainer = document.getElementById('sparkle-container');
const sparkleEmoji = ['✨', '💖', '🌸'];

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerText = sparkleEmoji[Math.floor(Math.random() * sparkleEmoji.length)];
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.fontSize = `${12 + Math.random() * 10}px`;
  sparkleContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1500);
}

// Add sparkles on mouse move
document.body.addEventListener('mousemove', (e) => {
  createSparkle(e.clientX, e.clientY);
});
