let bg = document.getElementById('bg');
let headphones = document.getElementById('headphones');
let room = document.getElementById('room');
let title = document.getElementById('title');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  bg.style.top = value * 0.5 + 'px';
  headphones.style.top = 40 + value * 0.2 + '%';
  room.style.top = value * 0 + 'px';
  title.style.top = 40 + value * 0.1 + '%';
});
