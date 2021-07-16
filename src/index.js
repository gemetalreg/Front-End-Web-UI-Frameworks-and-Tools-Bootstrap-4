import "./variables.scss";
import "./main.scss";
import "./header.scss";
import "./footer.scss";
import "./modal.scss";

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";

import "../github_modules/bootstrap-social/bootstrap-social.scss";

import { Carousel, Modal } from "bootstrap";

document.addEventListener("DOMContentLoaded", (e) => {
  var loginModal = new Modal(document.querySelector("#login-modal"));
  document.querySelector("#login-modal-btn").addEventListener("click", () => {
    loginModal.show();
  });

  var reserveModal = new Modal(document.querySelector("#reserve-form"));
  document.querySelector("#reserve-form-btn").addEventListener("click", () => {
    reserveModal.show();
  });

  var carouselEl = document.querySelector("#mycarousel");
  var carousel = new Carousel(carouselEl, {
    interval: 2000,
  });

  var carouselPlayingButton = document.querySelector("#carouselButton");
  carouselPlayingButton.addEventListener("click", () => {
    console.log(carouselPlayingButton.querySelector("#carousel-button-icon"));
    var carousel_button_icon = carouselPlayingButton.querySelector(
      "#carousel-button-icon"
    );
    if (carousel_button_icon.classList.contains("fa-pause")) {
      carousel.pause();
      carousel_button_icon.classList.replace("fa-pause", "fa-play");
    } else if (carousel_button_icon.classList.contains("fa-play")) {
      carousel.cycle();
      carousel_button_icon.classList.replace("fa-play", "fa-pause");
    }
  });
});
