"use strict";
const common_vendor = require("../../common/vendor.js");
const tabBar = {
  list: [
    {
      pagePath: "pages/index/index",
      text: "首页"
    },
    {
      pagePath: "pages/user/index",
      text: "我的"
    }
  ]
};
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "uni-app",
  navigationBarBackgroundColor: "#F8F8F8",
  backgroundColor: "#F8F8F8",
  usingComponents: {
    "van-button": "wxcomponents/vant/button/index",
    "van-cell-group": "wxcomponents/vant/cell-group/index",
    "van-field": "wxcomponents/vant/field/index",
    "van-picker": "wxcomponents/vant/picker/index",
    "van-picker-column": "wxcomponents/vant/picker-column/index",
    "van-swipe-cell": "wxcomponents/vant/swipe-cell/index",
    "van-radio": "wxcomponents/vant/radio/index",
    "van-radio-group": "wxcomponents/vant/radio-group/index",
    "van-uploader": "wxcomponents/vant/uploader/index",
    "van-datetime-picker": "wxcomponents/vant/datetime-picker/index",
    "van-popup": "wxcomponents/vant/popup/index",
    "van-cascader": "wxcomponents/vant/cascader/index"
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "router-tab",
  props: {
    actPath: {
      type: String
    }
  },
  setup(__props) {
    let switchTab = (route) => {
      common_vendor.index.switchTab({
        url: `/${route.pagePath}`
      });
    };
    let routeToHiddenReport = () => {
      common_vendor.index.navigateTo({
        url: "/pages/hiddenReport/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(tabBar).list, (route, k0, i0) => {
          return {
            a: common_vendor.t(route.text),
            b: route.pagePath,
            c: route.pagePath == __props.actPath ? 1 : "",
            d: common_vendor.o(($event) => common_vendor.unref(switchTab)(route), route.pagePath)
          };
        }),
        b: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(routeToHiddenReport) && common_vendor.unref(routeToHiddenReport)(...args)
        ),
        c: common_vendor.unref(globalStyle).navigationBarBackgroundColor
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-660758ae"], ["__file", "/Users/wengxiaoqing/Documents/GitHub/uni-preset-vue/src/components/router-tab/router-tab.vue"]]);
wx.createComponent(Component);
