// 000. Onload function
// 001. Add Prop: Click add prop button
// 002. Add Alert to: Click add alert button
import "select2/dist/css/select2.min.css";
import "../../dist/css/select2.min.css";

import $ from "jquery";
import { host, showLoader, toggleNavbar } from "../utils";
import { setDivision, setDepartment, setSection } from "../department";
import { getEmployee } from "../data";
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
  await appendCategory();
  await setDivision($("#login_empdiv").val());
  await setDepartment($("#login_empdiv").val());
  await setSection($("#login_empdept").val());

  $("#memder-loader").addClass("hidden");
  await toggleNavbar("a.master");
  await showLoader(false);
});

// 001. Add Prop
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

// 005. Owner
$(document).on("change", "#ownerdept", async function (e) {
  e.preventDefault();
  const dept = $(this).val();
  await changeDepartment(dept);
});

// 003. Add Template
$(document).on("click", "#addtemplate", async function (e) {
  e.preventDefault();
  if (!checkReq($("#form-template"))) return false;

  showLoader(true);
  const data = $("#form-template").serializeArray();
  await saveTemplate(data);
  window.location.href = `${host}master`;
});
