const navBar = document.getElementById("navBar");
const header = document.getElementById("header");
const toggleBtn = document.querySelector(".menuToggle").querySelector("a").querySelectorAll('i');
const sidebar = document.querySelector(".sidebar");

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const eduHead = document.getElementsByClassName("edu-head");
const timelineCard = document.querySelectorAll(".work-timeline li");

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