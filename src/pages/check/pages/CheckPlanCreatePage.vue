<template>

    <gas-field  label="计划名称"  clearable v-model="reportForm.title"  placeholder="请输入"/>

    <gas-field  label="计划时间"   type="daterange" v-model="dateRange"  placeholder="请选择时间范围"/>

    <gas-picker
      dicType="SAFE_CHECK_TYPE"
      label="检查类型"
      title="检查类型"
      v-model="reportForm.type"
    />
    <gas-picker
      dicType="org"
      label="检查企业"
      title="检查企业"
      @onConfirm="onConfirmOrg"
      v-model="reportForm.targetOrgId"
    />
    <gas-field  label="企业负责人"  clearable v-model="reportForm.targetOrgOwner"  placeholder="请输入"/>
   
    <gas-field  label="负责人联系方式"  clearable v-model="reportForm.targetOrgPhone"  placeholder="请输入"  :error-message="errorMessage"/>

    <gas-field  label="企业地址"  clearable v-model="reportForm.targetOrgAddr"  placeholder="请输入" />

    <gas-field  label="参与人" :maxlength="200" clearable v-model="reportForm.checkers"  placeholder="请输入" />

    <gas-field  label="主管部门" readonly clearable v-model="orgFullName"  placeholder="请输入" />

  <view class="btn">
    <button type="default" size="large" @click="submit" >确定</button>
  </view>

</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { formatDate } from "@/utils";
import { minDate, showToast} from "@/hooks";
import { userStore } from "@/state";

import {postHidangerGovCheckPlan,getEnterpriseInfoById} from '@/api/gen/GasSuperviseApi'
import type {HiDangerCheckPlanCreateDTO} from '@/api/gen/data-contracts'


let errorMessage = ref("");
const store = userStore();
const isOrg: boolean = store.isOrgUser;
const orgFullName = store.userInfo?.organizationVO.fullName;



const onConfirmOrg =(option: GasOption) => {
  getEnterpriseInfoById(Number(option.value)).then(res => {
      let data = res.data || {};
      reportForm.value.targetOrgAddr = data.address || "";
      reportForm.value.targetOrgOwner = data.masterName || "";
      reportForm.value.targetOrgPhone = data.masterPhone || "";
  })
}

let reportForm = ref({
  targetOrgOwner:"",
  targetOrgAddr: "",
  targetOrgPhone:"",
  checkers:"",
  startDate: formatDate(minDate),
  endDate: formatDate(minDate),
} as HiDangerCheckPlanCreateDTO);


const dateRange = computed({
  get() {
    return [reportForm.value.startDate,reportForm.value.endDate]
  },
  set(val) {
    reportForm.value.startDate = val[0];
    reportForm.value.endDate = val[1];
  }
})

const submit = async () => {
  if (errorMessage.value) return;
  const {success,message} =  await postHidangerGovCheckPlan(reportForm.value);
  if(success) {
    showToast(success,message,uni.navigateBack);
  } else {
    uni.showModal({ title: '提示', content: message, showCancel: false, confirmText: '知道了',  success: function (res) { } });
  }
 
};
</script>
<style lang="scss" scoped>
.btn {
  height: 160rpx;
  padding: 30rpx 20rpx;
}
.top {
  line-height: 100rpx;
}

</style>
