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
        maxlength="200"
      />

      <van-field
        is-link
        label="整改日期"
        @click-input="handleDatePopupIsShow = true"
      >
        <input
          :value="reportForm.handleDate"
          slot="input"
          disabled
          style="width: 100%;"
          placeholder="请选择"
        />
      </van-field>
      <van-calendar
        :show="handleDatePopupIsShow"
        @close="handleDatePopupIsShow = false"
        @confirm="chooseDate"
      />
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
import { formatDate} from "@/utils";

let checkDate = ref(0)
let handleDatePopupIsShow = ref(false);

let reportForm = ref({
  uid:'',
  handleContent: "",
  handleDate: "",
  picIds: [],
});
let fileList: any = ref([]);

onLoad(options => {
  reportForm.value.uid = options.uid
  checkDate.value = new Date(options.checkDate).getTime()
  reportForm.value.handleDate = formatDate(new Date())
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

const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = formatDate(e.detail);
};

const submit = async () => {
  if(new Date(reportForm.value.handleDate).getTime() - new Date(checkDate.value).getTime() < 0){
    uni.showToast({
      icon:'none',
      title:'整改日期应在排查日期之后'
    })
  }
  if (fileList.value.length) {
    reportForm.value.picIds = [];
    fileList.value.forEach((file) => {
      reportForm.value.picIds.push(file.objectName);
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
