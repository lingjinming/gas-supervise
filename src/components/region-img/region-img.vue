
<template>
    <image
    class="image"
    lazy-load
        :src="src"
        mode="scaleToFill"
    />
</template>
<script lang="ts" setup>
import { getImg } from "@/api/img";
import { getUrl } from "@/utils";

const props = defineProps({
    region:{
        type:String
    },
    id:{
        type:String
    }
})
let src = ref('');

onMounted(async () => {
    let urlObj = await getImg(props.id);
    console.log('urlObj',getUrl(urlObj.data))
    uni.request({
        url:`https://aiot.citysafety.com/gasguard/preview_pic/${getUrl(urlObj.data).path}?${getUrl(urlObj.data).query}`,
        header:{
            "x-api-region": props.region
        },
        responseType:'arraybuffer',
        success(res){
            const base64 = uni.arrayBufferToBase64(res.data);
            src.value = `data:image/jpg;base64,${base64}`
        }
    })
})

</script>
<style>
 .image{
      width: 200rpx;
      height: 200rpx;
      margin-right:  30rpx;
    }
</style>