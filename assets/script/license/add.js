import "flatpickr/dist/flatpickr.min.css";
import "select2/dist/css/select2.min.css";
import "../../dist/css/calendar.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
import moment from "moment";
import flatpickr from "flatpickr";
import select2 from "select2";

import {
  host,
  showLoader,
  showMessage,
  toggleNavbar,
  calcDate,
  populateSelect,
} from "../utils";
import {
  getTemplate,
  getTemplateProp,
  getVendor,
  getEmployee,
  getMaxLicense,
} from "../data";

$(document).ready(async function () {
  const id = window.location.href.replace(host, "").split("/");
  if (!isNaN(parseInt(id[2]))) {
    const no = parseInt(id[2]);
    const template = await getTemplate({ id: no });
    if (template !== undefined) {
      const runno = await getMaxLicense({ no: template[0].DOCNO });
      await showTemplate(template[0], runno);
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
  $("#provider").select2({ tags: true });
  const vnd = await getVendor();
  const vendor = [];
  vnd.map((el) => {
    vendor.push({ id: el.VENDOR, text: el.VNDNAME });
  });
  await populateSelect(vendor, $("#provider"));
  await toggleNavbar("a.license");
  await showLoader(false);
});

async function showTemplate(data, no) {
  const frm = $("#docinfo");
  const runno = "0000" + no[0].ID.toString();
  const id = runno.substr(runno.length - 4);
  frm.find(".docno").val(`${data.DOCNO}-${id}`);
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
            <span class="label-text font-bold">${el.COLNAME}</span>
        </div>
        <input type="hidden" class="input input-bordered w-full" name="prop[]" value="${el.COLNAME}"/>
        <input type="text" class="input input-bordered w-full" name="propval[]"/>
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

// Change Person In-charged
$(document).on("change", "#person-incharge", async function (e) {
  e.preventDefault();
  const user = await getEmployee({ id: $(this).val() });
  if (user == undefined) {
    showMessage("Employee not found");
  } else {
    console.log(user);
    $("#person-incharge-avatar").html(`<div class="avatar flex-none">
        <div class="w-12 rounded-full">
            <img src="${user[0].EMPIMG}" />
        </div>
    </div>
    <div class="flex-grow ml-3">
        <h1 class="text-lg font-bold">${user[0].SNAME}</h1>
        <p class="text-gray-400">${user[0].SEMPNO}</p>
        <input type="hidden" name="licensepic" value="${user[0].SEMPNO}">
    </div>`);
  }
  $(this).val("");
  $(this).focus();
});
