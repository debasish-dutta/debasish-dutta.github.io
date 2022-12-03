function navbarToggle() {
    var x = document.getElementById("navBar");
    var y = document.getElementById("header");
    var btn = document.querySelector(".menuToggle").querySelector("a").querySelectorAll('i');
    if (x.className === "navbar") {
      x.className += " responsive";
      y.className += " responsive";
      btn[0].className += " hid ";
      btn[1].className = "fa fa-xmark";
    } else {
      x.className = "navbar";
      y.className = "header";
      btn[0].className = "fa fa-bars";
      btn[1].className += " hid";
    }
    console.log(btn[1]);
  }