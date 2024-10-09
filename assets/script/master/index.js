import $ from "jquery";
import { showLoader, showMessage } from "../utils";

$(document).ready(async function () {
  await showLoader(false);
});
