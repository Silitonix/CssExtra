const speed = 0.005;
(function rgb(now=0) {
  document.documentElement.style.setProperty('--rgb', `hsl(${(now * speed) % 360},96,59)`);
  requestAnimationFrame(rgb);
})();
