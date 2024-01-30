<!-- 事故事件 -->
<template>
  <gas-table 
    ref="tabelRef"
    keyword="请输入地址"
    :autoFetch="true"
    :apiFun="getAccident" 
    :query="query"
    >
    <template #item="{ info }">
      <AccidentPageItem :info="info"></AccidentPageItem>
    </template>

    <template #search>
      <!-- 事故类型 -->
      <check-group useAll type="sp_accident_type" v-model="query.accidentType" title="事故类型"/>
      <!-- 事故级别 -->
      <check-group useAll type="ACCIDENTLEVEL"  v-model="query.accidentLevel" title="事故级别"/>
      <!-- 事故场景 -->
      <check-group useAll type="sp_accident_scene" v-model="query.accidentScene" title="事故场景"  />
    </template>
    <template #bottom>
      <view class="button" @click="goCreate"><van-icon name="plus" class="icon"/>事故事件上报</view>
    </template>
  </gas-table>
  
</template>
<script setup lang="ts">
import AccidentPageItem from "./components/AccidentPageItem.vue";
import {getAccident} from '@/api/gen/GasSuperviseApi'
import type {AccidentPageQuery} from '@/api/gen/data-contracts'
import { EventType } from "./event";


const query = reactive<AccidentPageQuery>({
    keyword: undefined,
    accidentScene: [],
    accidentLevel: undefined,
    accidentType: undefined,
})

const tabelRef = ref<any>(null);
const tableQuery = () => {
  tabelRef.value?.doQuery() 
}


onLoad(() => {
  uni.$on(EventType.LIST_PAGE_REFRESH,tableQuery)
});

onUnload(() => {
  uni.$off(EventType.LIST_PAGE_REFRESH,tableQuery)
})

const goCreate = () => {
  uni.navigateTo({ url: '/pages/accident/pages/AccidentEditPage' })
}

</script>
<style lang="scss" scoped>
.button {
    width: 90%;
    height: 88rpx;
    border: 1px solid #868686;
    border-radius: 10rpx;

    font-size: 32rpx;
    font-weight: 500;
    color: #222222;
    line-height: 88rpx;
    text-align: center;

    .icon {
      margin-right: 15rpx
    }
  }
</style>