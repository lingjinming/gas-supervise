<template>
  <view class="container">
    <van-cell-group>
      <van-field
        :value="reportForm.handleContent"
        @change="reportForm.handleContent = $event.detail"
        label="隐患描述"
        type="textarea"
        fixed
        autosize
        placeholder="请输入"
      />

      <van-field
        is-link
        label="整改日期"
        @click-input="handleDatePopupIsShow = true"
      >
        <input
          :value="reportForm.handleDate"
          slot="input"
          placeholder="请选择"
        />
      </van-field>
      <van-popup
        :show="handleDatePopupIsShow"
        position="bottom"
        custom-style="height: 20%"
      >
        <van-datetime-picker
          :min-date="minDate"
          :max-date="maxDate"
          :value="reportForm.handleDate"
          type="date"
          @confirm="chooseDate"
          @cancel="handleDatePopupIsShow = false"
      /></van-popup>
    </van-cell-group>

    <view class="uploader-box">
      <text>上传照片</text>
      <van-uploader
        multiple
        :max-count="3"
        accept="image"
        :file-list="fileList"
        @delete="delImg"
        @after-read="uploadImg"
      ></van-uploader>
    </view>

    <van-button type="primary" size="large" round plain @click="submit"
      >确定</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addHidden, reformHidangerById, type req_addHidden } from "../../api/hidden";
import { formatDate } from "@/utils";




let handleDatePopupIsShow = ref(false);

let reportForm = ref({
  uid:'',
  handleContent: "",
  handleDate: "",
  fileIds: [],
});
let fileList: any = ref([]);

onLoad(options => {
  reportForm.value.uid = options.uid
})

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
  });
};

const minDate = ref(new Date().getTime());
const maxDate = ref(new Date(2099, 10, 1).getTime());
const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = formatDate(e.detail);
};

const submit = async () => {
  if (fileList.value.length) {
    reportForm.value.fileIds = [];
    fileList.value.forEach((file) => {
      reportForm.value.fileIds.push(file.objectName);
    });
  }
  let data = await reformHidangerById(reportForm.value);

  data.success &&
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
};


</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
</style>
