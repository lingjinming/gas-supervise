<template>

 <van-swipe-cell :right-width="50" name="示例" class="notice-box">
    <van-cell-group>
      <view class="left">
        <view class="tit">
          <text>通知</text>
          <text>{{ notice.sendTime }}</text>
        </view>
        <view class="con">
          <text class="name"> {{ notice.createBy }} </text>
          <text>{{ notice.content }}</text>
        </view>
      </view>
    </van-cell-group>
    <view slot="right" class="right">
        删除
      </view>
  </van-swipe-cell> 
</template>
<script setup lang="ts">
const props = defineProps({
  notice: {
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
console.log(props.notice)
</script>

<style lang="scss" scoped>
.notice-box {
  margin: 40rpx;
  border-radius: 4rpx;
  height: 100rpx;
  .van-swipe-cell{
    background: #fff;
  }
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
    background: red;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
  }
}
</style>
