const envelope = document.querySelector(".envelope-wrapper");
const envelopeElement = document.querySelector(".envelope");
const passwordOverlay = document.getElementById("passwordOverlay");
const passwordInput = document.getElementById("letterPassword");
const submitButton = document.getElementById("submitPassword");
const errorMessage = document.getElementById("passwordError");

// Set the correct password
const correctPassword = "100124";

// Check password and show letter if correct
submitButton.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        passwordOverlay.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => {
            passwordOverlay.style.display = "none";
        }, 500);
    } else {
        errorMessage.textContent = "Incorrect password. Please try again! 💕";
        passwordInput.value = "";
        passwordInput.focus();
        // Add shake animation to input
        passwordInput.classList.add("shake");
        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 500);
    }
}

envelopeElement.addEventListener("click", () => {
    envelope.classList.toggle("flap");
});

// Generate 30 floating hearts
const heartContainer = document.querySelector('.floating-hearts');

for (let i = 0; i < 40; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 10 + 's';
  heart.style.animationDuration = 6 + Math.random() * 4 + 's';
  heartContainer.appendChild(heart);
}
