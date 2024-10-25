import "select2/dist/css/select2.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";

import { host, toggleNavbar, showLoader } from "../utils";
import { setDivision, setDepartment, setSection } from "../department";
import {
  getTemplate,
  getTemplateProp,
  getTemplateOption,
  getTemplateMember,
  getEmployee,
} from "../data";
import {
  appendCategory,
  setProp,
  setOption,
  removeOption,
  setEmployeeLoading,
  setEmployeeDupplicated,
  setEmployee,
  checkReq,
  saveTemplate,
} from "./master";
// 000. On load document state
$(document).ready(async function () {
  const id = window.location.href.replace(host, "").split("/");
  if (isNaN(parseInt(id[2]))) {
    window.location.href = `${host}/master/`;
    return false;
  }
  await appendCategory();
  await setDivision($("#login_empdiv").val());
  await setDepartment($("#login_empdiv").val());
  await setSection($("#login_empdept").val());

  const template = await getTemplate({ id: id[2] });
  await showTemplate(template[0]);
  await showTemplateProp(template[0].DOCID);
  await showTemplateMember(template[0].DOCID);

  $("#memder-loader").addClass("hidden");
  await toggleNavbar("a.master");
  await showLoader(false);
});

async function showTemplate(data) {
  const frm = $("#docinfo");
  frm.find(".docid").val(data.DOCID);
  frm.find(".docno").val(data.DOCNO);
  frm.find(".docname").val(data.DOCNAME);
  frm.find(".doctype").val(data.DOCCATEGORY);
  frm.find(".docterm").val(data.DOCTERM);
  frm.find(".doctermunit").val(data.DOCTERMUNIT);
  frm.find(".docalert").val(data.DOCALERT);
  $("#ownerdiv").val(data.DOCDIV);
  $("#ownerdept").val(data.DOCDEPT);
  $("#ownersec").val(data.DOCSEC);
}

async function showTemplateProp(id) {
  let str = ``;
  const data = await getTemplateProp({ docid: id });
  const option = await getTemplateOption({ docid: id });
  data.map((el, i) => {
    let strOption = ``;
    const opts = option.filter((item) => item.COLID == el.COLID);
    opts.map((opt) => {
      strOption += setOption(i, opt);
    });
    str += setProp(el, strOption);
  });
  $("#prop").append(str);
}

async function showTemplateMember(id) {
  const data = await getTemplateMember({ docid: id });
  data.map((el) => {
    const user = getEmployee(el.ALTEMP).then((emp) => {
      const setEmp = setEmployee(emp);
      $("#member").append(setEmp);
    });
  });
}

$(document).on("change", ".proptype", async function (e) {
  e.preventDefault();
  const val = $(this).val();
  if (val == "list") {
    const listItem = $(this).closest(".prop-row");
    const id = $(".prop-row").index(listItem);
    const opt = await setOption(id);
    $(this).closest(".prop-row").append(opt);
  } else {
    $(this).closest(".prop-row").find(".prop-option").remove();
  }
});

$(document).on("click", ".add-prop", async function (e) {
  e.preventDefault();
  const prop = await setProp();
  $("#prop").append(`${prop}`);
});

$(document).on("click", ".remove-prop", function (e) {
  e.preventDefault();
  $(this).closest(".prop-row").remove();
});

$(document).on("click", ".add-option", async function (e) {
  e.preventDefault();
  const id = $(this).closest(".prop-option").attr("data-id");
  const opt = await setOption(id);
  $(this).closest(".prop-option").after(opt);
});

$(document).on("click", ".remove-option", async function (e) {
  e.preventDefault();
  await removeOption($(this));
});

// 002. Add Alert to
$(document).on("change", "#add-member", async function (e) {
  e.preventDefault();
  await setEmployeeLoading($(this));
  if (!(await setEmployeeDupplicated($(this)))) return false;
  const user = await getEmployee($(this).val());
  if (user != null) {
    const emp = await setEmployee(user);
    $("#member").append(emp);
  }
  await setEmployeeLoading($(this));
  $(this).val("");
  $(this).focus();
});

$(document).on("click", ".remove-emp", function (e) {
  e.preventDefault();
  $(this).closest("div").remove();
});

// 003. Save template
$(document).on("click", "#addtemplate", async function (e) {
  e.preventDefault();
  if (!checkReq($("#form-template"))) return false;

  showLoader(true);
  const data = $("#form-template").serializeArray();
  await saveTemplate(data);
  window.location.href = `${host}master`;
});
