<template>
  <van-skeleton
    title
    avatar
    row="2"
    :loading="loading"
    :right-width="50"
    v-for="(notice, i) in notices"
    :key="i"
  >
    <van-swipe-cell :right-width="0">
      <view class="notice-box">
        <view class="tit">
          <view
            style="
              display: flex;
              align-items: center;
              gap: 10rpx;
              font-size: 30rpx;
              font-weight: 600;
            "
          >
            <van-icon
              :name="'/static/img/' + notice.msgType + '.png'"
              size="36rpx"
            />{{ notice.title }}
          </view>

          <text class="time">{{ format(notice.sendTime) }}</text>
        </view>
        <view class="con">
          <!-- <text class="name">燃气管理处-{{ notice.createBy }} </text> -->
          <text class="content">{{ notice.content }}</text>
        </view>
      </view>
      <!-- <view slot="right" class="right">
      <view class="del" @click="del(notice)">删除</view>
    </view> -->
    </van-swipe-cell>
  </van-skeleton>
</template>
<script setup lang="ts">
import type { SysNoticeItem } from "@/api/model/Notice";
import { readNotice } from "@/api/notice";
import { EventType } from "@/enums/eventType";

let loading = ref(false);
// onMounted(() => (loading.value = Boolean(props.notices.length)));

const props = defineProps({
  notices: {
    type: Array<SysNoticeItem>,
    default: [],
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

const del = async (notice: SysNoticeItem) => {
  await readNotice({
    recipient: notice.recipient,
    uId: notice.uid,
  });
  // 让列表刷新
  uni.$emit(EventType.NOTICE_REFRESH);
};
</script>
<style lang="scss" scoped>
.notice-box {
  background: #fff;
  margin-bottom: 30rpx;
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
      white-space: nowrap;
    }
  }
  .con {
    color: #4b5b6c;
    margin: 20rpx 2rpx;
    .name {
      color: $uni-color-primary;
      margin-right: 10rpx;
    }
  }
}
</style>
