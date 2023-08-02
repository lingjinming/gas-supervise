<template>
  <image class="image" :src="src" mode="scaleToFill" @click="preview" />
</template>
<script lang="ts" setup>
import { getImg } from "@/api/img";
import { getUrl } from "@/utils";

const props = defineProps({
  region: {
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
  !props.disabledPreview &&
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
      "x-api-region": props.region,
    },
    responseType: "arraybuffer",
    success(res) {
      const base64 = uni.arrayBufferToBase64(res.data);
      src.value = `data:image/jpg;base64,${base64}`;
    },
  });
};
watch(() => props.id, (newValue) => {
  console.log('region-img newValue',newValue)
  if (newValue) {
    getImgFn();
  }
},{immediate:true});

// onShow( () => {
//   console.log('region-img onShow')
//   getImgFn()
// });


</script>
<style>
.image {
  width: 200rpx;
  height: 200rpx;
  margin-right: 30rpx;
  margin-bottom: 20rpx;
}
</style>
