import $ from "jquery";

import { host, showLoader, toggleNavbar } from "../utils";
import { getTemplate, getMaxLicense } from "../data";
import { setDatePicker, showTemplate, showTemplateProp } from "./license";

$(document).ready(async function () {
  //Initailize form
  await loadNewTemplate();
  await setDatePicker();
  await toggleNavbar("a.license");
  await showLoader(false);
});

const loadNewTemplate = async () => {
  const id = window.location.href.replace(host, "").split("/");
  if (!isNaN(parseInt(id[2]))) {
    const no = parseInt(id[2]);
    const template = await getTemplate({ id: no });
    if (template !== undefined) {
      const runno = await getMaxLicense({ no: template[0].DOCNO });
      await showTemplate(template[0], runno);
      await showTemplateProp(template[0].DOCID);
    }
  }
};

// $(document).on("change", ".calcdate", async function () {
//   const frm = $("#docperiod");
//   const sdate = frm.find(".docstart").val();
//   const life = frm.find(".doclife").val();
//   const unit = frm.find(".docunit").val();
//   const alert = frm.find(".docearly").val();
//   const expire = await calcDate(sdate, life, unit);
//   const alertdate = await calcDate(expire, alert * -1);

//   frm.find(".docstart").val(sdate);
//   frm.find(".docexpired").val(expire);
//   frm.find(".docalert").val(alertdate);
// });

// // Change Person In-charged
// $(document).on("change", "#person-incharge", async function (e) {
//   e.preventDefault();
//   const user = await getEmployee({ id: $(this).val() });
//   if (user == undefined) {
//     showMessage("Employee not found");
//   } else {
//     console.log(user);
//     $("#person-incharge-avatar").html(`<div class="avatar flex-none">
//         <div class="w-12 rounded-full">
//             <img src="${user[0].EMPIMG}" />
//         </div>
//     </div>
//     <div class="flex-grow ml-3">
//         <h1 class="text-lg font-bold">${user[0].SNAME}</h1>
//         <p class="text-gray-400">${user[0].SEMPNO}</p>
//         <input type="hidden" name="licensepic" value="${user[0].SEMPNO}">
//     </div>`);
//   }
//   $(this).val("");
//   $(this).focus();
// });
