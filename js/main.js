//Change image src on breakpoint
function changeImageSrc(matchMedia) {
    if (matchMedia.matches) { // If media query matches
        document.querySelector('.hero-image').src = '../images/hero-desktop.jpg';
      } else {
        document.querySelector('.hero-image').src = '../images/hero-mobile.jpg';
      }
}

var matchMedia = window.matchMedia("(min-width: 768px)");
changeImageSrc(matchMedia); // Call listener function at run time
matchMedia.addListener(changeImageSrc); // Attach listener function on state changes 


//Email form validation
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

function emailValid(form) {
    if (form.classList.contains('content__signin--invalid')) {
        form.classList.remove('content__signin--invalid');
    }
}

function emailInvalid(form) {
    if (!form.classList.contains('content__signin--invalid')) {
        form.classList.add('content__signin--invalid');
    }
    return false;
}
  
var form = document.querySelector('.content__signin');

form.querySelector('.content__signin-input').addEventListener('blur', (event) => {
    if(!ValidateEmail(form.querySelector('.content__signin-input'))) {
        event.preventDefault();
        emailInvalid(form);
      } else {
        emailValid(form);
      }
})
form.addEventListener('submit', (event) => {
  if(!ValidateEmail(form.querySelector('.content__signin-input'))) {
    event.preventDefault();
    emailInvalid(form);
  } else {
    emailValid(form);
  }
})
