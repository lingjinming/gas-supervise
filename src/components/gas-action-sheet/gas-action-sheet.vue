<template>
  <uni-popup ref="popup" background-color="#fff" @change="change" @maskClick="maskClick">
    <view class="gas-action-sheet_container">
      <view class="action-item" v-for="(item, index) in actions" :key="index" @click="clickItem(item)">
        {{ item.name }}
      </view>
      <view class="action-gap"></view>
      <view class="action-cancel" @click="clickCancel">
        {{ cancelText }}
      </view>
    </view>
  </uni-popup>
</template>
<script lang="ts" setup>
import { GasActionSheetProps,type ActionType } from './index'
import {  ref ,watch} from 'vue'
const props = defineProps(GasActionSheetProps);
const emit = defineEmits(['select','cancel','close','click-overlay'])

const popup = ref();


watch(() => props.show, (val) => {
  if(val) {
    popup.value?.open('bottom')
  } else {
    popup.value?.close()
  }
})

const clickItem = (item:ActionType) => {
  emit('select',item)
}
const maskClick = () => {
  emit('click-overlay')
}
const clickCancel = () => {
  emit('cancel')
}

const change = (e) => {
}
</script>
<style lang="scss">
.gas-action-sheet_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32rpx;
  .action-item {
    width: 100%;
    text-align: center;
    padding: 24rpx 32rpx;
  }

  .action-gap {
    background-color: #f7f8fa;
    display: block;
    height: 16rpx;
    width: 100%;
  }
  .action-cancel {
    margin-top: 20rpx;
    width: 100%;
    text-align: center;
    color: #666;
  }
}
</style>
