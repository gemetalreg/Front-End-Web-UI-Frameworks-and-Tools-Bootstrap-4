import "./main.scss";
import "./header.scss";
import "./footer.scss";

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";

import "../github_modules/bootstrap-social/bootstrap-social.scss";

import { Carousel } from "bootstrap";

document.addEventListener("DOMContentLoaded", (e) => {
  var carouselEl = document.querySelector("#mycarousel");
  var carousel = new Carousel(carouselEl, {
    interval: 2000,
  });

  var carouselPause = document.querySelector("#carousel-pause");
  carouselPause.addEventListener("click", () => {
    carousel.pause();
  });

  var carouselPlay = document.querySelector("#carousel-play");
  carouselPlay.addEventListener("click", () => {
    carousel.cycle();
  });
});
