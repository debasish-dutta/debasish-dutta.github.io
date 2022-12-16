const navBar = document.getElementById("navBar");
const header = document.getElementById("header");
const toggleBtn = document.querySelector(".menuToggle").querySelector("a").querySelectorAll('i');
const sidebar = document.querySelector(".sidebar");

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const eduHead = document.getElementsByClassName("edu-head");
const timelineCard = document.querySelectorAll(".work-timeline li");

const form = document.querySelector('.contact-form');
const btn = document.querySelector('#submit');

const typedTextSpan = document.querySelector(".dynamic-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["a coder.", "a researcher.", "a blogger.", "a developer."];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

function navbarToggle() {
    if (navBar.className === "navbar") {
      navBar.className += " responsive";
      header.className += " responsive";
      toggleBtn[0].className += " hid ";
      toggleBtn[1].className = "fa fa-xmark";
    } else {
      navBar.className = "navbar";
      header.className = "header";
      toggleBtn[0].className = "fa fa-bars";
      toggleBtn[1].className += " hid";
    }
    console.log(toggleBtn[1]);
  }


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navbarToggle(); 
    sidebar.classList.add("hide");
    for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].parentElement.classList.add("full-border");
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            if(pages[i].classList.contains("Home")) { 
                sidebar.classList.remove("hide");
                pages[i].parentElement.classList.remove("full-border");
            }
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// adding collapsable content
for (var i = 0; i < eduHead.length; i++) {
    eduHead[i].addEventListener("click", function() {
    this.classList.toggle("plusActive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  (function () {
  function slideIn() {
    for (let i = 0; i < timelineCard.length; i++) {
      if (isElementInViewport(timelineCard[i])) {
        timelineCard[i].classList.add("slide-in");
      } else {
        timelineCard[i].classList.remove("slide-in");
      }
    }
}
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
}) ();


    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // e.submit();
        const formData = new FormData(form);
        // const values = [...formData.entries()];
        console.log(Object.fromEntries(formData));
        // console.log(values);
    });
// const output = document.getElementById('output');

// for (const [key, value] of formData) {
//   output.textContent += `${key}: ${value}\n`;