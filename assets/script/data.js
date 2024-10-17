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
