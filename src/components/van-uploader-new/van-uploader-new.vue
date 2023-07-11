<template>
  <view class="uploader-box">
    <text>上传照片(最多3张)</text>
    <van-uploader
      multiple
      :max-count="3"
      accept="image"
      :file-list="fileList"
      @delete="delImg"
      @after-read="uploadImg"
    >
      <view class="btn">
        <van-icon name="plus" size="50px" color="#efefef"></van-icon>
      </view>
    </van-uploader>
  </view>
</template>
<script lang="ts" setup>
import { userStore } from "@/state";

const store = userStore();
let fileList: any = ref([]);
let fileIds = ref([]);
const emits = defineEmits(["update:modelValue"]);

const delImg = (event) => {
  let temp = JSON.parse(JSON.stringify(fileList.value));
  temp.splice(event.detail.index, 1);
  fileIds.value.splice(event.detail.index, 1);

  fileList.value = temp;
  console.log(fileList.value);
};


const uploadImg = async (event) => {

  // 当前激活的服务器
  const server = store.auth.activeServer;
  const token = store.auth.token;

  let { file } = event.detail;

  fileList.value = fileList.value.concat(file);
  console.log('fileList.value-->',fileList.value)

  const uploadTasks = file.map((item,i) => {
    item.status = 'uploading'
    return new Promise((resolve) => {
      uni.uploadFile({
        url: "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/file/upload",
        filePath: item.tempFilePath,
        name: "file",
        header: {
          "x-api-region": server?.region,
          Authorization: "Bearer " + token?.access_token,
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
      fileIds.value.push(item.data.objectName);
    });
    fileList.value = JSON.parse(JSON.stringify(fileList.value))
    emits("update:modelValue", fileIds.value);
  });
};
</script>

<style lang="scss" scoped>
.uploader-box {
  display: flex;
  gap: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  background: #fff;
  flex-direction: column;
  text {
    @include label;
  }
  .btn {
    width: 200rpx;
    height: 200rpx;
    background: #f6f6f6;
    border: 2rpx solid #efefef;
    @include flex-center;
  }
}
</style>
