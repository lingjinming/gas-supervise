<template>
  <view class="wrapper">

    <view class="text">
      <view>燃气安全监管</view>
      <view>
        <van-loading size="24px">加载中...</van-loading>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { userStore } from "@/state";

onShow(() => {
  const store = userStore();
  setTimeout(() => {
    if (store.isLogin) {
      uni.switchTab({
        url: "/pages/index/index",
      });
    } else {
      uni.redirectTo({
        url: "/pages/login/index",
      });
    }
  }, 1500);

})
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;

  .text {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    width: 100vw;
    left: 0;
    bottom: 20vh;
    font-size: 60rpx;
    color: #333;
    // 字间距 0.1em
    letter-spacing: 0.1em;
    // 行高 1.5
    line-height: 1.5;
    // 文本对齐方式
    text-align: center;
    // 字体

  }
}
</style>