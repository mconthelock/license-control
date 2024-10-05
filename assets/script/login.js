import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import $ from "jquery";

const container = document.getElementById("myCarousel");
const options = {
  Autoplay: {
    timeout: 7500,
    showProgress: false,
  },
};
new Carousel(container, options, { Autoplay });

$("#login-form").submit(function (e) {
  e.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();
  if (email === "" || password === "") {
    alert("Please fill in all fields");
  }
  $.ajax({
    url: "/login",
    type: "POST",
    data: {
      email,
      password,
    },
    success: function (response) {
      if (response === "success") {
        window.location.href = "/dashboard";
      } else {
        alert("Invalid credentials");
      }
    },
  });
});
