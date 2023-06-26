"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_hidden2 = common_vendor.resolveComponent("hidden");
  _easycom_hidden2();
}
const _easycom_hidden = () => "../../components/hidden/hidden.js";
if (!Math) {
  _easycom_hidden();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5afab1a9"], ["__file", "/Users/wengxiaoqing/Documents/GitHub/uni-preset-vue/src/pages/hidden/index.vue"]]);
wx.createPage(MiniProgramPage);
