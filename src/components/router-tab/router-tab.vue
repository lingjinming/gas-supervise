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
      >{{ route.text }}</view
    >
    <view class="midBtn" @click="routeToHiddenReport"></view>
  </view>
</template>

<script setup lang="ts">
import { tabBar, globalStyle } from "../../pages.json";
let  props = defineProps({
  actPath:{
    type:String
  }
});
let switchTab = (route: any) => {
  uni.switchTab({
    url:`/${route.pagePath}`
  })
};

let routeToHiddenReport = () => {
  uni.navigateTo({
  url:'/pages/hiddenReport/index'
})
}
</script>

<style lang="scss" scoped>
.route-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  line-height: 120rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 1px $uni-bg-color;
  .tab{
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .act{
    color: $uni-color-primary;
  }

  .midBtn{
    position: absolute;
    z-index: 999;
    left: 50%;
    top: -10rpx;
    transform: translateX(-50%);
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    box-shadow: -6rpx 8rpx 10rpx red;
  }
}
</style>
