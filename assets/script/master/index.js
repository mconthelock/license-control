import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "../../dist/css/datatable.min.css";

import $ from "jquery";
import DataTable from "datatables.net-dt";
import { host, tableOption, showLoader, toggleNavbar } from "../utils";
import { getTemplate } from "../data";

var table;
$(document).ready(async function () {
  const data = await await getTemplate();
  await createTable(data);
  await showLoader(false);
  await toggleNavbar("a.master");
});

function createTable(data) {
  const colors = [
    { id: 1, name: "neutral" },
    { id: 2, name: "primary" },
    { id: 3, name: "secondary" },
    { id: 4, name: "accent" },
    { id: 5, name: "warning" },
  ];
  const opt = { ...tableOption };
  opt.data = data;
  opt.columns = [
    {
      data: "CATE_NAME",
      title: "Category",
      render: (data, e, row) => {
        if (e == "display") {
          const color = colors.find((c) => c.id == row.CATE_ID);
          return `<div class="badge badge-${color.name}">${data}</div>`;
        }
        return data;
      },
    },
    {
      data: "SDIV",
      title: "Division",
      render: (data, e, row) => {
        if (e == "display") {
          return data.replace(" DIV.", "");
        }
        return data;
      },
    },
    {
      data: "SDEPT",
      title: "Department",
      render: (data, e, row) => {
        if (e == "display") {
          return data.replace(" DEPT.", "");
        }
        return data;
      },
    },
    {
      data: "SSEC",
      title: "Section",
      render: (data, e, row) => {
        if (e == "display") {
          return data.replace(" Sec.", "");
        }
        return data;
      },
    },
    { data: "DOCNO", title: "Control No." },
    { data: "DOCNAME", title: "Title" },
    {
      data: "DOCTERM",
      title: "Control term",
      render: (data, e, row) => {
        if (e == "display") {
          return data + " " + row.DOCTERMUNIT;
        }
        return data;
      },
    },
    { data: "DOCALERT", title: "Early alert (Day)" },
    { data: "EMPNAME", title: "Person incharge" },

    {
      data: "DOCID",
      title: "",
      sortable: false,
      render: (data, e, row) => {
        if (e == "display") {
          return `<a href="${host}/master/edit/${data}" class="btn btn-sm btn-primary shadow-md text-base-300 font-normal">
            <i class="icofont-ui-edit text-xl"></i>Edit Template
        </a>`;
        }
        return data;
      },
    },
  ];
  opt.initComplete = function () {
    $(".table-action").html(`
        <a class="btn btn-sm btn-primary shadow-md text-base-300 font-normal" href="${host}master/add/">
            <i class="icofont-close-circled rotate-45 text-xl"></i>Add Template
        </a>`);
  };
  table = new DataTable("#master-table", opt);
  return table;
}
