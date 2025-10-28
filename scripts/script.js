const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const headerBottom = header.offsetHeight;

window.addEventListener("scroll", () =>
{
   if (window.scrollY >= headerBottom) navbar.classList.add("active"); else navbar.classList.remove("active");
});