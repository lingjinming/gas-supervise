<template>
  <view class="container">
    <region-img
              region="test"
              id="22636a7ca1424d2381b179e68281f334.jpg"
            />
    <van-skeleton
      title
      avatar
      row="3"
      :loading="loading"
      v-for="(val, key) in data"
      :key="key"
    >
      <view class="detail-box">
        <view class="tit">
          <view class="top">
            <text class="fs16">{{ val.title }}</text>
            <text class="fs12">{{ val.stageTime }}</text>
          </view>
          <view>{{ val.operator }}</view>
        </view>
        <view class="con">
          <text>{{ val.remark }}</text>
          <!-- <template v-if="val.picIds">
            <RegionImg
              v-for="img in val.picIds"
              :key="img"
              region="test"
              :img-id="img"
            />
          </template> -->

          <view>隐患类型: {{ val._subjectType + val._dangerType }}</view>
          <view>整改单位: {{ val.operatorOrg }}</view>
          <view>详细地址: {{ val.address }}</view>
        </view>
      </view>
    </van-skeleton>
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { getHidangerFlow } from "../../api/hidden";
const BASE_URL = ref(
  "https://aiot.citysafety.com/gasguard/" +
    "gasguard-service-system-app/open/preview/"
);

let loading = ref(true);

onLoad((options) => {
  getDetail("1988807");
});

let data = ref({});
const getDetail = async (id) => {
  data.value = (await getHidangerFlow(id))["data"];
  loading.value = false;
};
</script>
<style lang="scss" scoped>
.detail-box {
  margin-bottom: 30rpx;
  padding: 40rpx 20rpx 0 80rpx;

  .tit {
    margin-bottom: 20rpx;
  }
  .top {
    @include flex-between;
  }

  .con {
    background: $uni-bg-color;
    padding: 20rpx;
    view {
      color: #4b5b6c;
      line-height: 50rpx;
    }
  }
}
</style>
