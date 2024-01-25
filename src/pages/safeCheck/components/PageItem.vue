<template>
  <view class="item-warpper" @click="goDetail">
    <view class="top">
      <view class="icon">
        <image class="img" src="/pages/safeCheck/static/icon_check.png"></image>
      </view>
      <view class="title">
        <view class="name">
          {{ info.targetName }}
          </view>
        <view class="type">{{ (info as any)._targetType }}</view>
      </view>
      <!-- 三方安全评价 -->
      <template v-if="info.checkType === 'THIRD'">
        <view :class="['status',info.safeLevel]">
          {{ info.safeLevel }}
        </view>
      </template>
      <!-- 日常/专项检查 -->
      <template v-else>
        <view :class="['status',info.safeLevel]">
          {{ info.checkState === 'PASS' ? '无隐患' : '有隐患' }}
        </view>
      </template>
    </view>
    <view class="info">
      <view class="line">
        <image class="icon" src="/pages/safeCheck/static/icon_checker.png"></image>
        检查人: {{ info.checkPersonName }}
      </view>
      <view class="line">
        <image class="icon" src="/pages/safeCheck/static/icon_time.png"></image>
        检查时间: {{ info.checkTime }}
      </view>
      <view class="line address">
        <image class="icon" src="/pages/safeCheck/static/icon_location.png"></image>
        企业地址：{{ info.address }}
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { SafeCheckTaskPageVO } from '@/api/gen/data-contracts'

const props = defineProps({
  info: {
    type: Object as PropType<SafeCheckTaskPageVO>,
    default: {
      uid: "",
    },
  }
});

const goDetail = () => {
  uni.navigateTo({
    url: `/pages/safeCheck/pages/DetailPage?uid=${props.info.uid}`,
  });
}
</script>
<style lang="scss" scoped>
  .item-warpper{
    height: 280rpx;
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
      }
      .PASS, .NOT_PASS {
        &:before{
          content: '';
          display: inline-block;
          width: 16rpx;
          height: 16rpx;
          border-radius: 50%;
          margin-right: 4rpx;
        }
      }
      .PASS {
        color: #01C14A;
        &:before{
          background-color: #01C14A;
        }
      }
      .NOT_PASS {
        color: #F63724;
        &:before{
          background-color: #F63724;
        }
      }
      .A,.B,.C,.D {
        height: 40rpx;
        line-height: 40rpx;
        text-align: center;
        width: 80rpx;
        border-radius: 20rpx;
        color: #fff;
        background-color: #006CFF;
      }
      .C {
        background-color: $uni-color-warning;
      }
      .D {
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