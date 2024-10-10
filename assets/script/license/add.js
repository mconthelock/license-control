import $ from "jquery";
import { showLoader } from "../utils";

$(document).ready(async function () {
  await showLoader(false);
});
