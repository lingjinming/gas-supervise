<template>
  <image  v-if="isImg" class="image"  :src="imgSrc"  mode="scaleToFill" @click="previewImage" />
  <text   v-else class="file-txt" @click="previewFile">{{ fileName }}</text>
</template>
<script lang="ts" setup>
import { downloadFile} from "@/api/img";
import { getFileExt ,isImageFile} from '@/utils'
import { userStore } from "@/state";

const store = userStore();

const props = defineProps({
  // 附件id
  id: {
    type: String,
    required: true,
  },
  // 附件名称
  fileName: String,
  // 是否禁用预览
  disabledPreview: Boolean
})

// 是否是图片
const isImg = computed(() => props.id&&isImageFile(props.id))
/**
 *  后端nginx转发,不再下载之后base64了;
 *  这样的话可以支持 lazy-load
 */
const imgSrc = computed(() => {
  if(props.id) {
    let baseUrl = store.auth.activeServer?.BASE_URL;
    return `${baseUrl}/open/download/${props.id}`
  }
  return '';
});

/**
 * 预览图片
 */
const previewImage = () => {
  if (props.disabledPreview) return;
  uni.previewImage({
    urls: [imgSrc.value],
  });
};


/**
 * 预览文件
 */
const previewFile = async () => {
  if(!supportPreview()) {
    uni.showToast({
      title: "该文件暂不支持预览",
      icon: "none",
    });
    return;
  }
  const ext = getFileExt(props.fileName);
  const fileKey =  props.id
  if(fileKey) {
    uni.showLoading({ title:'下载中...' });
    downloadFile(fileKey)
    .then(path => {
      uni.openDocument({
        filePath: path,
        fileType: ext,
        success: function (res) {
          uni.hideLoading();
        },
        fail(err) {
          uni.showModal({ title: err.errMsg});
          uni.hideLoading();
        },
      });
    }).catch((e) => {
      console.log(e)
      uni.hideLoading();
      uni.showModal({ title: JSON.stringify(e)});
    })

  }

};

// doc, xls, ppt, pdf, docx, xlsx,pptx，
const supportPreview = () => {
  const supportList = ["doc", "xls", "ppt", "pdf", "docx", "xlsx", "pptx"];
  const ext = getFileExt(props.fileName);
  if(ext) {
    return  supportList.includes(ext);
  }
  return false;
}

</script>
<style lang="scss" scoped>
.image {
  width: 200rpx;
  height: 200rpx;
  margin-right: 30rpx;
  margin-bottom: 20rpx;
}
.file-txt{
  // 文本超出的时候换行
  word-break: break-all;
  white-space: normal;
  line-height: 45rpx;
  color: $uni-color-primary;
  // 每行的文字底部添加下划线
  text-decoration: underline;
}
</style>
