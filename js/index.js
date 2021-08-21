const hamburger = document.querySelector(".hamburger");
const hamburgerList = document.querySelector(".header__list");
const media = window.matchMedia("(max-width:700px)");
const blueWhite = hamburgerList.querySelector(".btn-blue-white");
const whiteBlue = hamburgerList.querySelector(".btn-white-blue");
const loginElement = document.getElementById("login");
const signUpElement = document.getElementById("signup");
function test() {
  if (media.matches) {
    blueWhite.classList.remove("btn-blue-white");
    whiteBlue.classList.remove("btn-white-blue");
  } else {
    loginElement.classList.add("btn-blue-white");
    signUpElement.classList.add("btn-white-blue");
  }
}
media.addListener(test);

hamburger.addEventListener("click", () => {
  hamburgerList.classList.toggle("header__list-active");
});
