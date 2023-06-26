"use strict";
const common_vendor = require("../../common/vendor.js");
const api_uaa = require("../../api/uaa.js");
require("../../api/request.js");
if (!Array) {
  const _component_van_radio = common_vendor.resolveComponent("van-radio");
  const _component_van_radio_group = common_vendor.resolveComponent("van-radio-group");
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_component_van_radio + _component_van_radio_group + _component_van_field + _component_van_cell_group + _component_van_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let loginForm = common_vendor.ref({
      grant_type: "password",
      scope: "all",
      username: "system",
      password: "Gsafety@2022"
    });
    let serverValue = common_vendor.ref("");
    let serverList = common_vendor.index.getStorageSync("SERVER_LIST");
    const login = async () => {
      common_vendor.index.setStorageSync("TOKEN_INFO", await api_uaa.getToken(loginForm.value));
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const changeServe = (e) => {
      serverValue.value = e.detail;
      let auth = serverList.filter((item) => item.region == e.detail)[0]["auth_header"];
      common_vendor.index.setStorageSync("SERVER_CONFIG", {
        name: e.detail,
        auth
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(serverList), (item, i, i0) => {
          return {
            a: common_vendor.t(item.remark),
            b: i,
            c: "45258083-1-" + i0 + ",45258083-0",
            d: common_vendor.p({
              name: item.region
            })
          };
        }),
        b: common_vendor.o(changeServe),
        c: common_vendor.p({
          value: common_vendor.unref(serverValue)
        }),
        d: common_vendor.o(($event) => common_vendor.unref(loginForm).username = $event.detail),
        e: common_vendor.p({
          value: common_vendor.unref(loginForm).username,
          label: "用户名",
          placeholder: "请输入用户名"
        }),
        f: common_vendor.o(($event) => common_vendor.unref(loginForm).password = $event.detail),
        g: common_vendor.p({
          value: common_vendor.unref(loginForm).password,
          label: "密码",
          placeholder: "请输入手机号",
          errorMessage: "手机号格式错误",
          border: false
        }),
        h: common_vendor.o(login),
        i: common_vendor.p({
          type: "primary",
          size: "large"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45258083"], ["__file", "/Users/wengxiaoqing/Documents/GitHub/uni-preset-vue/src/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
