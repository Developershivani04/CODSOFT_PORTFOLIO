let navbar = document.getElementById("navigation");
let span = document.getElementById("span");
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 10) {
        navbar.style.backgroundColor = "black";
        span.style.color = "#dc143c"
    }
    else {
        navbar.style.backgroundColor = "#dc143c"
        span.style.color = "black";

    }

}