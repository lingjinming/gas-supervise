<template>
  <image
    v-if="id"
    class="image"
    :src="src"
    mode="scaleToFill"
    @click="preview"
  />
  <text class="file-txt" @click="previewFile" v-else>{{ fileName }}</text>
</template>
<script lang="ts" setup>
import { getImg } from "@/api/img";
import { getUrl } from "@/utils";
import { userStore } from "@/state";
const store = userStore();
const region = store.auth.activeServer?.region;

const props = defineProps({
  region: {
    type: String,
    default: "test",
  },
  fileId: {
    type: String,
  },
  fileName: {
    type: String,
  },
  id: {
    type: String,
  },
  disabledPreview: {
    type: Boolean,
    default: false,
  },
});
let src = ref("");

const preview = () => {
  if (props.disabledPreview) return;
  uni.previewImage({
    urls: [src.value],
  });
};
const getImgFn = async () => {
  let urlObj = await getImg(props.id);
  uni.request({
    url: `https://aiot.citysafety.com/gasguard/preview_pic/${
      getUrl(urlObj.data).path
    }?${getUrl(urlObj.data).query}`,
    header: {
      "x-api-region": props.region || region,
    },
    responseType: "arraybuffer",
    success(res) {
      const base64 = uni.arrayBufferToBase64(res.data);
      src.value = `data:image/jpg;base64,${base64}`;
    },
  });
};
const previewFile = async () => {
  uni.showLoading({
    title:'下载中...'
  })
  let urlObj = await getImg(props.fileId);
  uni.downloadFile({
    url: `https://aiot.citysafety.com/gasguard/preview_pic/${
      getUrl(urlObj.data).path
    }?${getUrl(urlObj.data).query}`,
    header: {
      "x-api-region": props.region || region,
    },
    responseType: "arraybuffer",
    success(res) {
      console.log(res);

      uni.openDocument({
        filePath: res.tempFilePath,
        fileType: "pdf",
        success: function (res) {
          uni.hideLoading();
          console.log("打开文档成功");
        },
        fail(err) {
          uni.showModal({
            title: err.errMsg,
          });
          uni.hideLoading();
        },
      });
    },
  });
};
watch(
  () => props.id,
  (newValue) => {
    console.log("region-img newValue", newValue);
    if (newValue) {
      getImgFn();
    }
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped>
.image {
  width: 200rpx;
  height: 200rpx;
  margin-right: 30rpx;
  margin-bottom: 20rpx;
}
.file-txt{
  color: $uni-color-primary;
}
</style>
