<template>
  <view class="top">
    <view class="menu" v-for="item in menus" :key="item.name" @click="navigato(item.url)">{{
      item.name
    }}</view>
  </view>

  <view class="index-box center">
    <view class="tit">
      <view>消息提醒</view>
      <view @click="navigatoNotice">更多</view>
    </view>
    <notice v-for="item in notices.slice(0,2)" :key="item.uid" :notices="item"/>
  </view>

  <view class="index-box bottom">
    <view class="tit">
      <view>我的待办</view>
    </view>
  </view>
  <router-tab actPath="pages/index/index" />
</template>

<script setup lang="ts">
import { getNotice } from "@/api/hidden";

uni.hideTabBar();

const menus = [
  {
    name: "政府界面",
  },
  {
    name: "隐患管理",
    url:'/pages/hidden/index'
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
const navigato = url => {
  uni.navigateTo({
    url
  })
}

const navigatoNotice = () => {
  uni.$emit('NOTICES',{
    NOTICES:notices
  })
  uni.navigateTo({
    url:'/pages/notice/index'
  })
}

const notices = ref([]);

const getNoticeFn = async () => {
  notices.value = (await getNotice({
    recipient:uni.getStorageSync('USER_INFO')['userId']
  }))["data"];
};
getNoticeFn();
</script>

<style lang="scss" scoped>
.top {
  background: #fff;
  border-radius: 10prx;
  margin: 150rpx 40rpx 40rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
  .menu {
    width: calc((100% - 30rpx) / 4);
    height: 50%;
  }
}

.index-box {
  padding: 0 20rpx;
  .tit {
    @include flex-between;
    line-height: 60rpx;
  }
}
</style>
