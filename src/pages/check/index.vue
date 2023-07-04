<template>
  <view class="top">
    <view       v-if="reportForm.endTime && reportForm.startTime"
>
      <text
      @click="showCalendar"
      >{{ reportForm.endTime +'至'+ reportForm.startTime }}</text
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
    style="height: calc(100% - 240rpx)"
    scroll-y="true"
    class="scroll-Y"
  >
    <van-skeleton title row="6" :loading="loading" v-if="checks.length">
      <check v-for="(item, i) in checks" :key="i" :data="item" />
    </van-skeleton>
    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
  <view class="addCheck-box">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      v-if="!isOrg"
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
import { checkPlanPage } from "@/api/hidden";
import { formatDate } from "@/utils";
import { userStore } from "@/state";

const minDate = new Date('2023, 01, 01').getTime()
const maxDate = new Date().getTime()
const store = userStore();
const isOrg: boolean = store.isOrgUser;

let loading = ref(true);

let checks = ref([]);
let reportForm = ref({
  startTime: "",
  endTime: "",
});
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
  let data = (await checkPlanPage(reportForm))["data"];
  checks.value = data;
  isShow.value = false;
  loading.value = false;
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
