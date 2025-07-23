const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
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
