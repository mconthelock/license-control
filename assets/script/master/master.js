import $ from "jquery";
import { host, showMessage } from "../utils";

export async function appendCategory() {
  const getCategory = () => {
    return new Promise((resolve) => {
      $.ajax({
        type: "post",
        dataType: "json",
        url: `${host}master/getDocCategory`,
        success: function (response) {
          resolve(response);
        },
      });
    });
  };

  const data = await getCategory();
  data.map((el) => {
    $("#doc_type").append(
      `<option value="${el.CATE_ID}">${el.CATE_NAME}</option>`
    );
  });
}

export function setProp(val = {}, opt = "") {
  return `
    <div class="flex flex-col gap-2 mb-2 prop-row">
        <div class="flex items-center gap-2">
            <input type="text" name="prop[]" class="input input-bordered w-full max-w-xs req" placeholder="Property Name" value="${
              val.COLNAME == undefined ? "" : val.COLNAME
            }">
            <input type="hidden" name="propid[]" value="${
              val.COLID == undefined ? "" : val.COLID
            }">
            <select name="proptype[]" class="select select-bordered w-full max-w-xs proptype req">
                <option value="text" ${
                  val.COLTYPE == "text" ? "selected" : ""
                }>Text</option>
                <option value="date" ${
                  val.COLTYPE == "date" ? "selected" : ""
                }>Date</option>
                <option value="list" ${
                  val.COLTYPE == "list" ? "selected" : ""
                }>List</option>
            </select>
            <button class="btn btn-ghost btn-circle btn-sm remove-prop" type="button"><i class="icofont-ui-close text-red-400"></i></button>
        </div>
        ${opt}
    </div>`;
}

export function setOption(uniq, val = {}) {
  return `<div class="flex w-full prop-option" data-id="${uniq}">
    <input type="hidden" name="optid[${uniq}][]" value="${
    val.OPTID == undefined ? "" : val.OPTID
  }" />
    <input type="text" placeholder="Type select option" class="input input-bordered input-sm w-full req" name="opt[${uniq}][]" value="${
    val.OPTVALUE == undefined ? "" : val.OPTVALUE
  }" />
    <button class="btn btn-ghost btn-circle btn-sm add-option" type="button"><i class="icofont-ui-add text-gray-400"></i></button>
    <button class="btn btn-ghost btn-circle btn-sm remove-option" type="button"><i class="icofont-ui-close text-gray-400"></i></button>
  </div>`;
}

export function removeOption(obj) {
  const row = obj.closest(".prop-row");
  obj.closest(".prop-option").remove();
  if (row.find(".prop-option").length == 0) {
    row.find(".proptype").val("text");
  }
}

export function setEmployeeLoading(obj) {
  obj.closest("label").find(".loading").toggle("hidden");
  obj.closest("label").find(".search-member").toggle("hidden");
}

export function setEmployeeDupplicated(obj) {
  const emp = obj.val();
  const dup = $(".employee").map((i, el) => {
    return $(el).val();
  });
  if (dup.toArray().includes(emp)) {
    showMessage("Employee already added");
    setEmployeeLoading(obj);
    obj.val("");
    obj.focus();
    return false;
  }
  return true;
}

export function setEmployee(user) {
  return `<div class="flex items-center gap-5">
        <div class="avatar flex-none">
            <div class="w-12 rounded-full shadow-md">
                <img src="${user.EMPIMG}" />
            </div>
        </div>
        <div class="flex-1">
            <h1 class="font-bold mb-1">${user.SNAME}</h1>
            <h2>${user.SEMPNO}</h2>
            <input type="hidden" name="empno[]" value="${user.SEMPNO}" class="employee">
        </div>
        <button class="btn btn-ghost btn-circle flex-none remove-emp" type="button">
            <span class="loading loading-spinner hidden"></span>
            <span class="text"><i class="icofont-ui-close"></i></span>
        </button>
    </div>`;
}

export function checkReq(form) {
  let req = true;
  form.find(".req").map((i, el) => {
    if (el.value == "") req = false;
  });
  if (!req) {
    showMessage("Please fill all important field");
    return false;
  }

  let term = $(".docterm").val();
  const termmin = $(".docterm").attr("min");
  const unit = $(".doctermunit").val();
  if (unit == "Month") term = term * 30;
  else if (unit == "Year") term = term * 365;
  console.log(term, termmin);
  if (!moreNumber("Control term", term, termmin)) return false;

  const alert = $(".docalert").val();
  const minalert = $(".docalert").attr("min");
  if (!moreNumber("Early alert day", alert, minalert)) return false;

  const data = form.serializeArray();
  const emp = data.filter((el) => el.name == "empno[]");
  if (emp.length == 0) {
    showMessage("Please add alert person in-charged");
    return false;
  }
  return req;
}

export function moreNumber(name, num1, num2 = 0) {
  const number1 = parseInt(
    num1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
  const number2 = parseInt(
    num2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
  if (number1 < number2) {
    showMessage(`Please enter number of ${name} more than ${number2} days`);
    return false;
  }
  return true;
}

export function saveTemplate(data) {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${host}master/saveTemplate`,
      data: data,
      success: function (response) {
        resolve(response);
      },
    });
  });
}
