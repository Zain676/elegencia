const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
let navbarNav = document.getElementById("nav-links");



window.addEventListener('scroll', () => {
    const navbars = document.querySelectorAll(".navbar,#nav-links");
    if (window.scrollY > 50) {
        navbars.forEach(nav => nav.classList.add('scrolled'));
    } else {
        navbars.forEach(nav => nav.classList.remove('scrolled'));
    }
});

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
    navbarNav.style.display = "none";

});