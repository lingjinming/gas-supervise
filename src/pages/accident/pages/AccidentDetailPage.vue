<template>
  <view class="tab-detail-wrap">
    <view class="tab-detail-box">
      <text class="label">联系电话:</text>
      <text>{{ 'dsdsd' }}</text>
    </view>
    <view class="tab-detail-box">
      <text class="label">联系电话:</text>
      <text>{{ 'dsdsd' }}</text>
    </view>
    <view class="tab-detail-box">
      <text class="label">联系电话:</text>
      <text>{{ 'dsdsd' }}</text>
    </view>
    <view class="tab-detail-box">
      <text class="label">联系电话:</text>
      <text>{{ 'dsdsd' }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import {postAccidentAdd} from '@/api/gen/GasSuperviseApi'
import type {AddAccidentQuery} from '@/api/gen/data-contracts'

const form = reactive({
  buildUnitName: '',
  buildUnitContactName: '',
  buildUnitContactPhone: '',
  supUnitName: '',
  supUnitContactName: '',
  supUnitContactPhone: '',
});

</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
  margin: 15rpx 0;
}
</style>