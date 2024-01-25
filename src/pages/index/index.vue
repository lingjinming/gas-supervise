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

  <view class="index-box ">
    <view class="tit">
      <view>我的待办</view>
    </view>
    <view class="sub_title" @click="goHidanger">
      <view class="tip">
        <view class="badge">{{ waitHandleCnt }}</view>
        <van-icon name="arrow" />
      </view>
      <image class="icon" src="/static/icon/icon_detail.png"></image>
      隐患整改反馈
    </view>
  </view>

  <view class="index-box ">
    <view class="tit">
      <view>消息提醒</view>
      <view hover-class="hover" @click="navigatoNotice" class="more"
        >更多 ></view
      >
    </view>
    <NoticePageItem v-if="notices.length" :notices="notices.slice(0, 3)" />
    <view v-else class="no-content">
      <image src="/static/img/nodata.png" class="nodata"></image>
    </view>
  </view>

  
  <router-tab actPath="pages/index/index" />
</template>

<script setup lang="ts">
import NoticePageItem from '@/pages/notice/components/NoticePageItem.vue'
import { EventType } from "@/enums/eventType";
import { getNoticeFn, notices } from "../notice";
import { getHidangerMyUnhandledCnt } from '@/api/gen/GasSuperviseApi'

const waitHandleCnt = ref(0);

onLoad(() => {
  uni.hideTabBar();
  uni.$on(EventType.NOTICE_REFRESH, getNoticeFn);
  // 隐患整改反馈
  getHidangerMyUnhandledCnt().then(result => {
    waitHandleCnt.value = result.data || 0;
  })
})

onUnload(() => {
  uni.$off(EventType.NOTICE_REFRESH, getNoticeFn)
})

onShow(() => {
  getNoticeFn()
});

onPullDownRefresh(() => getNoticeFn());

const goHidanger = () => {
  uni.navigateTo({
    url: "/pages/hidden/index?mine=true",
  });
};



const menus = [
  {
    name: "日常检查",
    url: "/pages/safeCheck/index?type=DAILY",
    image: "/static/icon/icon_safe_check_daily.png",
  },
  {
    name: "专项检查",
    url: "/pages/safeCheck/index?type=SPECIAL",
    image: "/static/icon/icon_safe_check_spec.png",
  },
  {
    name: "三方安全评价",
    url: "/pages/safeCheck/index?type=THIRD",
    image: "/static/icon/icon_safe_check_third.png",
  },
  {
    name: "事故事件",
    url: "/pages/accident/index",
    image: "/static/icon/icon_accident.png",
  },
  {
    name: "隐患管理",
    url: "/pages/hidden/index",
    image: "/static/icon/icon_hidanger.png",
  },
  {
    name: "检查计划",
    url: "/pages/check/index",
    image: "/static/img/icon_jcjhgl.png",
  },
  {
    name: "第三方施工",
    url: "/pages/thirdBuild/index",
    image: "/static/icon/icon_thrid_build.png",
  },
  // {
  //   name: "风险管理",
  //   image: "/static/img/icon_fxgl.png",
  // },
  // {
  //   name: "报警管理",
  //   image: "/static/img/icon_bjgl.png",
  // },
  
  // {
  //   name: "更多分类",
  //   image: "/static/img/icon_gdfl.png",
  // },
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
  .sub_title {
    height: 96rpx;
    margin-top: 22rpx;
    padding-left: 29rpx;
    background: #FFFFFF;
    line-height: 96rpx;
    font-size: 28rpx;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #222222;
    border-bottom: 1rpx solid #E0E0E0;

    .tip {
      float: right;
      min-width: 150rpx;
      height: 96rpx;
      display: flex;
      justify-content: space-around;
      .badge {
        align-self: center;
        height: 40rpx;
        min-width: 40rpx;
        line-height: 40rpx;
        font-size: 26rpx;
        font-weight: 400;
        text-align: center;
        color: #fff;
        background: #F63724;
        border-radius: 50%;
      }
    }
    .icon {
      // 垂直居中
      display: inline-block;
      vertical-align: middle;
      width: 36rpx;
      height: 36rpx;
      margin-right: 16rpx;
    }
  }
}
</style>
