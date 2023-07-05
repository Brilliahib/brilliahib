// HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

var typingEffect = new Typed("#multiText", {
  strings: ["COMING SOON.", "SEGERA HADIR."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});

// SHOW MORE AND LESS
function showMoreCards() {
  var hiddenCards = document.querySelectorAll(".card.hidden");

  hiddenCards.forEach(function (card) {
    card.classList.remove("hidden");
  });

  var showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.style.display = "none";

  var showLessButton = document.getElementById("showLessButton");
  showLessButton.style.display = "block";
}
