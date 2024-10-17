import "flatpickr/dist/flatpickr.min.css";
import "select2/dist/css/select2.min.css";
import "../../dist/css/calendar.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
import moment from "moment";
import flatpickr from "flatpickr";
import select2 from "select2";

import { host, uri, showLoader, toggleNavbar, calcDate } from "../utils";
import { getTemplate, getTemplateProp, getVendor } from "../data";

$(document).ready(async function () {
  const id = window.location.href.replace(host, "").split("/");
  if (id[2] != undefined) {
    const no = id[2];
    const template = await getTemplate({ no });
    if (template !== undefined) {
      await showTemplate(template[0]);
      await showTemplateProp(template[0]);
    }
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

  $("#provider").select2();
  const vnd = await getVendor();
  await populateSelect(vnd);
  await toggleNavbar("a.license");
  await showLoader(false);
});

async function showTemplate(data) {
  const frm = $("#docinfo");
  frm.find(".docno").val(`${data.DOCNO}-0001`);
  frm.find(".docname").val(data.DOCNAME);

  const frmexp = $("#docperiod");
  frmexp.find(".doclife").val(data.DOCTERM);
  frmexp.find(".docunit").val(data.DOCTERMUNIT);
  frmexp.find(".docearly").val(data.DOCALERT);
  const sdate = moment().format("YYYY-MM-DD");
  const expire = await calcDate(sdate, data.DOCTERM, data.DOCTERMUNIT);
  const alertdate = await calcDate(expire, data.DOCALERT * -1);
  frmexp.find(".docstart").val(sdate);
  frmexp.find(".docexpired").val(expire);
  frmexp.find(".docalert").val(alertdate);
}

async function showTemplateProp(id) {
  let str = ``;
  const data = await getTemplateProp({ docid: id.DOCID });
  data.map((el) => {
    str += `<label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">${el.COL_NAME}</span>
        </div>
        <input type="hidden" name="docno" required />
        <input type="text" class="input input-bordered w-full" name="docno" required />
    </label>`;
  });
  $("#additional").append(str);
}

$(document).on("change", ".calcdate", async function () {
  const frm = $("#docperiod");
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
