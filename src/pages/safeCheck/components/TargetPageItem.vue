<template>
  <view class="item-container">
    <view class="title">
      <slot name="select"></slot>
      {{ info.targetName }}
    </view>
    <view class="line">
      <view class="icon">
        <uni-icons type="flag" size="38rpx" />
      </view>
      <view class="content">对象类型：{{ info._targetType }}</view>
    </view>
    <view class="line">
      <view class="icon">
        <uni-icons type="location" size="38rpx" />
      </view>
      <view class="content">企业地址：{{ info.address }}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { SafeCheckTargetDTO } from '@/api/gen/data-contracts';

const props = defineProps({
  info: {
    type: Object as PropType<SafeCheckTargetDTO & { selected?: boolean, _targetType?: string }>,
    default: {
      uid: "",
    },
  }
});

</script>
<style lang="scss" scoped>
.item-container {
  height: 190rpx;
  width: 100%;
  padding: 20rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 8rpx 32rpx 0rpx rgba(153, 161, 173, 0.09);
  border-radius: 6rpx;
  margin-bottom: 20rpx;

  .title {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 30rpx;
    font-weight: 400;
    color: #222222;
    display: flex;

    .cycle {
      width: 38rpx;
      height: 38rpx;
      display: inline-block;
      background: rgba(0, 108, 255, 0.1);
      border: 2rpx solid #006CFF;
      border-radius: 50%;
      margin-right: 19rpx;
      position: relative;
    }

    .selected {
      // 选中的时候背景变蓝,同时中间出现一个白色的对号
      background: #006CFF;
      border: none;

      &:after {
        content: '√';
        color: #FFFFFF;
        width: 20rpx;
        height: 20rpx;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .line {
    margin: 30rpx 0rpx;
    height: 30rpx;
    line-height: 30rpx;
    font-size: 26rpx;
    font-weight: 400;
    color: #666666;
    display: flex;

    .icon {
      width: 38rpx;
      height: 38rpx;
      display: inline-block;
      margin-right: 19rpx;
    }
  }


}</style>