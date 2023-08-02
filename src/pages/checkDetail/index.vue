<template>
  <view class="top">

  </view>

  <van-empty description="暂无数据"></van-empty>
  <view class="addAudit-box">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="addAudit"
      >创建整改单</van-button
    >
  </view>
</template>
<script setup lang="ts">
import type { CheckPageVo, CheckPlanQueryReq } from "@/api/model/CheckPlan";
import { userStore } from "@/state";

const store = userStore();
const isOrg: boolean = store.isOrgUser;

const addAudit = () => {
  uni.navigateTo({
    url: "/pages/hidden/index?audit=true",
  });
};
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
.addAudit-box {
  background: #fff;
    height: 160rpx;
    padding: 30rpx 20rpx;
    position: fixed;
    width: calc(100% - 40rpx);
    bottom: 0;
}
</style>
