import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "../../style/main.css";
import DataTable from "datatables.net-dt";

import $ from "jquery";
import { host, showLoader, tableOption } from "../utils";

var table;
$(document).ready(async function () {
  const data = [
    {
      docno: 1,
      title: "Jig yearly inspection",
      startdate: "2022-01-01",
      expireddate: "2022-01-01",
      status: "Active",
      pic: "Chalormsak (12069)",
      provider: "Thai Wodering Co., Ltd.",
    },
    {
      docno: 2,
      title: "Bottom sprocket ass'y jig",
      startdate: "2022-01-01",
      expireddate: "2022-01-01",
      status: "Active",
      pic: "Chalormsak (12069)",
      provider: "MC technos Co.,Ltd.",
    },
    {
      docno: 3,
      title: "Buffer stand auto welding machine",
      startdate: "2022-01-01",
      expireddate: "2022-01-01",
      status: "Active",
      pic: "Chalormsak (12069)",
      provider: "THAI ESCORP",
    },
  ];
  await createTable(data);
  await showLoader(false);
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
    $(".table-action").html(
      `<a class="btn btn-secondary btn-sm shadow-md" href="${host}/licenses/add/">
        <i class="icofont-close-circled rotate-45 text-xl"></i>Add New
        </a>`
    );
  };
  table = new DataTable("#licenses-table", opt);
  return table;
}
