import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "../../dist/css/datatable.min.css";
import DataTable from "datatables.net-dt";

import $ from "jquery";
import { host, showLoader, tableOption, toggleNavbar } from "../utils";
import { getTemplate } from "../data";

var table;
$(document).ready(async function () {
  const data = [];
  const list = await getTemplate();
  await createTable(data, list);
  await toggleNavbar("a.license");
  await showLoader(false);
});

function createTable(data, list) {
  const opt = { ...tableOption };
  opt.data = data;
  opt.columns = [
    { data: "docno", title: "Control No." },
    { data: "title", title: "Title" },
    { data: "startdate", title: "Start Date" },
    { data: "expireddate", title: "Expired Date" },
    { data: "status", title: "Status" },
    { data: "pic", title: "Person In-charge" },
    { data: "provider", title: "Provider" },
    { data: "docno", title: "", sortable: false },
  ];

  opt.initComplete = function () {
    let temp = ``;
    list.forEach((element) => {
      temp += `<li><a href="${host}licenses/add/${element.DOCID}">${element.PREFIX}</a></li>`;
    });

    if (temp != "") temp = `<div class="divider !m-0"></div>${temp}`;
    $(".table-action").html(`
        <details class="dropdown">
            <summary class="btn btn-sm btn-primary shadow-md text-base-300 font-normal m-1"><i class="icofont-close-circled rotate-45 text-xl"></i> Add New</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow border">
                <li><a href="${host}/licenses/add/">New License</a></li>
                ${temp}
            </ul>
        </details>
        <a class="btn btn-sm btn-secondary shadow-md font-normal m-1" href="${host}/licenses/add/">
            <i class="icofont-arrow-down text-xl"></i>Export
        </a>`);
  };
  table = new DataTable("#licenses-table", opt);
  return table;
}
