<template>
  <view
    class="route-wrap"
    :style="{ background: globalStyle.navigationBarBackgroundColor }"
  >
    <view
      class="tab"
      v-for="route in tabBar.list"
      :key="route.pagePath"
      :class="{ act: route.pagePath == actPath }"
      @click="switchTab(route)"
      >
        <view class="routeItem"><image
          :src="route.pagePath == actPath ? route.selectedIconPath : route.iconPath"
          class="mainBtn"
        /></view>
        <view class="routeItem"><text>{{ route.text }}</text></view> 
      </view
    >
    <view hover-class="hover"	 class="midBtn" @click="show = true">
      <image src="/static/img/icon_add.png" class="photo"></image>
    </view>
  </view>

  
  <gas-action-sheet
    :show="show"
    :actions="functions"
    cancel-text="取消"
    @click-overlay="cancel"
    @cancel="cancel"
    @select="onSelect"
  />
</template>

<script setup lang="ts">
import { ref ,computed} from "vue";
import { tabBar, globalStyle } from "../../../pages.json";
import { userStore } from "@/state";
const store =  userStore()

const show = ref(false)
let  props = defineProps({
  actPath:{
    type:String
  }
});
let actions = [
      // {
      //   name: '创建检查计划',
      //   url:'/pages/check/pages/CheckPlanCreatePage',
      //   optType: ['gov']
      // },
      {
        name: '第三方施工上报',
        optType: ['gov','org'],
        url: '/pages/thirdBuild/pages/thirdBuildFormPage'
      },
      // {
      //   name: '隐患上报',
      //   optType: ['org','gov'],
      //   url: '/pages/hidden/pages/HiddenReportPage'
      // },
      {
        name: '事故事件上报',
        optType: ['org','gov'],
        url: '/pages/accident/pages/AccidentEditPage'
      }
    ]
const functions = computed(() => {
  return actions.filter(act => act.optType.includes(store.isGovUser?'gov':'org'))
})
let switchTab = (route: any) => {
  uni.switchTab({
    url:`/${route.pagePath}`
  })
};


const cancel = () => {
  show.value = false;
}
const onSelect = (v) => {
  show.value=false;
  const url = v.url;
  uni.navigateTo({url})
}
</script>

<style lang="scss" scoped>
.route-wrap {
  position: fixed;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  right: 0;
  height: $router-tab-height;
  padding-top: 20rpx;
  line-height: $router-tab-height;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 1px $uni-bg-color;
  .tab{
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .routeItem{
    height: 42rpx;
    line-height: 42rpx;
  }
  .act{
    color: $uni-color-primary;
  }
  .mainBtn{
    width: 42rpx;
    height: 42rpx;
    line-height: 42rpx;
  }
  .midBtn{
    position: absolute;
    z-index: 999;
    left: 50%;
    top: -10rpx;
    transform: translateX(-50%);
  }
  .photo{
    width: 125rpx;
    height: 133rpx;
  }

}
</style>
