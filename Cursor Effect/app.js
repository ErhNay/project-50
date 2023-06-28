const mouseCursor = document.querySelector('.cursor');

const nav_links = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
}

nav_links.forEach(function (link) {
  link.addEventListener('mouseover', function () {
    mouseCursor.classList.add('cursor-grow');
    link.classList.add('hovered-link');
  });

  link.addEventListener('mouseout', function () {
    mouseCursor.classList.remove('cursor-grow');
    link.classList.remove('hovered-link');
  });
});
