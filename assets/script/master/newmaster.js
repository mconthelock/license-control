// 001. Add Prop: Click add prop button
// 002. Add Alert to: Click add alert button
import $ from "jquery";
import { host, showLoader, toggleNavbar } from "../utils";

$(document).ready(async function () {
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

// 001. Add Prop
$(document).on("click", "#addprop", function (e) {
  e.preventDefault();
  $("#prop").append(`
    <div class="flex flex-col gap-2 mb-2 prop-row">
        <div class="flex items-center gap-2">
            <input type="text" name="prop[]" class="input input-bordered w-full max-w-xs" placeholder="Property Name">
            <select class="select select-bordered w-full max-w-xs proptype" name="proptype[]">
                <option disabled selected>Property Type</option>
                <option value="text">Text</option>
                <option value="date">Date</option>
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
  console.log(row.find(".prop-option").length);
  if (row.find(".prop-option").length == 0) {
    row.find(".proptype").val("text");
  }
});

// 002. Add Alert to
$(document).on("click", "#addmember", function (e) {
  e.preventDefault();
  $("#member").append(`<div class="flex items-center gap-2">
          <input type="text" name="prop[]" class="input input-bordered w-1/3" placeholder="Emp No.">
          <input type="text" name="propval[]" class="input input-bordered w-full max-w-xs" placeholder="Emp Name" readonly>
          <button class="btn btn-ghost btn-circle" id="removeprop"><i class="icofont-ui-close"></i></button>
      </div>`);
});

$(document).on("submit", "#addtemplate", function (e) {
  e.preventDefault();
  const data = $(this).serializeArray();
  //console.log(data);
});
