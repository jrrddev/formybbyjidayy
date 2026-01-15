// Password protection
const PASSWORD = "100124";
const passwordOverlay = document.getElementById("password-overlay");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const passwordError = document.getElementById("password-error");

function checkPassword() {
    if (passwordInput.value === PASSWORD) {
        passwordOverlay.style.display = "none";
        mainContent.style.display = "block";
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        passwordInput.value = "";
        passwordInput.focus();
    }
}

passwordSubmit.addEventListener("click", checkPassword);

passwordInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});

// Focus on password input when page loads
passwordInput.focus();

// Array of love-themed emojis for the explosion effect
const loveEmojis = ['❤️', '💖', '💝', '💘', '💕'];

function createLoveEmoji(x, y) {
    const emoji = document.createElement('div');
    emoji.className = 'love-emoji';
    emoji.innerText = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
    
    // Random position around center
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 80;
    const startScale = 0.2 + Math.random() * 0.3;
    
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    emoji.style.fontSize = '24px';
    emoji.style.setProperty('--angle', `${angle}rad`);
    emoji.style.setProperty('--distance', `${distance}px`);
    emoji.style.setProperty('--start-scale', startScale);
    
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 700);
}

function createEmojiExplosion(x, y) {
    // Create 15-20 emojis for the explosion
    const numEmojis = 15 + Math.floor(Math.random() * 5);
    
    // Create emojis rapidly with slight delay between each
    for (let i = 0; i < numEmojis; i++) {
        setTimeout(() => {
            createLoveEmoji(x, y);
        }, i * 20); // Slight stagger for more natural look
    }
}

// Button Click - Create emoji explosion then redirect
document.getElementById("clickMeBtn").addEventListener("click", function(e) {
    const rect = this.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    createEmojiExplosion(centerX, centerY);
    
    // Delay redirect to show animation
    setTimeout(() => {
        window.location.href = "meandyou/meandyou.html";
    }, 1000);
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
