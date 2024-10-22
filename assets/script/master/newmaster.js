// 000. Onload function
// 001. Add Prop: Click add prop button
// 002. Add Alert to: Click add alert button
import "select2/dist/css/select2.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
//import select2 from "select2";
import { host, showLoader, toggleNavbar, showMessage } from "../utils";
import { getDivision, getDepartment, getSection, getEmployee } from "../data";

// 000. On load document state
$(document).ready(async function () {
  await setDivision($("#login_empdiv").val());
  await setDepartment($("#login_empdiv").val());
  await setSection($("#login_empdept").val());
  await toggleNavbar("a.master");
  await appendCategory();
  await showLoader(false);
});

async function appendCategory() {
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

async function setDivision(div) {
  const division = await getDivision();
  division.map((item) => {
    $("#ownerdiv").append(
      `<option value="${item.SDIVCODE}"
        class="${item.SDIVCODE != div ? "hidden" : ""}"
        ${item.SDIVCODE == div ? "selected" : ""}
      >${item.SDIV}</option>`
    );
  });
}

async function setDepartment(div) {
  const userdept = $("#login_empdept").val();
  const depertment = await getDepartment();
  depertment.map((item) => {
    $("#ownerdept").append(
      `<option value="${item.SDEPCODE}"
        class="${item.SDIVCODE != div ? "hidden" : ""}"
        ${item.SDEPCODE == userdept ? "selected" : ""}
        >${item.SDEPT}</option>`
    );
  });
}

async function setSection(dept) {
  const section = await getSection();
  $("#ownersec").append(`<option value="00" selected>ALL</option>`);
  section.map((item) => {
    $("#ownersec").append(
      `<option value="${item.SSECCODE}" class="${
        item.SDEPCODE != dept ? "hidden" : ""
      }">${item.SSEC}</option>`
    );
  });
}

// 001. Add Prop
$(document).on("click", "#addprop", function (e) {
  e.preventDefault();
  $("#prop").append(`
    <div class="flex flex-col gap-2 mb-2 prop-row">
        <div class="flex items-center gap-2">
            <input type="text" name="prop[]" class="input input-bordered w-full max-w-xs" placeholder="Property Name">
            <select name="proptype[]" class="select select-bordered w-full max-w-xs proptype">
                <option value="text">Text</option>
                <option value="date">Date</option>
                <option value="file">File</option>
                <option value="vendor">Vendors</option>
                <option value="list">List</option>
            </select>
            <button class="btn btn-ghost btn-circle remove-row"><i class="icofont-ui-close"></i></button>
        </div>
    </div>`);
});

$(document).on("change", ".proptype", function (e) {
  e.preventDefault();
  const val = $(this).val();
  if (val == "list") {
    const id = $(".prop-row").length;
    $(this)
      .closest(".prop-row")
      .append(
        `<div class="flex w-full prop-option" data-id="${id}">
            <input type="text" placeholder="Type select option" class="input input-bordered w-full" name="opt[${id}][]" />
            <button class="btn btn-ghost btn-circle add-option"><i class="icofont-ui-add"></i></button>
            <button class="btn btn-ghost btn-circle remove-option"><i class="icofont-ui-close"></i></button>
        </div>`
      );
  } else {
    $(this).closest(".prop-row").find(".prop-option").remove();
  }
});

$(document).on("click", ".remove-row", function (e) {
  e.preventDefault();
  $(this).closest(".prop-row").remove();
});

$(document).on("click", ".add-option", function (e) {
  e.preventDefault();
  const id = $(this).closest(".prop-option").attr("data-id");
  $(this).closest(
    ".prop-option"
  ).after(`<div class="flex w-full prop-option" data-id="${id}">
            <input type="text" placeholder="Type select option" class="input input-bordered w-full" name="opt[${id}][]" />
            <button class="btn btn-ghost btn-circle add-option"><i class="icofont-ui-add"></i></button>
            <button class="btn btn-ghost btn-circle remove-option"><i class="icofont-ui-close"></i></button>
        </div>`);
});

$(document).on("click", ".remove-option", function (e) {
  e.preventDefault();
  const row = $(this).closest(".prop-row");
  $(this).closest(".prop-option").remove();
  if (row.find(".prop-option").length == 0) {
    row.find(".proptype").val("text");
  }
});

// 002. Add Alert to
$(document).on("change", "#add-member", async function (e) {
  e.preventDefault();
  $(this).closest("label").find(".loading").toggle("hidden");
  $(this).closest("label").find(".search-member").toggle("hidden");
  const user = await getEmployee({ id: $(this).val() });
  if (user == undefined) {
    showMessage("Employee not found");
  } else {
    $("#member").append(`<div class="flex items-center gap-5">
        <div class="avatar flex-none">
            <div class="w-12 rounded-full shadow-md">
                <img src="${user[0].EMPIMG}" />
            </div>
        </div>
        <div class="flex-1">
            <h1 class="font-bold mb-1">${user[0].SNAME}</h1>
            <h2>${user[0].SEMPNO}</h2>
            <input type="hidden" name="empno[]" value="${user[0].SEMPNO}">
        </div>
        <button class="btn btn-ghost btn-circle flex-none remove-emp" tab="-1">
            <span class="loading loading-spinner hidden"></span>
            <span class="text"><i class="icofont-ui-close"></i></span>
        </button>
    </div>`);
  }

  $(this).closest("label").find(".loading").toggle("hidden");
  $(this).closest("label").find(".search-member").toggle("hidden");
  $(this).val("");
  $(this).focus();
});

$(document).on("click", ".remove-emp", function (e) {
  e.preventDefault();
  $(this).closest("div").remove();
});

// 003. Add Template
$(document).on("click", "#addtemplate", async function (e) {
  e.preventDefault();
  const data = $("#form-template").serializeArray();
  let req = true;
  data.map((el) => {
    if (el.value == "") req = false;
  });
  if (!req) {
    showMessage("Please fill all important field");
    return;
  }

  const emp = data.filter((el) => el.name == "empno[]");
  if (emp.length == 0) {
    showMessage("Please add alert person in-charged");
    return;
  }

  showLoader(true);
  await saveData(data);
  window.location.href = `${host}master`;
});

// 004. Save Data
function saveData(data) {
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

// 005. Owner
$(document).on("change", "#ownerdept", async function (e) {
  e.preventDefault();
  const dept = $(this).val();
  $("#ownersec")
    .find("option")
    .map((i, el) => {
      const deptcode = $(el).val().substring(0, 4);
      if (deptcode == dept.substring(0, 4) || deptcode == "00")
        $(el).removeClass("hidden");
      else $(el).addClass("hidden");
    });
  $("#ownersec").val("00");
});
