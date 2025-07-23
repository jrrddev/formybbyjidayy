// Button Click - Redirect to Next Page
document.getElementById("clickMeBtn").addEventListener("click", function() {
    window.location.href = "memories/memories.html";
});

const sparkleContainer = document.getElementById('sparkle-container');

// Use emojis or ✨ symbols
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

// Trigger sparkles around the greeting box only
const box = document.querySelector('.greeting-box');
box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    createSparkle(x, y);
});
