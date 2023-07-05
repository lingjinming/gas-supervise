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
  >

  
    <template v-if="checks.length">
      <check v-for="(item, i) in checks" :data="item" :key="i" />
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

const minDate = new Date("2023-01-01").getTime();
const maxDate = new Date().getTime();
const store = userStore();
const isOrg: boolean = store.isOrgUser;

let checks = ref([] as CheckPageVo[]);
let reportForm = ref({
  startTime: "",
  endTime: "",
  // TODO 先查出所有数据, 后面优化分页
  paging: false,
} as CheckPlanQueryReq);
const addCheck = () => {
  uni.navigateTo({
    url: "/pages/addCheck/index",
  });
};
let isShow = ref(false);

const onConfirm = (e) => {
  reportForm.value.startTime = formatDate(e.detail[0]);
  reportForm.value.endTime = formatDate(e.detail[1]);
  getcheckPlanPageFn(reportForm.value);
};
const showCalendar = () => {
  isShow.value = true;
};
const getcheckPlanPageFn = async (reportForm) => {
  let { total, data } = await checkPlanPage(reportForm);
  checks.value = data;
  isShow.value = false;
};
onShow(() => {
  getcheckPlanPageFn(reportForm.value);
  uni.$on("refresh", () => getcheckPlanPageFn(reportForm.value));
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
