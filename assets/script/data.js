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

export function getDivision(q = {}) {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/division/`,
      data: q,
      success: function (data) {
        resolve(data);
      },
    });
  });
}

export function getDepartment(q = {}) {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/department/`,
      data: q,
      success: function (data) {
        resolve(data);
      },
    });
  });
}

export function getSection(q = {}) {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${uri}/webservice/api/webflow/organization/section/`,
      data: q,
      success: function (data) {
        resolve(data);
      },
    });
  });
}
