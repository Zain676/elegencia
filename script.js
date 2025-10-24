const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
let navbarNav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
    navbarNav.style.display = "none";

});