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

import { Tooltip } from "bootstrap";

var tooltipHtmlTriggerList = Array.from(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

var tooltipList = tooltipHtmlTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl, {
    html: true,
  });
});
