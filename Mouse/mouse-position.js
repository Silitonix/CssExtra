let mx = 0;
let my = 0;
const ms = (e) => {
  mx = e.clientX;
  my = e.clientY;
  document.documentElement.style.setProperty('--mouse-x', mx + 'px');
  document.documentElement.style.setProperty('--mouse-y', my + 'px');
};
window.addEventListener('mousemove', ms);
window.addEventListener('mouseenter', ms);