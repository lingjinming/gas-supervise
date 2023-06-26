"use strict";
const common_vendor = require("../../common/vendor.js");
const api_hidden = require("../../api/hidden.js");
require("../../api/request.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  const _component_van_cascader = common_vendor.resolveComponent("van-cascader");
  const _component_van_datetime_picker = common_vendor.resolveComponent("van-datetime-picker");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_uploader = common_vendor.resolveComponent("van-uploader");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_component_van_field + _component_van_picker + _component_van_popup + _component_van_cascader + _component_van_datetime_picker + _component_van_cell_group + _component_van_uploader + _component_van_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let isOrg = true;
    let dangerTypePopupIsShow = common_vendor.ref(false);
    let checkDatePopupIsShow = common_vendor.ref(false);
    const dangerTypes = [
      {
        text: "浙江省",
        value: "330000",
        children: [{ text: "杭州市", value: "330100" }]
      },
      {
        text: "江苏省",
        value: "320000",
        children: [{ text: "南京市", value: "320100" }]
      }
    ];
    let planCodeColumns = common_vendor.ref([1, 23, 4]);
    let reportForm = common_vendor.ref({
      isOrg,
      remark: "",
      address: "",
      orgId: "",
      level: "",
      checkDate: "",
      planCode: "",
      subjectType: "",
      dangerType: "",
      fileIds: [],
      longitude: "",
      latitude: ""
    });
    let fileList = common_vendor.ref([]);
    const delImg = (event) => {
      fileList.value.splice(event.detail.index, 1);
    };
    const uploadImg = async (event) => {
      let SERVER_CONFIG = common_vendor.index.getStorageSync("SERVER_CONFIG");
      let { file } = event.detail;
      file.map((item) => {
        item = Object.assign(item, {
          url: file.tempFilePath,
          status: "uploading",
          message: "上传中"
        });
      });
      fileList.value = file;
      const uploadTasks = file.map((item) => {
        return new Promise((resolve) => {
          common_vendor.index.uploadFile({
            url: "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/file/upload",
            filePath: item.tempFilePath,
            name: "file",
            header: {
              "x-api-region": SERVER_CONFIG.name,
              Authorization: "Bearer " + common_vendor.index.getStorageSync("TOKEN_INFO")["access_token"]
            },
            success(res) {
              item.status = "done";
              resolve(JSON.parse(res.data));
            }
          });
        });
      });
      Promise.all(uploadTasks).then((data) => {
        data.map((item, i) => {
          file[i] = Object.assign(file[i], item.data);
        });
        fileList.value = JSON.parse(JSON.stringify(file));
        console.log(fileList);
      });
    };
    const chooseDate = (val) => {
      checkDatePopupIsShow.value = false;
      console.log(val);
    };
    const submit = () => {
      console.log(reportForm);
      console.log(fileList.value);
      api_hidden.addHidden(reportForm.value);
    };
    let levelIsShow = common_vendor.ref(false);
    const chooseLevel = (e) => {
      levelIsShow.value = false;
      console.log(e);
    };
    let orgIsShow = common_vendor.ref(false);
    const chooseOrg = (e) => {
      orgIsShow.value = false;
      console.log(e);
    };
    let planCodeIsShow = common_vendor.ref(false);
    const choosePlanCode = (e) => {
      planCodeIsShow.value = false;
      console.log(e);
    };
    const chooseLocation = () => {
      common_vendor.index.chooseLocation({
        success: function(res) {
          reportForm.value.address = res.name + res.name;
          reportForm.value.longitude = res.longitude;
          reportForm.value.latitude = res.latitude;
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(reportForm).remark = $event.detail),
        b: common_vendor.p({
          value: common_vendor.unref(reportForm).remark,
          label: "隐患描述",
          type: "textarea",
          fixed: true,
          autosize: true,
          placeholder: "请输入"
        }),
        c: common_vendor.unref(reportForm).address,
        d: common_vendor.o(chooseLocation),
        e: common_vendor.p({
          label: "位置"
        }),
        f: common_vendor.unref(reportForm).orgId,
        g: common_vendor.o(($event) => common_vendor.isRef(orgIsShow) ? orgIsShow.value = true : orgIsShow = true),
        h: common_vendor.p({
          disabled: common_vendor.unref(isOrg),
          label: "上报企业",
          placeholder: "请输入"
        }),
        i: common_vendor.o(chooseOrg),
        j: common_vendor.o(($event) => common_vendor.isRef(orgIsShow) ? orgIsShow.value = false : orgIsShow = false),
        k: common_vendor.p({
          showToolbar: true,
          title: "关联燃气公司",
          columns: common_vendor.unref(planCodeColumns)
        }),
        l: common_vendor.p({
          show: common_vendor.unref(orgIsShow),
          round: true,
          position: "bottom"
        }),
        m: common_vendor.unref(reportForm).planCode,
        n: common_vendor.o(($event) => common_vendor.isRef(planCodeIsShow) ? planCodeIsShow.value = true : planCodeIsShow = true),
        o: common_vendor.p({
          label: "关联检查计划"
        }),
        p: common_vendor.o(choosePlanCode),
        q: common_vendor.o(($event) => common_vendor.isRef(planCodeIsShow) ? planCodeIsShow.value = false : planCodeIsShow = false),
        r: common_vendor.p({
          showToolbar: true,
          title: "关联检查计划",
          columns: common_vendor.unref(planCodeColumns)
        }),
        s: common_vendor.p({
          show: common_vendor.unref(planCodeIsShow),
          round: true,
          position: "bottom"
        }),
        t: common_vendor.unref(reportForm).level,
        v: common_vendor.o(($event) => common_vendor.isRef(levelIsShow) ? levelIsShow.value = true : levelIsShow = true),
        w: common_vendor.p({
          label: "隐患等级"
        }),
        x: common_vendor.o(chooseLevel),
        y: common_vendor.o(($event) => common_vendor.isRef(levelIsShow) ? levelIsShow.value = false : levelIsShow = false),
        z: common_vendor.p({
          showToolbar: true,
          title: "隐患等级",
          columns: common_vendor.unref(planCodeColumns)
        }),
        A: common_vendor.p({
          show: common_vendor.unref(levelIsShow),
          round: true,
          position: "bottom"
        }),
        B: common_vendor.o(($event) => common_vendor.isRef(dangerTypePopupIsShow) ? dangerTypePopupIsShow.value = true : dangerTypePopupIsShow = true),
        C: common_vendor.p({
          isLink: true,
          readonly: true,
          label: "隐患类别",
          placeholder: "请选择"
        }),
        D: common_vendor.o(($event) => common_vendor.unref(reportForm).dangerType = $event.detail),
        E: common_vendor.o(($event) => common_vendor.isRef(dangerTypePopupIsShow) ? dangerTypePopupIsShow.value = false : dangerTypePopupIsShow = false),
        F: common_vendor.p({
          value: common_vendor.unref(reportForm).dangerType,
          title: "请选择隐患类别",
          options: dangerTypes
        }),
        G: common_vendor.p({
          show: common_vendor.unref(dangerTypePopupIsShow),
          round: true,
          position: "bottom"
        }),
        H: common_vendor.o(($event) => common_vendor.isRef(checkDatePopupIsShow) ? checkDatePopupIsShow.value = true : checkDatePopupIsShow = true),
        I: common_vendor.p({
          value: common_vendor.unref(reportForm).checkDate,
          isLink: true,
          readonly: true,
          label: "检查日期",
          placeholder: "请选择"
        }),
        J: common_vendor.o(chooseDate),
        K: common_vendor.o(($event) => common_vendor.isRef(checkDatePopupIsShow) ? checkDatePopupIsShow.value = false : checkDatePopupIsShow = false),
        L: common_vendor.p({
          value: common_vendor.unref(reportForm).checkDate,
          type: "date"
        }),
        M: common_vendor.p({
          show: common_vendor.unref(checkDatePopupIsShow),
          position: "bottom",
          customStyle: "height: 20%"
        }),
        N: common_vendor.o(delImg),
        O: common_vendor.o(uploadImg),
        P: common_vendor.p({
          multiple: true,
          maxCount: 3,
          accept: "image",
          fileList: common_vendor.unref(fileList)
        }),
        Q: common_vendor.o(submit),
        R: common_vendor.p({
          type: "primary",
          block: true,
          round: true,
          plain: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-95dab9eb"], ["__file", "/Users/wengxiaoqing/Documents/GitHub/gas-supervise/src/pages/hiddenReport/index.vue"]]);
wx.createPage(MiniProgramPage);
