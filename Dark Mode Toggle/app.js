const checkBox = document.querySelector('input[name="theme"]');

const htmlEl = document.documentElement;

checkBox.addEventListener('click', function () {
  if (checkBox.checked) {
    htmlEl.classList.toggle('transition');

    htmlEl.setAttribute('data-theme', 'dark');
  } else {
    htmlEl.classList.toggle('transition');

    htmlEl.setAttribute('data-theme', 'light');
  }
});
