import "flatpickr/dist/flatpickr.min.css";
import "select2/dist/css/select2.min.css";
import "../../dist/css/calendar.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
import moment from "moment";
import flatpickr from "flatpickr";
import select2 from "select2";

import { host, uri, showLoader, toggleNavbar, calcDate } from "../utils";
import { getTemplate } from "./index";

$(document).ready(async function () {
  const id = window.location.href.replace(host, "").split("/");
  if (id[2] != undefined) {
    const no = id[2];
    const template = await getTemplate({ no });
    if (template !== undefined) await showTemplate(template[0]);
  }

  //Date Picker
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

  //Select2
  const populateSelect = (data) => {
    const selectElement = $("#provider");
    data.forEach((item) => {
      const newOption = new Option(
        `${item.VENDOR}: ${item.VNDNAME}`,
        item.VENDOR,
        false,
        false
      );
      selectElement.append(newOption).trigger("change");
    });
  };

  const vnd = await getVendor();
  $("#provider").select2();
  populateSelect(vnd);
  await toggleNavbar("a.license");
  await showLoader(false);
});

async function showTemplate(data) {
  const frm = $("#docinfo");
  frm.find(".docno").val(`${data.PREFIX}-0001`);
  frm.find(".docname").val(data.DOCNAME);
  frm.find(".doclife").val(data.LIFE);
  frm.find(".docunit").val(data.LIFE_TYPE);
  frm.find(".docearly").val(data.ALERT);

  const sdate = moment().format("YYYY-MM-DD");
  const expire = await calcDate(sdate, data.LIFE, data.LIFE_TYPE);
  const alertdate = await calcDate(expire, data.ALERT * -1);
  frm.find(".docstart").val(sdate);
  frm.find(".docexpired").val(expire);
  frm.find(".docalert").val(alertdate);
}

function getVendor() {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/pur/vendors/getvendors/`,
      data: { status: "1" },
      success: function (data) {
        resolve(data);
      },
    });
  });
}

$(document).on("change", ".calcdate", async function () {
  const frm = $("#docinfo");
  const sdate = frm.find(".docstart").val();
  const life = frm.find(".doclife").val();
  const unit = frm.find(".docunit").val();
  const alert = frm.find(".docearly").val();
  const expire = await calcDate(sdate, life, unit);
  const alertdate = await calcDate(expire, alert * -1);

  frm.find(".docstart").val(sdate);
  frm.find(".docexpired").val(expire);
  frm.find(".docalert").val(alertdate);
});
