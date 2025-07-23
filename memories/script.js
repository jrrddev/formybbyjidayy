// Sparkle effect
const canvas = document.getElementById('sparkleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 2; i++) {
    sparkles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 4 + 2,
      alpha: 1,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    });
  }
});

function animateSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparkles.forEach((s, i) => {
    ctx.fillStyle = `rgba(255,192,203,${s.alpha})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    s.alpha -= 0.02;
    if (s.alpha <= 0) sparkles.splice(i, 1);
  });
  requestAnimationFrame(animateSparkles);
}
animateSparkles();

// Heart animation
const heartCanvas = document.getElementById('heartCanvas');
const heartCtx = heartCanvas.getContext('2d');
heartCanvas.width = window.innerWidth;
heartCanvas.height = window.innerHeight;

let hearts = [];

function createHeart(x, y) {
  hearts.push({
    x,
    y,
    size: Math.random() * 20 + 20,
    alpha: 1,
    dy: Math.random() * -1.5 - 0.5,
    dx: (Math.random() - 0.5) * 1.2
  });
}

function drawHeart(ctx, x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 105, 180, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

function animateHearts() {
  heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
  hearts.forEach((heart, i) => {
    drawHeart(heartCtx, heart.x, heart.y, heart.size, heart.alpha);
    heart.y += heart.dy;
    heart.x += heart.dx;
    heart.alpha -= 0.007;
    if (heart.alpha <= 0) hearts.splice(i, 1);
  });
  requestAnimationFrame(animateHearts);
}
setInterval(() => {
  for (let i = 0; i < 3; i++) {
    createHeart(Math.random() * window.innerWidth, heartCanvas.height);
  }
}, 150);
animateHearts();

// PHOTO STACK SHUFFLE EFFECT
window.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const imgs = document.querySelectorAll('.gallery img');

  // Static shuffled layout
  imgs.forEach((img, index) => {
    const angle = Math.random() * 20 - 10;
    const x = Math.random() * 40 - 20;
    const y = Math.random() * 40 - 20;

    img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    img.style.zIndex = imgs.length - index;
  });

  // Click to send to back
  gallery.addEventListener('click', (e) => {
    const clicked = e.target;
    if (!clicked.matches('img')) return;

    clicked.style.transition = 'transform 0.6s ease';
    clicked.style.transform += ' scale(0.95)';

    setTimeout(() => {
      clicked.style.transform = clicked.style.transform.replace(' scale(0.95)', '');
      gallery.appendChild(clicked); // move to back of DOM
      const reorderedImgs = document.querySelectorAll('.gallery img');
      reorderedImgs.forEach((img, index) => {
        img.style.zIndex = reorderedImgs.length - index;
      });
    }, 500);
  });
});

