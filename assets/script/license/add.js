import "flatpickr/dist/flatpickr.min.css";
import "../../dist/css/calendar.min.css";

import $ from "jquery";
import moment from "moment";
import flatpickr from "flatpickr";

import { host, showLoader, toggleNavbar } from "../utils";
import { getTemplate } from "./index";

$(document).ready(async function () {
  const id = window.location.href.replace(host, "").split("/");
  if (id[2] != undefined) {
    const no = id[2];
    const template = await getTemplate({ no });
    if (template !== undefined) await showTemplate(template[0]);
  }

  const storedDayOffs = JSON.parse(localStorage.getItem("dayoff")) || [];

  flatpickr(".fdate", {
    dateFormat: "Y-m-d",
    allowInput: true,
    onDayCreate: function (dObj, dStr, fp, dayElem) {
      const dateStr = dayElem.dateObj.toLocaleDateString().split("T")[0];
      const dd = moment(dateStr).format("yyyy-M-D");
      if (storedDayOffs.value.includes(dd)) {
        dayElem.classList.add("day-off");
      }
    },
  });
  await toggleNavbar("a.license");
  await showLoader(false);
});

function showTemplate(data) {
  const frm = $("#docinfo");
  frm.find(".docno").val(`${data.PREFIX}-0001`);
  frm.find(".docname").val(data.DOCNAME);
  frm.find(".doclife").val(data.LIFE);
  frm.find(".docunit").val(data.LIFE_TYPE);

  const sdate = moment().format("YYYY-MM-DD");
  const expire = moment(sdate)
    .add(data.LIFE, data.LIFE_TYPE)
    .format("YYYY-MM-DD");
  const alertdate = moment(expire)
    .subtract(data.ALERT, "Day")
    .format("YYYY-MM-DD");
  frm.find(".docstart").val(sdate);
  frm.find(".docexpired").val(expire);
  frm.find(".docalert").val(alertdate);
}
