import $ from "jquery";
import { showLoader } from "../utils";

$(document).ready(async function () {
  await toggleNavbar("a.license");
  await showLoader(false);
});
