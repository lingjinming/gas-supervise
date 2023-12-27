<template>
  <view class="container" @click="goToDetail">
    <!-- 左边图片 -->
    <view class="left-item">
      <image class="img" src="/static/img/third_build_QT.png"></image>
    </view>
    <!-- 右边详情 -->
    <view class="right-item">
      <view class="title">
        {{ info._accidentScene + info._accidentType + '事故' }}
      </view>
      <view :class="['level', info.accidentLevel]">{{ info._accidentLevel }}</view>
      <!-- 1死/12伤 -->
      <view class="casualty">
        {{ `${info.deathCnt}死/${info.injuredCnt}伤` }}
      </view>
      <view class="acc_time">
        <van-icon name="clock" size="30rpx" />
        {{ info.accidentTime  }}
      </view>
      
      <view class="address">
        <van-icon name="location" size="30rpx" />
        {{ info.address }}
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import type { AccidentVO } from '@/api/gen/data-contracts'
const props = defineProps({
  info: {
    type: Object as PropType<AccidentVO>,
    default: {
      uid: "",
    },
  }
})

const goToDetail = () =>{
  uni.navigateTo({
    url: `/pages/accident/pages/AccidentDetailPage?uid=${props.info.uid}`,
  });

}

</script>
<style lang="scss" scoped>
.container {
  margin: 30rpx;
  height: 200rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  box-shadow: $uni-box-shadow;
  display: flex;
  overflow: hidden;

  .left-item {
    width: 72rpx;
    position: relative;
    padding-top: 10rpx;

    .img {
      width: 72rpx;
      height: 72rpx;
    }
  }

  .right-item {
    margin-left: 20rpx;
    flex: 1;
    position: relative;

    .title {
      font-size: 26rpx;
      font-family: Microsoft YaHei;
      font-weight: 600;
      color: #222222;
    }

    .level {
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      padding: 0 2rpx;

      &.TBZD {
        background-color: $uni-color-error;
      }

      &.ZD {
        background-color: $uni-color-warning;
      }

      &.JD {
        background-color: $uni-color-warning;
      }
      &.YB {
        background-color: $uni-color-primary;
      }
    }
    .casualty {
      height: 40rpx;
      width: 100%;
      line-height: 40rpx;
      margin-top: 10rpx;
      margin-left: 5rpx;
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4B5B6C;
    }
    .acc_time {
      height: 60rpx;
      width: 100%;
      line-height: 60rpx;
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4B5B6C;
    }
    .address {
      height: 60rpx;
      width: 100%;
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4B5B6C;
      // 最多两行,超出的时候第二行用...代替
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      
    }
  }
}</style>