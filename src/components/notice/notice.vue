<template>
  <van-swipe-cell >
  <view slot="left" class="van-swipe-cell__left">选择</view>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <view slot="right" class="van-swipe-cell__right">删除</view>
</van-swipe-cell>

  <!-- <van-swipe-cell right-width="65" name="示例" class="notice-box">
    <van-cell-group>
      <view class="left">
        <view class="tit">
          <text>通知</text>
          <text>{{ notices.sendTime }}</text>
        </view>
        <view class="con">
          <text class="name"> {{ notices.createBy }} </text>
          <text>{{ notices.content }}</text>
        </view>
      </view>
      <view slot="right" class="right">
        <text>删除</text>
      </view>
    </van-cell-group>
  </van-swipe-cell> -->
</template>
<script setup lang="ts">
const props = defineProps({
  notices: {
    type: Object,
    default:
      {
        content: "短信提醒如下：20230608",
        createBy: "ONE",
        createTime: "2023-06-08 14:31:08",
        lastUpdateTime: "2023-06-08 14:31:08",
        msgFlag: "20230608",
        msgType: "MsgBulletin",
        recipient: "1",
        recipientPhone: "15395093564",
        recipientUnit: "合肥澤中",
        sendStatus: "RETAINED",
        sendTime: "2023-06-16 15:37:59",
        title: "短信提醒",
        type: "TEXT",
        uid: 1666694328248307700,
        _msgType: null,
        _recipientUnit: null,
        _sendStatus: null,
        _type: null,
      }
  },
});
</script>

<style lang="scss" scoped>
.notice-box {
  margin: 40rpx;
  background: #fff;
  border-radius: 4rpx;
  @include flex-between;
  .left {
    flex: 1;
    padding: 40rpx;

    .tit {
      @include flex-between;
    }
    .con {
      .name {
        color: $uni-color-primary;
      }
    }
  }
  .right {
    width: 100rpx;
    background: red;
    transform: all 0.3s;
    display: flex;
    height: 160rpx;
    @include flex-center;
    text {
    }
  }
}
</style>
