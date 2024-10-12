import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "../../dist/css/datatable.min.css";
import DataTable from "datatables.net-dt";
import $ from "jquery";
import { host, tableOption, showLoader, toggleNavbar } from "../utils";

var table;
$(document).ready(async function () {
  await createTable([]);
  await showLoader(false);
  await toggleNavbar("a.master");
});

function createTable(data) {
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
    $(".table-action").html(`
        <a class="btn btn-sm btn-primary shadow-md text-base-300 font-normal" href="${host}/master/add/">
            <i class="icofont-close-circled rotate-45 text-xl"></i>Add Template
        </a>`);
  };
  table = new DataTable("#master-table", opt);
  return table;
}
