<template>
  <view class="top">
    <view  class="menu" v-for="item in menus" :key="item.name">{{ item.name }}</view>
  </view>

  <view class="index-box center">
    <view class="tit">
      <view>消息提醒</view>
      <view>更多</view>
    </view>
    <view class="msg" v-for="item in msgs" :key="item.uid" >
    </view>
  </view>

  <view class="index-box bottom">
    <view class="tit">
      <view>我的待办</view>
    </view>

  </view>
  <router-tab actPath="pages/index/index" />
</template>

<script setup lang="ts">
  uni.hideTabBar()

const menus = [
  {
    name: "政府界面",
  },
  {
    name: "隐患管理",
  },
  {
    name: "风险管理",
  },
  {
    name: "第三方施工管理",
  },
  {
    name: "报警管理",
  },
  {
    name: "事故事件管理",
  },
  {
    name: "检查计划管理",
  },
  {
    name: "更多分类",
  },
];
const msgs = ref([])
</script>

<style lang="scss" scoped>
.top{
  background: #fff;
  border-radius: 10prx;
  margin: 150rpx 40rpx 40rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  .menu{
    width: calc((100% - 30rpx) / 4);
    height: 50%;
  }
}

.index-box{
  padding: 0 20rpx;
  .tit{
    @include flex-between;
    line-height: 60rpx;
  }
}
</style>
