<template>
  <van-detail :record="detail" :fields="fields">
    <template #_dangerStatusValue>
      <view :class="[detail?.dangerStatus]">{{ detail?._dangerStatus }}</view>
    </template>
  </van-detail>
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
</style>