<template>
  <gas-table 
    ref="tabelRef"
    :autoFetch="true"
    :apiFun="getThirdBuildPage" 
    :query="query"
    >
    <template #item="{ info }">
      <ThirdBuildPageItem :info="info"></ThirdBuildPageItem>
    </template>

    <template #search>
      <gas-field label="计划施工时间" @click="showCalender"  v-model="dateRange" type="daterange" placeholder="请选择"></gas-field>
      <!-- 所属企业(政府用户可见) -->
      <gas-picker
        v-if="!isOrg"
        dicType="org"
        label="所属企业"
        title="上报企业"
        v-model="query.orgId"
      />
      <!-- 施工类型 -->
      <gas-check-group
        v-model="query.buildType"
        title="施工类型"
        type="THIRD_BUILD_TYPE"
      ></gas-check-group>
      <!-- 施工状态 -->
      <gas-check-group
        v-model="query.buildStates"
        title="施工状态"
        type="RISK_THIRD_BUILD_STATE"
      ></gas-check-group>
      <!-- 交底状态 -->
      <gas-check-group
        v-model="query.reportStates"
        title="交底状态"
        type="RISK_THIRD_REPORT_STATE"
      ></gas-check-group>
      <!-- 看护状态 -->
      <gas-check-group
        v-model="query.guardStates"
        title="看护状态"
        type="RISK_THIRD_GUARD_STATE"
      ></gas-check-group>
      

    </template>
  </gas-table>

</template>
<script lang="ts" setup>
import { userStore } from "@/state";
import ThirdBuildPageItem from './components/thirdBuildPageItem.vue'

import { getThirdBuildPage } from '@/api/gen/GasSuperviseApi'
import type {ThirdBuildPageQuery} from '@/api/gen/data-contracts'

const store = userStore();
const isOrg: boolean = store.isOrgUser;

const query = ref<ThirdBuildPageQuery>({
    page: 1,
    size: 10,
    startTime: '',
    endTime: '',
    buildType: [],
    buildStates: [],
    reportStates: [],
    guardStates: [],
    orgId: '',
})

const dateRange = computed({
  get(){
    return [query.value.startTime, query.value.endTime];
  },
  set(val) {
    query.value.startTime = val[0];
    query.value.endTime = val[1];
  }
})

const tabelRef = ref<any>(null);

const showCalender = () => {
  uni.hideKeyboard();
  //tabelRef?.value.closeQuery();
  //isShow.value = true;
};

</script>
<style lang="scss" scoped>
</style>