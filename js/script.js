let menubutton = document.getElementById("menuicon");
let navbar = document.getElementById("navbar");
let touchbutton = document.getElementById("touchbtn");
let sectext = document.getElementById("sectxt");

menubutton.addEventListener("click", () => {
  navbar.classList.toggle("show");
});