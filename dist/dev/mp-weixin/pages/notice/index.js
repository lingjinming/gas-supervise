"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_notice2 = common_vendor.resolveComponent("notice");
  _easycom_notice2();
}
const _easycom_notice = () => "../../components/notice/notice.js";
if (!Math) {
  _easycom_notice();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/wengxiaoqing/Documents/GitHub/gas-supervise/src/pages/notice/index.vue"]]);
wx.createPage(MiniProgramPage);
