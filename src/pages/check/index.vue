<template>
  <view class="top">
    <text @click="addCheck">新增</text>
    <text @click="showCalendar">时间</text>
  </view>
  <scroll-view
    style="height: calc(100% - 80rpx)"
    scroll-y="true"
    class="scroll-Y"
  >
    <check
      v-for="(item, i) in checks"
      :key="i"
      :data="item"
      @refresh="getcheckPlanPageFn"
    />
  </scroll-view>
  <van-calendar
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onConfirm"
  />
</template>
<script setup lang="ts">
import { checkPlanPage } from "@/api/hidden";
import { formatDate } from "@/utils";
let checks = ref([]);
let reportForm = ref({
  startTime:'',
  endTime:''
})
const addCheck = () => {
  uni.navigateTo({
    url:'/pages/addCheck/index'
  })
}
let isShow = ref(false);

const onConfirm = (e) => {
  reportForm.value.startTime = formatDate(e.detail[0])
  reportForm.value.endTime = formatDate(e.detail[1])
  getcheckPlanPageFn(reportForm.value)
};
const showCalendar = () => {
  console.log(1)
  isShow.value = true
}
const getcheckPlanPageFn = async (reportForm) => {
  let data = (await checkPlanPage(reportForm))["data"];
  checks.value = data;
  isShow.value = false
};
onShow(() => {
  getcheckPlanPageFn(reportForm.value);
});
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
</style>
