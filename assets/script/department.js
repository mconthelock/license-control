import $ from "jquery";
import { getDivision, getDepartment, getSection } from "./data";
export async function setDivision(div) {
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

export async function setDepartment(div) {
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

export function changeDepartment(dept) {
  $("#ownersec")
    .find("option")
    .map((i, el) => {
      const deptcode = $(el).val().substring(0, 4);
      if (deptcode == dept.substring(0, 4) || deptcode == "00")
        $(el).removeClass("hidden");
      else $(el).addClass("hidden");
    });
  $("#ownersec").val("00");
}

export async function setSection(dept) {
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
