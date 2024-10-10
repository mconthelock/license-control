import $ from "jquery";

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
