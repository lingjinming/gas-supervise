<template>
  <view class="hidden-box">
      <view class="tit">
        <text>{{ info._level }}</text>
        <text>{{ info.checkDate }}</text>
      </view>
      <view class="con">
        <text>{{ info.remark }}</text>
      </view>
      <text>
        <icon
        type="info"
        :size="23"
        color=""
      /> {{ info.address }}</text>

      <view class="bottom">
        <text>{{ info.checkBy }}</text>
        <text>去整改</text>
      </view>
  </view>
</template>
<script setup lang="ts">
import type {  HidangerPgaeVO } from '@/api/hidden';
import type { PropType } from 'vue'

const props = defineProps({
  info: {
    type: Object as PropType<HidangerPgaeVO>,
    default: {
      uid: ''
    }
  }
})



</script>


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
