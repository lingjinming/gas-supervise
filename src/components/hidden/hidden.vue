<template>
  <view class="hidden-box">
      <view class="tit">
        <text>重大 隐患名称</text>
        <text>1分钟前</text>
      </view>
      <view class="con">
        <text>通知内容通知内通知内容通知内容通知内容通知内容容通知内容通知内容</text>
      </view>
      <text>
        <icon
        type="info"
        :size="23"
        color=""
      /> 地地址地址地址地址地址址</text>

      <view class="bottom">
        <text>由某人发布</text>
        <text>去整改</text>
      </view>
  </view>
</template>
<style lang="scss" scoped>
.hidden-box {
  margin: 40rpx;
  background: #fff;
  border-radius: 4rpx;
    padding: 40rpx;

    .tit {

      @include flex-between;
    }
    .con {
      .name {
        color: $uni-color-primary;
      }
    }
    .bottom{
      @include flex-between;
    }
}
</style>
