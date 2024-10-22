import $ from "jquery";
import moment from "moment";

export const host = $("meta[name=base_url]").attr("content");
export const uri = $("meta[name=base_uri]").attr("content");

export function showMessage(msg, type = "error") {
  const prop = [
    {
      id: "error",
      bg: "bg-red-800",
      text: "text-white",
      title: "Processing Fail!",
    },
    { id: "success", bg: "bg-green-800", text: "text-white" },
    { id: "info", bg: "bg-blue-800", text: "text-white" },
    { id: "warning", bg: "bg-yellow-800", text: "text-white" },
  ];

  const dt = prop.find((x) => x.id == type);
  const toast = `<div class="toast toast-end z-[101] alert-message w-80 max-w-80 transition-all duration-1000">
            <div class="alert flex flex-col gap-2 overflow-hidden relative ${dt.bg}">
                <div class="msg-title text-xl font-semibold block w-full text-left ${dt.text}">${dt.title}</div>
                <div class="msg-txt block w-full text-left max-w-80 text-wrap ${dt.text}">${msg}</div>
                <div class="msg-close absolute top-2 right-5 z-[102]">
                    <i class="icofont-ui-close"></i>
                </div>
                <div class="absolute right-[-30px] top-[-10px] text-[120px] z-0 opacity-20">
                    <i class="icofont-exclamation-circle"></i>
                </div>
            </div>
        </div>
    </div>
      `;
  $(document.body).append(toast);
  setTimeout(() => {
    $(".msg-close").click();
  }, 7500);
}

export const showLoader = (val) => {
  $("#loading-box").prop("checked", val);
};

export const toggleNavbar = (cls) => {
  $("#nav-sidebar").find("a").removeClass("active");
  $("#nav-sidebar").find(cls).addClass("active");
};

export const tableOption = {
  dom: '<"flex gap-3 items-center"<"flex-1"f><"flex-none flex gap-2 table-action">>r<"bg-base-200 border rounded-lg overflow-hidden my-5"t><"flex gap-2 items-center"<"flex-1"i><"flex-none flex gap-2"l><"flex-none"p>>',
  pageLength: 25,
  autoWidth: false,
  destroy: true,
  language: {
    info: "_START_ to _END_ of _TOTAL_ row(s)",
    infoEmpty: "",
    paginate: {
      previous: '<i class="icofont-circled-left"></i>',
      next: '<i class="icofont-circled-right"></i>',
      first: '<i class="icofont-double-left"></i>',
      last: '<i class="icofont-double-right"></i>',
    },
    search: "",
    searchPlaceholder: "Search record",
    emptyTable:
      '<div class="w-full text-start md:text-center">No records available</div>',
    lengthMenu: "Rows per page _MENU_",
  },
  columnDefs: [
    {
      targets: "action",
      searchable: false,
      orderable: false,
    },
  ],
};

export const calcDate = (sdate, ndate, unit = "Day") => {
  if (ndate > 0) return moment(sdate).add(ndate, unit).format("YYYY-MM-DD");
  else
    return moment(sdate)
      .subtract(ndate * -1, unit)
      .format("YYYY-MM-DD");
};

export const populateSelect = (data, selectElement) => {
  data.forEach((item) => {
    const newOption = new Option(item.text, item.id, false, false);
    selectElement.append(newOption); //.trigger("change");
  });
};
