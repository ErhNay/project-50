const openBtn = document.querySelector('.open')
const modal = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.modal-btn')

// Show Modal Window
openBtn.addEventListener('click', function(){
    modal.classList.add('show')
})


// Hide Modal Window
closeBtn.addEventListener("click", function(){
    modal.classList.remove("show")
})
