const navBar = document.getElementById("navBar");
const header = document.getElementById("header");
const toggleBtn = document.querySelector(".menuToggle").querySelector("a").querySelectorAll('i');
const sidebar = document.querySelector(".sidebar");

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


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
        if(pages[i].classList.contains("Home")) sidebar.classList.remove("hide");
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}