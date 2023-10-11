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
import { downloadFile,loadFileBase64} from "@/api/img";
import { userStore } from "@/state";

const store = userStore();
const region = store.auth.activeServer?.region;

let src = ref("");
const props = defineProps({
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


const preview = () => {
  if (props.disabledPreview) return;
  uni.previewImage({
    urls: [src.value],
  });
};
const getImgFn = async () => {
  if(props.id) {
    const base64 = await loadFileBase64(props.id)
    src.value = `data:image/jpg;base64,${base64}`;
  }
};
const previewFile = async () => {
  if(props.fileId) {
    uni.showLoading({ title:'下载中...' });
    downloadFile(props.fileId)
    .then(path => {
      uni.openDocument({
        filePath: path,
        fileType: "pdf",
        success: function (res) {
          uni.hideLoading();
        },
        fail(err) {
          uni.showModal({
            title: err.errMsg,
          });
          uni.hideLoading();
        },
      });
    }).catch(() => {
      uni.hideLoading();
    })

  }

};
watch(
  () => props.id,
  (newValue) => {
    console.log("region-img newValue", newValue);
    if (newValue && 'null' !== newValue) {
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
