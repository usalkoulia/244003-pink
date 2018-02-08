var header_toggle = document.querySelector(".header__menu-toggle");
var header = document.querySelector(".header");

var slider_button = document.querySelector(".slider__button");
var slider_item = document.querySelector(".slider__item");

header_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});
