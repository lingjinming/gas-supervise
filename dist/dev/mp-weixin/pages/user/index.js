"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_router_tab2 = common_vendor.resolveComponent("router-tab");
  _easycom_router_tab2();
}
const _easycom_router_tab = () => "../../components/router-tab/router-tab.js";
if (!Math) {
  _easycom_router_tab();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      actPath: "pages/user/index"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wengxiaoqing/Documents/GitHub/uni-preset-vue/src/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
