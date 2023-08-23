<template>
  <view class="container" @click="goDetail">
    <!-- 左边图片 -->
    <view class="left-item">
      <image class="img" :src="getImg(info.buildType)"></image>
    </view>
    <!-- 右边详情 -->
    <view class="right-item">
      <view class="title">
        {{ info._orgId+info._buildType }}
      </view>
      <view :class="['build-state', isOk(info.buildState) ? 'handled' : 'wait-handle']">{{ info._buildState }}</view>
      <view class="tags">
        <view :class="['build-tag',isOk(info.reportState) ? 'success' : 'warning']">{{ info._reportState }}</view>
        <view :class="['build-tag',isOk(info.guardState) ? 'success' : 'warning']">{{ info._guardState }}</view>
      </view>
      <view class="time">
        <view class="time-item">{{ info.planTimeStart }}</view>
        <view class="time-item line"></view>
        <view class="time-item">{{ info.planTimeEnd }}</view>
      </view>
      <view class="address">
        <van-icon name="location" size="30rpx"/>
        {{ info.constructionAddress }}
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { ThirdBuildPageVO } from '@/api/generated/data-contracts'
const props = defineProps({
  info: {
    type: Object as PropType<ThirdBuildPageVO>,
    default: {
      uid: "",
    },
  }
});

// 去查看详情
const goDetail = () => {
  uni.navigateTo({
    url: `/pages/thirdBuild/pages/thirdBuildDetailPage?uid=${props.info.uid}`,
  });
}
const getImg = (type: string) => {
  return `/static/img/third_build_${type}.png`;
}
const isOk = (value: string) => {
  return 'REPORTED,GUARDED,COMPLETED'.includes(value)
}
</script>
<style lang="scss" scoped>
.container{
  margin: 30rpx ;
  height: 200rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  box-shadow: $uni-box-shadow;
  display: flex;
  overflow: hidden;

  .left-item{
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
      font-weight: 400;
      color: #222222;
    }
    .build-state {
      position: absolute;
      right: 0;
      top: 0;
      color: #006CFF;
      &:before {
        content: "";
        display: block;
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        position: absolute;
        top: 50%; 
        left: -20rpx; 
        transform: translateY(-50%);
      }
      &.handled {
        color: $uni-color-success;

        &::before {
          background-color: $uni-color-success;
        }
      }

      &.wait-handle {
        color: $uni-color-warning;

        &::before {
          background-color: $uni-color-warning;
        }

        &-red {
          color: $uni-color-error;

          &::before {
            background-color: $uni-color-error;
          }
        }
      }
    }
    .tags {
      margin: 14rpx 0;
      display: flex;
      justify-content: flex-start;
      .build-tag {
        width: 87rpx;
        height: 35rpx;
        text-align: center;
        font-size: 24rpx;
        font-weight: 500;
        line-height: 35rpx;
        font-family: PingFang SC;
        background: rgba(0,161,61,0.08);
        border-radius: 3rpx;
        margin-right: 8rpx;
        &.success{
          color: #00A13D;
        }
        &.warning{
          background: rgba(198, 232, 96, 0.08);
          color: #FFB400;
        }
      }
    }
    .time {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 27rpx;
      .time-item {
        font-size: 28rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 42rpx;
      }
      .time-item.line{
        position: relative;
        width: 148rpx;
        height: 2rpx;
        background: transparent; 

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 10rpx;
          height: 10rpx;
          border-radius: 50%;
          top: -6rpx; 
        }

        &:before {
          left: -10rpx;
          border: 1rpx solid #ccc;
        }

        &:after {
          right: -10rpx;
          background: #C8D2EC;
        }
        background-image: repeating-linear-gradient(90deg,  #C8D2EC, #C8D2EC 5rpx, transparent 5rpx, transparent 10rpx);
      }
      
    }
    .address {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4B5B6C;
    }
  }
}
</style>