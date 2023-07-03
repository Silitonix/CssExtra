(function rgb(now=0) {
  document.documentElement.style.setProperty('--rgb', `hsl(${now % 360},96,59)`);
  requestAnimationFrame(rgb);
})();
