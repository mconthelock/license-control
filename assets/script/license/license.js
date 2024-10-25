import "flatpickr/dist/flatpickr.min.css";
import "select2/dist/css/select2.min.css";
import "../../dist/css/calendar.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
import moment from "moment";
import flatpickr from "flatpickr";
import select2 from "select2";

import { populateSelect } from "../utils";
import { setDivision, setDepartment, setSection } from "../department";
import { getTemplateProp, getTemplateOption, getVendor } from "../data";

export const showTemplate = async (data, no) => {
  const frm = $("#docinfo");
  const runno = "0000" + no[0].ID.toString();
  const id = runno.substr(runno.length - 4);
  frm.find(".docno").val(`${data.DOCNO}-${id}`);
  frm.find(".docname").val(data.DOCNAME);
  await setDivision(data.DOCDIV);
  await setDepartment(data.DOCDIV);
  await setSection(data.DOCDEPT);
  await setVendors();

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
};

export const showTemplateProp = async (id) => {
  let str = ``;
  let element = "";
  const data = await getTemplateProp({ docid: id });
  const option = await getTemplateOption({ docid: id });
  data.map((el, i) => {
    if (el.COLTYPE == "list") {
      const opts = option.filter((item) => item.COLID == el.COLID);
      let strOption = ``;
      opts.map((opt) => {
        strOption += `<option value="${opt.OPTVALUE}">${opt.OPTVALUE}</option>`;
      });
      element = `<select class="select select-bordered w-full">${strOption}</select>`;
    } else {
      element = `<input type="text" class="input input-bordered w-full ${
        el.COLTYPE == "date" ? "fdate" : ""
      }" name="propval[]" max="50"/>`;
    }

    str += `<label class="form-control w-full mt-3">
            <div class="label">
                <span class="label-text font-bold">${el.COLNAME}</span>
            </div>
            <input type="hidden" class="input input-bordered w-full" name="prop[]" value="${el.COLNAME}"/>
            ${element}
        </label>`;
  });
  $("#additional").append(str);
};

export const setDatePicker = () => {
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
};

export const setVendors = async () => {
  $("#provider").select2({ tags: true });
  const vnd = await getVendor();
  const vendor = [];
  vnd.map((el) => {
    vendor.push({ id: el.VENDOR, text: el.VNDNAME });
  });
  await populateSelect(vendor, $("#provider"));
};

export const calcDate = (sdate, ndate, unit = "Day") => {
  if (ndate > 0) return moment(sdate).add(ndate, unit).format("YYYY-MM-DD");
  else
    return moment(sdate)
      .subtract(ndate * -1, unit)
      .format("YYYY-MM-DD");
};
