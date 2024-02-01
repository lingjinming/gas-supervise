<template>
  <gas-panel :record="detail" :fields="fields">
    <template #_dangerStatusValue>
      <view :class="[detail?.dangerStatus]">{{ detail?._dangerStatus }}</view>
    </template>
  </gas-panel>
  <view class="opts">
    <view class="button" @click="goHidangerFlow">查看处置流程</view>
  </view>
</template>
<script setup lang="ts">
import {EventType} from '../event'
import type {SafeCheckTaskItemDetailDTO} from '@/api/gen/data-contracts'
import { useEventChannel } from '@/hooks/useEventChannel';

const detail = ref<SafeCheckTaskItemDetailDTO|undefined>(undefined)

const fields = [{
  label: '隐患描述',
  prop: 'dangerRemark'
},{
  label: '整改负责人',
  prop: 'rectifierPerson'
},{
  label: '隐患照片',
  isImg: true,
  prop: 'dangerImgs'
},{
  label: '整改状态',
  prop: '_dangerStatus'
},{
  label: '完成日期',
  prop: 'completion_date'
},{
  label: '整改照片',
  isImg: true,
  prop: 'handleImgs'
}]
onLoad(() => {
  const {on} = useEventChannel();
  on(EventType.SHOW_HIDANGER_DETAIL, ({ formData }) => {
    detail.value = formData;
  });
})

const goHidangerFlow = () => {
  // @ts-ignore
  const dangerUid = detail?.value?.dangerUid;
  uni.navigateTo({
    url: `/pages/hidden/pages/HiddenDetailPage?uid=${dangerUid}`,
  });
}
</script>
<style lang="scss" scoped>
.WAIT_HANDLE {
  color: #FFA500;
}
.WAIT_AUDIT{
  color: #FFA500;
}
.HANDELD {
  color: #00A13D;
}
.opts {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  width: 100%;
  background-color: #fff;
  padding: 30rpx;

  .button {
    width: 90%;
    height: 88rpx;
    border-radius: 10rpx;
    background: #006CFF;
    color: #fff;

    font-size: 32rpx;
    font-weight: 500;
    line-height: 88rpx;
    text-align: center;
  }
}
</style>