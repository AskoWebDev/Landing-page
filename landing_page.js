// Humburger menu logic

const button = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('hamburger_menu')[0]

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


// Scroll up button logic

//Get the button:
const mybutton = document.querySelector("[data-scroll]");


window.onscroll = function() {
  scrollUp()
}

function scrollUp() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 