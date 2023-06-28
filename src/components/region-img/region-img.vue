
<template>
    <image
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
    console.log('urlObj',urlObj)
    console.log('urlObj',getUrl(urlObj.data))
    
    // uni.request({
    //     url:'https://aiot.citysafety.com/gasguard/preview_pic'+  urlObj.pathname +
    //   urlObj.search,
    //     header:{
    //         "x-api-region": props.region
    //     },
    //     responseType:'arraybuffer',
    //     success(res){
    //         let blob = res.data
    //         console.log('blob',blob)

    //         src.value = URL.revokeObjectURL(URL.createObjectURL(blob));
    //     }
    // })
})


// const RegionImg = defineComponent({

//   setup: async (props) => {
//     //  请求燃气后端,根据附件id,获取预览地址
//     let urlObj = await fetch(
//       "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/open/file/" +
//         props.imgId,
//       {
//         method: "GET",
//         headers: {
//           "x-api-region": props.region,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => new URL(json.data));
//     // 替换预览地址host,从燃气云代理访问
//     const proxyImgUrl =
//       "https://aiot.citysafety.com/gasguard/preview_pic" +
//       urlObj.pathname +
//       urlObj.search;
//     // 特殊处理请求静态资源时携带 x-api-region请求头
//     const url = ref();
//     fetch(proxyImgUrl, {
//       method: "GET",
//       headers: { "x-api-region": props.region },
//     })
//       .then((res) => res.blob())
//       .then((blob) => {
//         url.value = URL.createObjectURL(blob);
//       });
//     return () =>
//       h("image", {
//         src: url.value,
//         onload: () => URL.revokeObjectURL(url.value),
//       });
//   },
// });

</script>