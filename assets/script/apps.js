import $ from "jquery";
//Loading Page
$(document).on("change", "#theme", function () {
  console.log("theme changed");
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

$(document).on("click", ".msg-close", function (e) {
  $(".alert-message").removeClass("opacity-100");
  $(".alert-message").addClass("opacity-0");
  setTimeout(() => {
    $(".alert-message").remove();
  }, 700);
});
