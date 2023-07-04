<template>
  <view class="top">
    <van-icon
      color="#006CFF"
      size="60rpx"
      name="add-o"
      type="default"
      v-if="!isOrg"
      @click="addCheck"
    />
    <van-icon
      color="#006CFF"
      size="60rpx"
      name="calendar-o"
      @click="showCalendar"
    />
  </view>
  <scroll-view
    style="height: calc(100% - 80rpx)"
    scroll-y="true"
    class="scroll-Y"
  >
    <van-skeleton title row="6" :loading="loading">
      <check
        v-for="(item, i) in checks"
        :key="i"
        :data="item"
      />
    </van-skeleton>
  </scroll-view>
  <van-calendar
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onConfirm"
  />
</template>
<script setup lang="ts">
import { checkPlanPage } from "@/api/checkPlan";
import type { CheckPageVo ,CheckPlanQueryReq} from "@/api/model/CheckPlan";
import { formatDate } from "@/utils";
import { userStore } from "@/state";

const store = userStore();
const isOrg: boolean = store.isOrgUser;

let loading = ref(true);

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
  let {total,data} = await checkPlanPage(reportForm);
  checks.value = data;
  isShow.value = false;
  loading.value = false;
};
onShow(() => {
  getcheckPlanPageFn(reportForm.value);
  uni.$on('refresh',() => getcheckPlanPageFn(reportForm.value))
});
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
</style>
