function createFloatingHearts() {
  const container = document.getElementById('heartContainer');
  const hearts = ['❤️', '💖', '💗', '💓'];
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

function createSparkles() {
  const header = document.querySelector('.header');
  setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    header.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }, 200);
}

function typeWriterEffect(elementId, text, speed) {
  let i = 0;
  const element = document
::contentReference[oaicite:0]{index=0}
 
