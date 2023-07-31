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
    :style="{ height: !isOrg ? 'calc(100% - 240rpx)' : 'calc(100% - 80rpx)' }"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage" 
    refresher-enabled
    :refresher-triggered="triggered"
    @refresherpulling="onRefreshPulling"
    @refresherrefresh="onRefresh"
  >

  
    <template v-if="total">
      <check v-for="(item, i) in list" :data="item" :key="i" @click="navigateToDetail(item)"/>
    </template>

    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
  <view class="addCheck-box" v-if="!isOrg">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="addCheck"
      >新增检查计划</van-button
    >
  </view>

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
import { checkPlanPage } from "@/api/checkPlan";
import type { CheckPageVo, CheckPlanQueryReq } from "@/api/model/CheckPlan";
import { formatDate } from "@/utils";
import { userStore } from "@/state";
import { useTable } from "@/hooks/useTable";

const minDate = new Date("2023-01-01").getTime();
const maxDate = new Date().getTime();
const store = userStore();
const isOrg: boolean = store.isOrgUser;
let isShow = ref(false);

let reportForm = ref<CheckPlanQueryReq>({
  startTime: "",
  endTime: "",
});

const { loading ,total,list,nextPage,search,triggered,onRefreshPulling,onRefresh} = useTable<CheckPageVo>(reportForm.value,checkPlanPage,{showToast: true});


const navigateToDetail = (item) => {
  uni.navigateTo({
    url: "/pages/checkDetail/index",
  });
}


const addCheck = () => {
  uni.navigateTo({
    url: "/pages/addCheck/index",
  });
};


const onConfirm = (e) => {
  reportForm.value.startTime = formatDate(e.detail[0]);
  reportForm.value.endTime = formatDate(e.detail[1]);
  isShow.value = false;
  search();
};
const showCalendar = () => {
  isShow.value = true;
};

onShow(() => {
  search();
  uni.$on("refresh", () => search());
});
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
.addCheck-box {
  background: #fff;
  height: 160rpx;
  padding: 30rpx 20rpx;
}
</style>
