<template>
  <view class="container">
    
    <gas-field v-model="reportForm.remark" type="textarea" :maxlength="200" label="隐患描述"> </gas-field>

    <gas-uploader  v-model="reportForm.fileIds"/>
    <gas-cascader
      dicType="RISK_SUBJECT_TYPE_TREE"
      label="隐患类别"
      title="隐患类别"
      v-model="reportForm.dangerSubtype"
      @selectFinish="onDangerTypeSelected"
    />
    <gas-field 
      label="位置"
      @click="openMapAndChooseLocation"
      right-icon="location"
    >
      <template #input>
        <input  disabled :value="reportForm.address"  placeholder="请选择" />
      </template>
    </gas-field>

    <gas-picker
      dicType="org"
      :label="isOrg ? '上报企业' : '责任企业'"
      :title="isOrg ? '上报企业' : '责任企业'"
      v-model="reportForm.orgId"
    />
    <!-- 企业不需要关联检查计划 -->
    <gas-picker
      v-if="!isOrg"
      v-model="reportForm.planCode"
      :options="planOptions"
      label="关联检查计划"
      title="关联检查计划"
    />

    <gas-picker
      dicType="RISK_DANGER_LEVEL"
      label="隐患等级"
      title="隐患等级"
      v-model="reportForm.level"
    />

    <gas-field label="检查日期" disabled  v-model="reportForm.checkDate"></gas-field>
    <view class="opt">
      <button type="default" size="large" @click="submit" >保存</button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { formatDate } from "@/utils";
import { minDate, maxDate } from "@/hooks";
import { userStore } from "@/state";
import { useLoading } from "@/hooks/useLoading";
import { useMap } from '@/hooks/useMap';

import {postHidangerGov,postHidangerOrg,getHidangerGovCheckPlanSelections} from '@/api/gen/GasSuperviseApi'
import type {HidangerCreateDTO} from '@/api/gen/data-contracts'

const store = userStore();
const isOrg: boolean = store.isOrgUser;
let reportForm = ref<Partial<HidangerCreateDTO>>({
  remark: "",
  address: "",
  orgId: "",
  level: "YB",
  checkDate: formatDate(minDate),
  planCode: "",
  subjectType: "",
  dangerType: "",
  dangerSubtype:"",
  fileIds: [],
  longitude: 0,
  latitude: 0,
  districtId: "",
  state: 'DRAFT'
});

onShow(() => {
  !isOrg &&
    uni.setNavigationBarTitle({
      title: "安全检查下发",
    });
});

const planOptions = ref<GasOption[]>([])
watch(() => reportForm.value.orgId, (orgId) => {
  if (orgId) {
    getHidangerGovCheckPlanSelections({targetOrgId: orgId})
    .then(({data}) => data.map(({value,label}) => ({text: label, value,label})))
    .then((options) => {
      planOptions.value = options;
    });
  }
});



const submit = async () => {
  const fileIds = reportForm.value.fileIds?.map((e) => e.id);
  const form = {...reportForm.value, fileIds};
  // @ts-ignore
  const result = Promise.resolve().then(() => isOrg ? postHidangerOrg(form) : postHidangerGov(form))
  useLoading(result,() => {
    uni.navigateBack();
  })
};

// 打开地图,选择地址
const openMapAndChooseLocation = async() => {
  const {chooseLocation} = useMap();
  const location = await chooseLocation();
  if(location.success) {
    reportForm.value.address = location.address;
    reportForm.value.longitude = location.lon;
    reportForm.value.latitude = location.lat;
    reportForm.value.districtId = location.districtId;
  }
}

const onDangerTypeSelected = (options: GasOption[]) => {
  // @ts-ignore 
  reportForm.value.subjectType = options[0].value;
  // @ts-ignore 
  reportForm.value.dangerType = options[1].value;
}

</script>
<style lang="scss" scoped>
.container{
  background: none;
}
.top {
  line-height: 100rpx;
}
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
.opt{
  width: calc(100% - 80rpx);
  margin: 20rpx auto;
}
</style>
