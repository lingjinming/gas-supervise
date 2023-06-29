<template>
  <van-skeleton
    title
    avatar
    row="2"
    :loading="loading"
    v-for="(notice, i) in notices"
    :key="i"
    :right-width="50"
  >
    <view class="notice-box">
      <view class="tit">
        <van-icon
          name="/static/img/tip1.png"
          size="36rpx"
          v-if="notice.msgType === 'MsgBulletin'"
        />
        <van-icon
          name="/static/img/tip2.png"
          size="36rpx"
          v-if="notice.msgType === 'MsgRiskCheck'"
        />

        <text class="title" v-if="notice.msgType === 'MsgBulletin'"
          >安全检查通知</text
        >
        <text class="title" v-if="notice.msgType === 'MsgRiskCheck'"
          >隐患整改催办</text
        >
        <text class="time">{{ format(notice.sendTime) }}</text>
      </view>
      <view class="con">
        <text class="name">燃气管理处-{{ notice.createBy }} </text>
        <text class="content">{{ notice.content }}</text>
      </view>
    </view>
  </van-skeleton>
</template>
<script setup lang="ts">
import { getNotice } from "@/api/hidden";

let loading = ref(true);
const notices = ref([]);

const props = defineProps({
  num: {
    type: Number,
    default: 0,
  },
});
const format = (t) => {
  // 定义过去的时间
  var pastTime = new Date(t);

  // 计算过去了多久
  var currentTime = new Date();
  var timeDiff = currentTime.getTime() - pastTime.getTime();

  // 将时间差转换为天数
  var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  var yearsDiff = Math.floor(daysDiff / 365);
  var monthDiff = Math.floor(daysDiff / 30);
  if (yearsDiff > 0) {
    return yearsDiff + "年前";
  }
  if (monthDiff > 0) {
    return monthDiff + "月前";
  }
  if (daysDiff > 0) {
    return daysDiff + "天前";
  } else {
    var hoursDiff = Math.floor(timeDiff / (1000 * 3600));
    if (hoursDiff > 0) {
      return hoursDiff + "小时前";
    } else {
      var minsDiff = Math.floor(timeDiff / (1000 * 60));
      if (minsDiff > 0) {
        return minsDiff + "分钟前";
      }
      return "1分钟前";
    }
  }
};

const getNoticeFn = async () => {
  let data = (
    await getNotice({
      recipient: uni.getStorageSync("USER_INFO")["userId"],
    })
  )["data"];

  if (props.num) {
    notices.value = data.slice(0, props.num);
  } else {
    notices.value = data;
  }
  setTimeout(() => {
    loading.value = false;
  }, 500);
};

onShow(() => {
  getNoticeFn();
});
</script>
<style lang="scss" scoped>
.notice-box {
  background: #fff;
  margin: 20rpx 0;
  padding: 20rpx;
  box-shadow: $uni-box-shadow;
  .tit {
    line-height: 48rpx;
    @include flex-between;
    font-size: $uni-font-size-base;
    .title {
      margin-left: 18rpx;
      width: 80%;
    }
    .time {
      width: 100rpx;
      color: #989898;
      font-size: $uni-font-size-sm;
    }
  }
  .con {
    padding-top: 16rpx;
    line-height: 33rpx;
    font-size: $uni-font-size-sm;
    color: #4b5b6c;
    .name {
      color: $uni-color-primary;
      margin-right: 10rpx;
    }
  }
}
</style>
