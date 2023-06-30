<template>
  <view class="uploader-box">
    <text>上传照片</text>
    <van-uploader
      multiple
      :max-count="3"
      accept="image"
      :file-list="fileList"
      @delete="delImg"
      @after-read="uploadImg"
    >
      <van-button icon="photo" plain type="default">最多3张</van-button>
    </van-uploader>
  </view>
</template>
<script lang="ts" setup>

let fileList: any = ref([]);

const emits = defineEmits(["update:modelValue"]);

const delImg = (event) => {
    let temp = JSON.parse(JSON.stringify(fileList.value))
    temp.splice(event.detail.index, 1);
    fileList.value = temp
  console.log(fileList.value);
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
          "x-api-region": SERVER_CONFIG.value,
          Authorization:
            "Bearer " + uni.getStorageSync("AUTH_TOKEN")["access_token"],
        },
        success(res) {
          item.status = "done";
          resolve(JSON.parse(res.data));
        },
      });
    });
  });
  Promise.all(uploadTasks).then((data) => {
    let fileIds = [];
    data.map((item, i) => {
      file[i] = Object.assign(file[i], item.data);
      fileIds.push(item.data.objectName);
    });
    fileList.value = JSON.parse(JSON.stringify(file));

    emits("update:modelValue", fileIds);
  });
};
</script>

<style lang="scss" scoped>
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  background: #fff;
  text {
    @include label;
  }
}
</style>
