const root=document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

// root.style.setProperty("--marquee-elemnts", marqueeContent.children.length);

for(let i=0; i<marqueeElementDisplayed; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// ---------------------------------words js-----------------------------------------------------

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}
changeWord();
setInterval(changeWord, 4000);

// ---------------------------------------------------------- works selection js-----------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Set UI/UX Designer as default active tab and show its content
  changeDesigner('uiux');
});

function changeDesigner(designerType) {
  // Remove 'active' class from all tabs and content
  const tabs = document.querySelectorAll('.designer-tab');
  const contents = document.querySelectorAll('.designer-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // Add 'active' class to the clicked tab and show its content
  const selectedTab = document.querySelector(`.designer-tab[data-type="${designerType}"]`);
  const selectedContent = document.querySelector(`#${designerType}-content`);

  selectedTab.classList.add('active');
  selectedContent.classList.add('active');
}

// ---------------------------------------------------------- works selection js-----------------------------------------------------

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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
  // const customCursor = document.querySelector('.custom-cursor');
  // customCursor.style.top = e.clientY + 'px';
  // customCursor.style.left = e.clientX + 'px';

  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";

});
