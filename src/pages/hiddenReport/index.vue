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

    <van-picker-new
      dicType="org"
      label="关联燃气公司"
      title="关联燃气公司"
      v-model="reportForm.orgId"
    />
    <van-picker-new
      dicType="planCode"
      label="关联检查计划"
      title="关联检查计划"
      v-model="reportForm.planCode"
      :orgId="reportForm.orgId"
    />
    <van-picker-new
      dicType="RISK_DANGER_LEVEL"
      label="隐患等级"
      title="隐患等级"
      v-model="reportForm.level"
    />
    <van-cascader-new
      dicType="RISK_SUBJECT_TYPE_TREE"
      label="隐患类别"
      title="隐患类别"
      v-model="reportForm.dangerType"
      v-model:subjectType="reportForm.subjectType"
    />

    <van-field
      is-link
      label="检查日期"
      @click-input="checkDatePopupIsShow = true"
    >
      <input
        :value="reportForm.checkDate"
        slot="input"
        readonly
        placeholder="请选择"
      />
    </van-field>
    <van-popup
      :show="checkDatePopupIsShow"
      position="bottom"
      custom-style="height: 20%"
    >
      <van-datetime-picker
        :min-date="minDate"
        :max-date="maxDate"
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
import { formatDate } from "@/utils";

let isOrg: boolean = true;
let checkDatePopupIsShow = ref(false);

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

const minDate = ref(new Date().getTime());
const maxDate = ref(new Date(2099, 10, 1).getTime());
const chooseDate = (e) => {
  checkDatePopupIsShow.value = false;
  reportForm.value.checkDate = formatDate(e.detail);
};

const submit =async () => {
  let data =  await addHidden(reportForm.value);
  uni.showToast({
    title:data.message,
    duration:3000,
    complete(){
      uni.navigateBack()

    }
  })

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
