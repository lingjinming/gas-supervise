"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_router_tab2 = common_vendor.resolveComponent("router-tab");
  _easycom_router_tab2();
}
const _easycom_router_tab = () => "../../components/router-tab/router-tab.js";
if (!Math) {
  _easycom_router_tab();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.hideTabBar();
    const menus = [
      {
        name: "政府界面"
      },
      {
        name: "隐患管理"
      },
      {
        name: "风险管理"
      },
      {
        name: "第三方施工管理"
      },
      {
        name: "报警管理"
      },
      {
        name: "事故事件管理"
      },
      {
        name: "检查计划管理"
      },
      {
        name: "更多分类"
      }
    ];
    const msgs = common_vendor.ref([]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menus, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.name
          };
        }),
        b: common_vendor.f(common_vendor.unref(msgs), (item, k0, i0) => {
          return {
            a: item.uid
          };
        }),
        c: common_vendor.p({
          actPath: "pages/index/index"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "/Users/wengxiaoqing/Documents/GitHub/gas-supervise/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
