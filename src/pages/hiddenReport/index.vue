<template>
  <van-cell-group>
    <van-field
      :value="reportForm.remark"
      @change="reportForm.remark = $event.detail"
      label="隐患描述"
      type="textarea"
      fixed
      autosize
      placeholder="请输入"
    />
    <van-field label="位置">
      <input
        :value="reportForm.address"
        slot="input"
        readonly
        placeholder="请选择"
      />
      <text slot="right-icon" @click="chooseLocation">11</text>
    </van-field>

    <van-field
      :disabled="isOrg"
      label="上报企业"
      placeholder="请输入"
    >
      <input
        :value="reportForm.orgId"
        slot="input"
        readonly
        placeholder="请选择"
      />
      <text slot="right-icon" @click="orgIsShow = true">11</text>
    </van-field>
    <van-popup :show="orgIsShow" round position="bottom">
      <van-picker
        show-toolbar	
        title="关联燃气公司"
        :columns="planCodeColumns"
        @confirm="chooseOrg"
        @cancel="orgIsShow = false"

      />
    </van-popup>

    <van-field label="关联检查计划">
      <input
        :value="reportForm.planCode"
        slot="input"
        readonly
        placeholder="请选择"
      />
      <text slot="right-icon" @click="planCodeIsShow = true">11</text>
    </van-field>
    <van-popup :show="planCodeIsShow" round position="bottom">
      <van-picker
        show-toolbar	
        title="关联检查计划"
        :columns="planCodeColumns"
        @confirm="choosePlanCode"
        @cancel="planCodeIsShow = false"

      />
    </van-popup>

    <van-field
      label="隐患等级"
    >  <input
        :value="reportForm.level"
        slot="input"
        readonly
        placeholder="请选择"
      />
      <text slot="right-icon" @click="levelIsShow = true">11</text>
    </van-field>
    <van-popup :show="levelIsShow" round position="bottom">
      <van-picker
        show-toolbar	
        title="隐患等级"
        :columns="planCodeColumns"
        @confirm="chooseLevel"
        @cancel="levelIsShow = false"

      />
    </van-popup>

    <van-field
      is-link
      readonly
      label="隐患类别"
      placeholder="请选择"
      @click-input="dangerTypePopupIsShow = true"
    />
    <van-popup :show="dangerTypePopupIsShow" round position="bottom">
      <van-cascader
        :value="reportForm.dangerType"
        @change="reportForm.dangerType = $event.detail"
        title="请选择隐患类别"
        :options="dangerTypes"
        @close="dangerTypePopupIsShow = false"
      />
    </van-popup>

    <van-field
      :value="reportForm.checkDate"
      is-link
      readonly
      label="检查日期"
      placeholder="请选择"
      @click-input="checkDatePopupIsShow = true"
    />
    <van-popup
      :show="checkDatePopupIsShow"
      position="bottom"
      custom-style="height: 20%"
    >
      <van-datetime-picker
        :value="reportForm.checkDate"
        type="date"
        @confirm="chooseDate"
        @cancel="checkDatePopupIsShow = false"
    /></van-popup>
  </van-cell-group>

  <van-uploader
    multiple
    :max-count="3"
    accept="image"
    :file-list="fileList"
    @delete="delImg"
    @after-read="uploadImg"
  ></van-uploader>

  <van-button type="primary" block round plain @click="submit">确定</van-button>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addHidden, type req_addHidden } from "../../api/hidden";

let isOrg: boolean = true;
let dangerTypePopupIsShow = ref(false);
let checkDatePopupIsShow = ref(false);
const dangerTypes = [
  {
    text: "浙江省",
    value: "330000",
    children: [{ text: "杭州市", value: "330100" }],
  },
  {
    text: "江苏省",
    value: "320000",
    children: [{ text: "南京市", value: "320100" }],
  },
];
let planCodeColumns = ref([1, 23, 4]);
let reportForm: req_addHidden = ref({
  isOrg: isOrg,
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
  latitude: "",
});
let fileList: any = ref([]);
const delImg = (event) => {
  fileList.value.splice(event.detail.index, 1);
  // console.log(fileList);
};
const uploadImg = async (event) => {
  let SERVER_CONFIG = uni.getStorageSync("SERVER_CONFIG");

  let { file } = event.detail;
  // console.log(file);
  file.map((item) => {
    item = Object.assign(item, {
      url: file.tempFilePath,
      status: "uploading",
      message: "上传中",
    });
  });
  fileList.value = file;
  const uploadTasks = file.map((item) => {
    return new Promise((resolve) => {
      uni.uploadFile({
        url: "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/file/upload",
        filePath: item.tempFilePath,
        name: "file",
        header: {
          "x-api-region": SERVER_CONFIG.name,
          Authorization:
            "Bearer " + uni.getStorageSync("TOKEN_INFO")["access_token"],
        },
        success(res) {
          item.status = "done";
          resolve(JSON.parse(res.data));
        },
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
  addHidden(reportForm.value);
};

let levelIsShow = ref(false);
const chooseLevel = (e) => {
  levelIsShow.value = false
  console.log(e);
};

let orgIsShow = ref(false);
const chooseOrg = (e) => {
  orgIsShow.value = false
  console.log(e);
};

let planCodeIsShow = ref(false);
const choosePlanCode = (e) => {
  planCodeIsShow.value = false
  console.log(e);
};

const chooseLocation = () => {
  uni.chooseLocation({
    success: function (res) {
      reportForm.value.address = res.name + res.name;
      reportForm.value.longitude = res.longitude;
      reportForm.value.latitude = res.latitude;
    },
  });
};
</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
</style>
