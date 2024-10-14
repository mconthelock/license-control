// 001. Add Prop: Click add prop button
import $ from "jquery";
import { showLoader, toggleNavbar } from "../utils";

$(document).ready(async function () {
  await toggleNavbar("a.master");
  await showLoader(false);
});

// 001. Add Prop
$(document).on("click", "#addprop", function (e) {
  e.preventDefault();
  $("#prop").append(
    '<div class="flex gap-2"><input type="text" name="prop[]" class="input input-bordered" placeholder="Property Name"><input type="text" name="propval[]" class="input input-bordered" placeholder="Property Value"><button class="btn btn-error" id="removeprop"><i class="icofont-ui-close"></i></button></div>'
  );
});

$(document).on("submit", "#addtemplate", function (e) {
  e.preventDefault();
  console.log("Add Template");
});
