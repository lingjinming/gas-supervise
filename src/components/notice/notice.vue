<template>
  <view class="notice-box">
    <view class="left">
      <view class="tit">
        <text>通知</text>
        <text>1分钟前</text>
      </view>
      <view class="con">
        <text class="name"> 燃管处-李明 </text>
        <text>通知</text>
      </view>
    </view>
    <view class="right">
      <text>删除</text>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.notice-box {
  margin: 40rpx;
  background: #fff;
  border-radius: 4rpx;
  @include flex-between;
  .left {
    flex:1;
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
    transform: all .3s ;
    display: flex;
    height: 160rpx;
    @include flex-center;
    text{

    }
  }
}
</style>
