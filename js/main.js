
// ---------------------------------------------------------- top nav selection js-----------------------------------------------------

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ---------------------------------------------------------- reveal class js-----------------------------------------------------

function fade() {
  $('.preloader').fadeOut("slow");
}
setTimeout(fade, 8000);



function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


// ---------------------------------------------------------- custom cursor js-----------------------------------------------------

// const customCursor = document.getElementById('custom-cursor');
// const hoverContainer = document.querySelector('.main-container');
// const updateCursorPosition = (event) => {
//   customCursor.style.top = `${event.clientY}px`;
//   customCursor.style.left = `${event.clientX}px`;
// }
// window.addEventListener('mousemove', (event) => {
//   updateCursorPosition(event)
  
//   if (hoverContainer.matches(':hover')) {
//     customCursor.classList.add('zoom')
//   } else {
//     customCursor.classList.remove('zoom')
//   }
// })

const cursor = document.querySelector(".custom-cursor")
  document.addEventListener('mousemove', (e) => {
  const customCursor = document.querySelector('.custom-cursor');
  customCursor.style.top = e.clientY + 'px';
  customCursor.style.left = e.clientX + 'px';

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  
});



