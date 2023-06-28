const progressBar = document.querySelector('.progress-done');

const increaseBar = document.querySelector('.add');

const decreasebar = document.querySelector('.sub');

let progressBarVal = +progressBar.getAttribute('data-done');

function progress(val, bar) {
  bar.style.width = `${val}%`;

  bar.textContent = `${val}%`;

  bar.style.opacity = 1;
}

increaseBar.addEventListener('click', function () {
  progressBarVal += 5;

  if (progressBarVal > 100) return;

  progress(progressBarVal, progressBar);
});

decreasebar.addEventListener('click', function () {
  progressBarVal -= 5;

  if (progressBarVal < 0) return;

  progress(progressBarVal, progressBar);
});
