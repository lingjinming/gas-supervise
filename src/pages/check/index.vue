<template>
  <view class="top">
    <view v-if="reportForm.endTime && reportForm.startTime">
      <text @click="showCalendar">{{
        reportForm.startTime + "至" + reportForm.endTime
      }}</text
      ><van-icon name="arrow-down" />
    </view>

    <van-icon
      v-else
      color="#a7a7a7"
      size="60rpx"
      name="calendar-o"
      @click="showCalendar"
    />
  </view>
  <scroll-view
    :style="{ height: 'calc(100% - 80rpx)' }"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage" 
    refresher-enabled
    :refresher-triggered="triggered"
    @refresherpulling="onRefreshPulling"
    @refresherrefresh="onRefresh"
  >

    <van-skeleton v-for="i in 3" :key="i" title avatar row="2" :loading="!list.length || noData" />
    <template v-if="total">
      <CheckPlanPageItem v-for="(item, i) in list" :data="item" :key="i"/>
    </template>
    <van-empty v-if="noData" description="暂无数据" />
  </scroll-view>


  <van-calendar
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onConfirm"
    allow-same-day
    :min-date="minDate"
    :max-date="maxDate"
  />
</template>
<script setup lang="ts">
import { formatDate } from "@/utils";
import { userStore } from "@/state";
import { useTable } from "@/hooks/useTable";
import {getHidangerGovCheckPlanPage} from '@/api/gen/GasSuperviseApi'
import type {HiDangerCheckPageVO,HiDangerCheckPageQuery} from '@/api/gen/data-contracts'
import CheckPlanPageItem from './components/CheckPlanPageItem.vue'
import {EventType} from './event'

const minDate = new Date("2023-01-01").getTime();
const maxDate = new Date().getTime();
const store = userStore();
const isOrg: boolean = store.isOrgUser;
let isShow = ref(false);
let reportForm = ref<HiDangerCheckPageQuery>({
  startTime: "",
  endTime: "",
});

const { noData ,total,list,nextPage,search,triggered,onRefreshPulling,onRefresh} = useTable<HiDangerCheckPageVO>(reportForm.value,getHidangerGovCheckPlanPage,{showToast: false});



onLoad(() => {
  search();
  uni.$on(EventType.REFRESH_PAGE, search);
})
onUnload(() => {
  uni.$off(EventType.REFRESH_PAGE, search);
})

const onConfirm = (e) => {
  reportForm.value.startTime = formatDate(e.detail[0]);
  reportForm.value.endTime = formatDate(e.detail[1]);
  isShow.value = false;
  search();
};
const showCalendar = () => {
  isShow.value = true;
};


</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}

</style>
