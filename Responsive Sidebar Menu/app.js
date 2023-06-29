const hamburger = document.querySelector('.toggle-btn');

const overlay = document.querySelector('.overlay');

const mainHeader = document.querySelector('.main-header');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');

  overlay.classList.toggle('open');

  mainHeader.classList.toggle('open');
});
