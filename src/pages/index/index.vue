<template>
  <image class="bg_img" src="./static/img/bg.png"></image>
  <view class="top">
    <view class="menu-box">
      <view
        hover-class="hover"
        class="menu"
        v-for="item in menus"
        :key="item.name"
        @click="navigato(item.url)"
      >
        <view>
          <image class="menu_img" :src="item.image"></image>
        </view>
        <view>{{ item.name }}</view>
      </view>
    </view>
  </view>

  <view class="index-box center">
    <view class="tit">
      <view>消息提醒</view>
      <view hover-class="hover" @click="navigatoNotice" class="more"
        >更多 ></view
      >
    </view>
    <NoticePageItem v-if="notices.length" :notices="notices.slice(0, 2)" />
    <view v-else class="no-content">
      <image src="/static/img/nodata.png" class="nodata"></image>
    </view>
  </view>

  <view class="index-box bottom">
    <view class="tit">
      <view>我的待办</view>
      <view hover-class="hover" class="more">更多 ></view>
    </view>
    <view>
      <view class="no-content">
        <image src="/static/img/nodata.png" class="nodata"></image>
      </view>
      <view class="no-content">该功能尚未启用 , 敬请期待~</view>
    </view>
  </view>
  <router-tab actPath="pages/index/index" />
</template>

<script setup lang="ts">
import NoticePageItem from '@/pages/notice/components/NoticePageItem.vue'
import { EventType } from "@/enums/eventType";
import { getNoticeFn, notices } from "../notice";
onShow(() => {
  console.log('onShow')
  uni.$on(EventType.NOTICE_REFRESH, () => getNoticeFn());
  getNoticeFn()
});
// onHide(() => {
//   console.log('onHide')
//   uni.$off(EventType.NOTICE_REFRESH)
// })
onPullDownRefresh(() => getNoticeFn());


uni.hideTabBar();

const menus = [
  // {
  //   name: "政府界面",
  //   image: "/static/img/icon_zfjm.png"
  // },
  {
    name: "隐患管理",
    url: "/pages/hidden/index",
    image: "/static/img/icon_yhgl.png",
  },
  {
    name: "检查计划管理",
    url: "/pages/check/index",
    image: "/static/img/icon_jcjhgl.png",
  },
  {
    name: "第三方施工管理",
    url: "/pages/thirdBuild/index",
    image: "/static/img/icon_dsfsg.png",
  },
  {
    name: "风险管理",
    image: "/static/img/icon_fxgl.png",
  },
  {
    name: "报警管理",
    image: "/static/img/icon_bjgl.png",
  },
  {
    name: "事故事件管理",
    image: "/static/img/icon_sgsjgl.png",
  },

  {
    name: "更多分类",
    image: "/static/img/icon_gdfl.png",
  },
];
const navigato = (url) => {
  if (!url) {
    uni.showToast({
      icon: "error",
      title: "功能开发中",
    });
    return;
  }
  uni.navigateTo({
    url,
  });
};

const navigatoNotice = () => {
  uni.navigateTo({
    url: "/pages/notice/index",
  });
};
</script>

<style lang="scss" scoped>
.top {
  border-radius: 10prx;
  padding: 160rpx 30rpx 0rpx;
  font-size: 20rpx;
  font-family: PingFang SC;
  font-weight: bold;
  color: #222222;
  box-shadow: $uni-box-shadow;
  border-radius: 10rpx;
  .menu-box {
    padding: 25rpx;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
    box-shadow: 0px 5px 24px 0px rgba(217, 222, 234, 0.51);
    border-radius: 6px;
  }
  .menu {
    width: calc((100% - 60rpx) / 4);
    height: 50%;
    text-align: center;
  }
}
.bg_img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 750rpx;
  height: 534rpx;
  z-index: -999;
}
.menu_img {
  width: 75rpx;
  height: 75rpx;
}
.no-content {
  display: flex;
  justify-content: center;
  padding-top: 30rpx;
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #53616d;
}
.nodata {
  width: 527rpx;
  height: 214rpx;
}

.index-box {
  padding: 36rpx 30rpx 0rpx 30rpx;
  min-height: 250rpx;
  .tit {
    @include flex-between;
    line-height: 60rpx;
    font-size: 32rpx;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #2a2c32;
  }
  .more {
    font-size: 24rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #4b5b6c;
  }
}
</style>
