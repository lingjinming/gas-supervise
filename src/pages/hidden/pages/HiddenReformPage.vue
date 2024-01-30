<template>

  <van-cell-group>
    <view style="background: #fff;">
      <van-field :value="reportForm.handleContent" label="整改情况说明" readonly />

      <textarea
        class="remark"
        maxlength="200"
        :value="reportForm.handleContent"
        @input="reportForm.handleContent = $event.detail.value"
        type="text"
        placeholder="请输入"
      />
    </view>

    <van-field
      is-link
      label="整改时间"
      @click-input="handleDatePopupIsShow = true"
    >
      <input
        :value="reportForm.handleDate"
        slot="input"
        disabled
        style="width: 100%;"
        placeholder="请选择"
      />
    </van-field>
    <van-picker-new
      defaultValue="SAME"
      dicType="RISK_DANGER_CHECK"
      label="是否和描述一致"
      title="是否和描述一致"
      v-model="reportForm.sameWithRemark"
    />
    <van-field :value="username"  label="责任人" disabled readonly/>
    <van-calendar
      :show="handleDatePopupIsShow"
      @close="handleDatePopupIsShow = false"
      @confirm="chooseDate"
    />
    <gas-uploader v-model="reportForm.picIds"/>

  </van-cell-group>


  <van-button 
    custom-style="margin:40rpx;width:calc(100% - 80rpx)" 
    type="primary" 
    size="large" 
    color="#006CFF" 
    @click="submit"
    >确定</van-button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { timestampToDateTimeString} from "@/utils";
import { EventType } from '@/enums/eventType'
import { userStore } from "@/state";
import {putHidangerOrgHandleByUid} from '@/api/gen/GasSuperviseApi'
import type {OrgHidangerHandleDTO} from '@/api/gen/data-contracts'
import { useLoading } from "@/hooks/useLoading";


const store = userStore();
let username = ref(store.userInfo?.name)

let checkDate = ref(0)
let handleDatePopupIsShow = ref(false);

let reportForm = ref({
    uid:0,
    handleState:"HANDLING",
    sameWithRemark: 'SAME',
    handleContent: "",
    handleDate: "",
    picIds: [],
    fileIds: [],
  } as OrgHidangerHandleDTO & {uid: number});

onLoad(options => {
  reportForm.value.uid = options?.uid
  // HANDLING
  reportForm.value.handleState = options?.isComplete === 'true' ?  "HANDLED" : "HANDLING";
  reportForm.value.handleDate = timestampToDateTimeString(new Date().getTime())
  checkDate.value = new Date(options?.checkDate).getTime()
})


const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = timestampToDateTimeString(e.detail);
};

const submit = async () => {
 if(new Date(reportForm.value.handleDate).getTime() - new Date(checkDate.value).getTime() < 0){
    uni.showToast({ icon:'none', title:'整改日期应在排查日期之后' })
    return
  }
// @ts-ignore
  const picIds = reportForm.value?.picIds?.map(e => e.id);
  const form = {...reportForm.value,picIds}
  let result =  putHidangerOrgHandleByUid(reportForm.value.uid,form);
  useLoading(result,() => {
    uni.navigateBack();
    // 刷新详情
    uni.$emit(EventType.DANGER_DETAIL_REFRESH)
  })
};


</script>
<style lang="scss" scoped>
  .top {
    line-height: 100rpx;
  }
  .uploader-box {
    display: flex;
    gap: 88rpx;
    padding: 30rpx;
    margin-bottom: 20rpx;
  }
  .remark {
    height: 250rpx;
    width: calc(100% - 100rpx);
    margin: 0 30rpx;
    background: $uni-text-color-grey;
    border-radius: 10rpx;
    padding: 20rpx;
  }
</style>
