const sections = document.querySelectorAll('section');

const trans = document.querySelector('.trans');

const gradient = ['coral', 'chartreuse', 'tomato', 'cadetblue'];

const options = {
  threshold: 0.7,
};

const navScroll = function (entries) {
  entries.forEach(function (entry) {
    const className = entry.target.className;

    const activeLink = document.querySelector(`[data-page = ${className}]`);

    const elementIndex = entry.target.getAttribute('data-index');

    const coordinates = activeLink.getBoundingClientRect();

    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

    // Checking if section intersects with the viewport
    if (entry.isIntersecting) {
      trans.style.setProperty('height', `${directions.height}px`);

      trans.style.setProperty('width', `${directions.width}px`);

      trans.style.setProperty('top', `${directions.top}px`);

      trans.style.setProperty('left', `${directions.left}px`);

      trans.style.backgroundColor = gradient[elementIndex];
    }
  });
};

const observer = new IntersectionObserver(navScroll, options);

sections.forEach(function (section) {
  observer.observe(section);

  console.log(section.getBoundingClientRect());
});
