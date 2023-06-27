const smallImg = document.querySelectorAll('.gallery img');

const modal = document.querySelector('.modal');

const fullImg = document.querySelector('.full-img');

// Looping through and adding a click event to each image
smallImg.forEach(function (img) {
  img.addEventListener('click', function (e) {
    // Display full Image
    modal.classList.add('open');
    fullImg.classList.add('open');

    //Changing the image dynamically
    const originalQuality = img.getAttribute('alt');

    fullImg.src = `img/full/${originalQuality}.jpg`;
  });
});

modal.addEventListener('click', function (e) {
  console.log(e.target.classList);

  //   if (e.target.classList == 'modal open') {
  //     modal.classList.remove('open');
  //     fullImg.classList.remove('open');
  //   }

  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    fullImg.classList.remove('open');
  }
});
