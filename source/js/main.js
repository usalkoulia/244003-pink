var header_toggle = document.querySelector(".header__menu-toggle");
var header = document.querySelector(".header");

var competition_form = document.querySelector(".competition-form");
var popup_submit = document.querySelector(".popup--submit");
var popup_error = document.querySelector(".popup--error");
var popup_button_error = document.querySelector(".popup__button--error");
var popup_button_submit = document.querySelector(".popup__button--submit");
var input_surname = document.querySelector(".competition-form__input--surname");
var input_name = document.querySelector(".competition-form__input--name");
var input_email = document.querySelector(".competition-form__input--email");

header.classList.remove("header--active");
header_toggle.classList.add("header__menu-toggle--active");

header_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});

competition_form.addEventListener("submit", function(evt) {
  if (!input_surname.value || !input_name.value || !input_email.value) {
    evt.preventDefault();
    popup_error.classList.add("popup--active");
  } else {
    evt.preventDefault();
    popup_submit.classList.add("popup--active");
  }
});

popup_button_error.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_error.remove("popup--active");
});

popup_button_submit.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_submit.remove("popup--active");
});
