<template>
  <view class="item-warpper" @click="goToDetail">
    <view class="top">
      <view class="icon">
        <image class="img" src="/pages/accident/static/icon_check.png"></image>
      </view>
      <view class="title">
        <view class="name">
          {{ info._accidentScene + info._accidentType + '事故' }}
          </view>
        <view class="type">{{ info._orgId }}</view>
      </view>
      <view :class="['status',info.accidentLevel]">
          {{ info._accidentLevel }}
      </view>
      
    </view>
    <view class="info">
      <view class="line">
        <image class="icon" src="/pages/accident/static/icon_time.png"></image>
          伤亡情况:  {{ `${info.deathCnt||0}死/${info.injuredCnt||0}伤` }}
      </view>
      <view class="line">
        <image class="icon" src="/pages/accident/static/icon_time.png"></image>
          事故时间: {{ info.accidentTime }}
      </view>
      <view class="line address">
        <image class="icon" src="/pages/accident/static/icon_location.png"></image>
          事故地址: {{ info.address }}
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import type { AccidentVO } from '@/api/gen/data-contracts'

type AccidentVOBiz = AccidentVO & {
  _accidentScene: string;
  _accidentType: string;
  _accidentLevel: string;
};
const props = defineProps({
  info: {
    type: Object as PropType<AccidentVOBiz>,
    default: {
      uid: "",
    },
  }
})

const goToDetail = () =>{
  uni.navigateTo({
    url: `/pages/accident/pages/AccidentDetailPage?uid=${props.info.accidentId}`,
  });

}

</script>
<style lang="scss" scoped>
.item-warpper{
    height: 270rpx;
    padding: 28rpx 36rpx;
    padding-bottom: 0rpx;
    background-color: #fff;
    margin-bottom: 20rpx;
    // icon title state 放在一行
    .top {
      display: flex;
      position: relative;
      .icon {
        width: 72rpx;
        height: 72rpx;
        .img{
          height: 100%;
          width: 100%;
        }
      }
      .title {
        margin-left: 16rpx;
        .name {
          height: 28rpx;
          line-height: 28rpx;
          font-size: 28rpx;
          font-weight: 400;
          color: #222222;
          margin-bottom: 9rpx;
        }
        .type {
          display: inline;
          padding: 3rpx 8rpx;
          line-height: 35rpx;
          font-size: 24rpx;
          font-weight: 500;
          border-radius: 3rpx;
          color: #006CFF;
          // 背景铺满内容
          background: rgba(0,108,255,0.08);
        }
      }
      .status{
        position: absolute;
        right: 0rpx;
        top: 2rpx;
        height: 40rpx;
        min-width: 80rpx;
        line-height: 40rpx;
        border-radius: 20rpx;
        text-align: center;
      }
      .TBZD,.ZD,.JD,.YB {
        color: #fff;
        background-color: #006CFF;
      }
      .TBZD {
        background-color: $uni-color-warning;
      }
      .ZD {
        background-color: $uni-color-error;
      }
    }
    .info {
      margin-top: 20rpx;
      .line {
        font-size: 26rpx;
        font-weight: 400;
        color: #666666;
        margin-bottom: 20rpx;
        &.address{
          // 最多两行,超出两行省略号
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .icon{
          width: 26rpx;
          height: 26rpx;
        }
      }
    }
    
}
</style>