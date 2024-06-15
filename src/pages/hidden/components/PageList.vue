<template>
  <gas-table 
    ref="tabelRef"
    keyword="输入企业名称或地址"
    :autoFetch="false"
    :apiFun="getHidangerOrgPage" 
    :query="query"
    >
    <template #item="{ info }">
      <HiddenPageItem :info="info"></HiddenPageItem>
    </template>
    <template #search>
      <!-- 隐患类型 -->
      <gas-cascader
        dicType="RISK_SUBJECT_TYPE_TREE"
        label="隐患类别"
        title="隐患类别"
        v-model="query.dangerSubType"
        @selectFinish="onDangerTypeSelected"
      />
      <!-- 所属企业(政府用户可见) -->
      <gas-picker
        v-if="!isOrg"
        dicType="org"
        label="所属企业"
        title="上报企业"
        v-model="query.orgId"
      />
      <!-- 隐患来源 -->
      <gas-check-group
        type="RISK_DANGER_SOURCE"
        v-model="query.dangerSource"
        title="隐患来源"
      ></gas-check-group>
      <!-- 隐患级别 -->
      <gas-check-group
        v-model="query.level"
        title="隐患级别"
        type="RISK_DANGER_LEVEL"
      ></gas-check-group>
    </template>
  </gas-table>
</template> 

<script setup lang="ts">

import HiddenPageItem from './HiddenPageItem.vue'
import { getHidangerOrgPage } from '@/api/gen/GasSuperviseApi'
import type { HidangerOrgPageQuery} from '@/api/gen/data-contracts'
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";

const props = defineProps<{mine: boolean,state: string}>()

const store = userStore();

const isOrg: boolean = store.isOrgUser;

const query = ref<HidangerOrgPageQuery>({
    page: 1,
    size: 10,
    planCode: "",
    state: [],
    orgId: "",
    dangerSource: [],
    level: [],
    dangerType: "",
    dangerSubType: "",
})


const tabelRef = ref<any>(null);
const doQuery = () => {
  tabelRef.value?.doQuery() 
}



onMounted(() => {
  uni.$on(EventType.DANGER_PAGE_REFRESH, doQuery);
  const fromState = props?.state;
  // @ts-ignore
  query.value.mine = props?.mine;
  if(fromState === 'ALL') {
    query.value.state = []
  } else if(fromState === 'UN_HANDLED') {
    query.value.state = ['WAIT_AUDIT','WAIT_HANDLE']
  } else if(fromState === 'HANDLED') {
    query.value.state = ['HANDLED']
  }
  doQuery()
})

onUnmounted(() => {
  uni.$off(EventType.DANGER_PAGE_REFRESH, doQuery);
})

const onDangerTypeSelected = (options: GasOption[]) => {
  // @ts-ignore
  query.value.subjectType = options[0].value;
  // @ts-ignore
  query.value.dangerType = options[1].value;
}



</script>
<style lang="scss" scoped>
</style>
