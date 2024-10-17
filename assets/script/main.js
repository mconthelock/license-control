import $ from "jquery";
import { host, showLoader, toggleNavbar } from "./utils";

$(document).ready(async function () {
  await toggleNavbar("a.home");
  await showLoader(false);
});
