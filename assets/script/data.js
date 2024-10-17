import $ from "jquery";
import { host, uri } from "./utils";

export const getTemplate = (q = {}) => {
  return new Promise((resolve) => {
    $.ajax({
      type: "post",
      dataType: "json",
      url: `${host}master/getTemplate`,
      data: q,
      success: function (response) {
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
