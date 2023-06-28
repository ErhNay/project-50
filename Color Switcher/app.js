const body = document.body;

const switchColor = document.querySelector('.color');

const switchBtn = document.querySelector('.switch');

const getRandNumber = () => Math.trunc(Math.random() * 256);

switchBtn.addEventListener('click', function () {
  let color_red = getRandNumber();

  let color_green = getRandNumber();

  let color_blue = getRandNumber();

  const colorString = `rgb(${color_red},${color_green},${color_blue})`;

  switchColor.innerText = colorString;

  body.style.backgroundColor = colorString;
});
