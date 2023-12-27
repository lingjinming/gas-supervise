<template>
  <view class="detail-container">
    <view class="item" v-for="({label,value,prop}) in list" :key="label">
      <slot :name="prop"></slot>
      <template v-if="!$slots[prop]">
        <view class="item-label">{{ label }}</view>
        <view class="item-value">{{ value }}</view>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {computed} from 'vue'
interface Field {
  label: string;
  prop: string;
  defValue?: string;
}
const props = defineProps<{
  fields: Field[];
  record: any;
}>()
const list = computed(() => {
  return props.record && props.fields.map(({label,prop,defValue}) => ({
    prop,
    label,
    value: props.record[prop] || defValue
  }))
})


</script>
<style lang="scss" scoped>
.detail-container {
  margin-top: 20rpx;
  margin-bottom: 30rpx;
  padding: 20rpx 30rpx;
  background: #fff;

  .item {
    min-height: 80rpx;
    line-height: 40rpx;
    display: flex;
    align-items: center;
    border-bottom: 1rpx dashed #ccc;

    .item-label {
      width: 30%;
      color: #4b5b6c;
      font-weight: 600;
    }

    .item-value {
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

}
</style>