<template>
  <image
    v-if="id"
    class="image"
    :src="src"
    mode="scaleToFill"
    @click="preview"
  />
  <text class="file-txt" @click="previewFile" v-else>{{ formatterFilename(fileName) }}</text>
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

/**
 * 对于过长的文件名,导致看不见后缀
 * 这里限制文件名称最多10个字符,超过的话,就删除前面的字符,只保留后面的字符
 * @param fileName 文件名
 */
const formatterFilename = (fileName: string|undefined) => {
  if(fileName) {
    if (fileName.length > 20) {
      return fileName.slice(fileName.length - 20);
    }
    return fileName;
  }
  return ''
  
}

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

// doc, xls, ppt, pdf, docx, xlsx,pptx，
const supportPreview = () => {
  const supportList = ["doc", "xls", "ppt", "pdf", "docx", "xlsx", "pptx"];
  const ext = getFileExt();
  if(ext) {
    return  supportList.includes(ext);
  }
  return false;
}

const getFileExt = () => {
  if(props.fileName) {
    const suffix = props.fileName.split(".").pop();
    if(suffix) {
      return  suffix;
    }
  }
  return "";
}

const previewFile = async () => {
  if(!supportPreview()) {
    uni.showToast({
      title: "该文件暂不支持预览",
      icon: "none",
    });
    return;
  }
  const ext = getFileExt();
  if(props.fileId) {
    uni.showLoading({ title:'下载中...' });
    downloadFile(props.fileId)
    .then(path => {
      uni.openDocument({
        filePath: path,
        fileType: ext,
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
