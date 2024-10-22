import $ from "jquery";
import { host, uri } from "./utils";

export const getTemplate = (q = {}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${host}master/getTemplate`,
      data: q,
      success: function (response) {
        if (response.status == "session_expired") {
          reject(response);
        }
        resolve(response);
      },
    });
  });
};

export const getTemplateProp = (q = {}) => {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${host}master/getTemplateProp`,
      data: q,
      success: function (response) {
        if (response.status == "session_expired") {
          reject(response);
        }
        resolve(response);
      },
    });
  });
};

export function getVendor() {
  const vender = JSON.parse(localStorage.getItem("amecvender"));
  if (vender) {
    return new Promise((resolve) => {
      resolve(vender);
    });
  }

  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/pur/vendors/getvendors/`,
      data: { status: "1" },
      success: function (data) {
        localStorage.setItem("amecvender", JSON.stringify(data));
        resolve(data);
      },
    });
  });
}

export function getDivision(q = {}) {
  // get local storage
  const division = JSON.parse(localStorage.getItem("amecdivision"));
  if (division) {
    return new Promise((resolve) => {
      resolve(division);
    });
  }

  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/division/`,
      data: q,
      success: function (data) {
        // set local storage
        localStorage.setItem("amecdivision", JSON.stringify(data));
        resolve(data);
      },
    });
  });
}

export function getDepartment(q = {}) {
  // get local storage
  const department = JSON.parse(localStorage.getItem("amecdepartment"));
  if (department) {
    return new Promise((resolve) => {
      resolve(department);
    });
  }
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/department/`,
      data: q,
      success: function (data) {
        localStorage.setItem("amecdepartment", JSON.stringify(data));
        resolve(data);
      },
    });
  });
}

export function getSection(q = {}) {
  const section = JSON.parse(localStorage.getItem("amecsection"));
  if (section) {
    return new Promise((resolve) => {
      resolve(section);
    });
  }
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/section/`,
      data: q,
      success: function (data) {
        localStorage.setItem("amecsection", JSON.stringify(data));
        resolve(data);
      },
    });
  });
}

export function getEmployee(q = {}) {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/employee/getusers/`,
      data: q,
      success: function (data) {
        resolve(data);
      },
    });
  });
}
