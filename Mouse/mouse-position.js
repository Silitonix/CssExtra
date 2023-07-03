let mx = 0;
let my = 0;
let mt = 0;
let mlx = 0;
let mly = 0;

const ms = (e) => {
  mx = e.clientX;
  my = e.clientY;
  document.documentElement.style.setProperty('--mouse-x', mx + 'px');
  document.documentElement.style.setProperty('--mouse-y', my + 'px');
};

function render(){
  
}

window.addEventListener('mousemove', ms);
window.addEventListener('mouseenter', ms);
