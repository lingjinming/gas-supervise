"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const api_uaa = require("./api/uaa.js");
require("./api/request.js");
if (!Math) {
  "./pages/login/index.js";
  "./pages/hiddenReport/index.js";
  "./pages/index/index.js";
  "./pages/hidden/index.js";
  "./pages/notice/index.js";
  "./pages/user/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(async () => {
      common_vendor.index.setStorageSync("SERVER_LIST", (await api_uaa.getConfig())["regions"]);
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/wengxiaoqing/Documents/GitHub/gas-supervise/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
