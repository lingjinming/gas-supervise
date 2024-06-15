<template>

  <gas-field label="整改情况说明" v-model="reportForm.handleContent" type="textarea" placeholder="请输入" :maxlength="200" > </gas-field>
  
  <gas-field 
    label="整改时间" 
    v-model="reportForm.handleDate" 
    type="datetime" 
    placeholder="请选择" 
  >
  </gas-field>
  <gas-picker
    defaultValue="SAME"
    dicType="RISK_DANGER_CHECK"
    label="是否和描述一致"
    title="是否和描述一致"
    v-model="reportForm.sameWithRemark"
  />
  <gas-field v-model="username"  label="责任人" disabled readonly/>

  <gas-uploader v-model="reportForm.picIds"/>

  <button 
    style="margin:40rpx;width:calc(100% - 80rpx)" 
    type="default" 
    size="large" 
    @click="submit"
    >确定</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { timestampToDateTimeString,todayDateStr} from "@/utils";
import { EventType } from '@/enums/eventType'
import { userStore } from "@/state";
import {putHidangerOrgHandleByUid} from '@/api/gen/GasSuperviseApi'
import type {OrgHidangerHandleDTO} from '@/api/gen/data-contracts'
import { useLoading } from "@/hooks/useLoading";


const store = userStore();
let username = ref(store.userInfo?.name)

let checkDate = ref(0)

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
