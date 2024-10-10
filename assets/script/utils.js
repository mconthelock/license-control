import $ from "jquery";
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
  const toast = `<div class="toast toast-end z-[50] alert-message w-80 max-w-80 transition-all duration-1000">
            <div class="alert flex flex-col gap-2 overflow-hidden relative ${dt.bg}">
                <div class="msg-title text-xl font-semibold block w-full text-left ${dt.text}">${dt.title}</div>
                <div class="msg-txt block w-full text-left max-w-80 text-wrap ${dt.text}">${msg}</div>
                <div class="msg-close absolute top-2 right-5 z-10">
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
  }, 1000);
}

export const showLoader = (val) => {
  $("#loading-box").prop("checked", val);
};