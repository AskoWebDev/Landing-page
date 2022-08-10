// Humburger menu logic

const button = document.querySelector('toggle-button')[0]
const navbar = document.querySelector('hamburger_menu')[0]

button.addEventListener('click', () => {
  navbar.classList.toggle('active')
})

// Slider logic
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
} 

