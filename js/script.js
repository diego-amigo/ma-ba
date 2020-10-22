 

//  burger menu

// selected elements
var navTrigger = document.getElementById('navs-trigger');
var nav = document.querySelector('#navs');
// var header = document.getElementById('header');
// var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-labels');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight * 0.1;
var headingSize = windowWidth * 0.1;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight * 0.04;
  headingSize = windowWidth * 0.1;
  if (headingSize > windowHeight * 0.3) headingSize = windowHeight * 0.3;

  for (var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize + 'px';
    labels[i].style.height = fontSize + 'px';
    labels[i].style.marginTop = '-' + fontSize * 0.6 + 'px';
  }

  // header.style.height = windowHeight+'px';
  // heading.style.fontSize = headingSize+'px';
  // heading.style.height = headingSize+'px';
  // heading.style.marginTop = '-'+headingSize*0.6+'px';

}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0);
  if (closed) {
    navTrigger.className = 'navs-trigger open';  nav.className = 'out';
    
    setTimeout(function () {navTrigger.style.position = 'absolute';  }, 300);
   

  } else {
    navTrigger.className = 'navs-trigger close';
    nav.className = 'in';
    setTimeout(function () { navTrigger.style.position = 'fixed'; }, 500);
    
  }

}

window.onload = resize;

// /////////////////////////////////////////////////////////////////////////////////
