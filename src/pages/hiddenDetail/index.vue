<template>
    <scroll-view
    style="height: 100%;padding-bottom: 100rpx;"
    scroll-y="true"
    class="scroll-Y container"
  >
  <van-skeleton
      title
      avatar
      row="3"
      :loading="loading"
      v-for="(val, key,i) in data"
      :key="i"
    >
      <view class="detail-box">
        <view class="tit">
          <view class="top">
            <view>
              <van-tag :type="val.level === 'ZD' ? 'danger': val.level == 'JD' ? 'warning' : 'primary'">{{ val._level }}</van-tag>

<text style="margin-left: 10rpx;" class="fs16">{{ val.title }}</text>
            </view>
  
            <text class="fs12">{{ val.stageTime }}</text>
          </view>
          <view class="header">
            <image
              style="width: 50rpx;height: 50rpx;"
              src="../../static/img/header.png"
              mode="scaleToFill"
            />
             {{ val.operator }}
            </view>
        </view>
        <view class="con">
          <view class="remark">{{ val.remark }}</view>
          <view class="region-imgBox" v-if="val.fileIds && val.fileIds.length">
            <region-img
              v-for="img in val.fileIds"
              :key="img"
              region="test"
              :id="img"
            />
          </view>
   
          <template v-if="key=='push'">
          <view >隐患类型: {{ val._subjectType + val._dangerType }}</view>
          <view>整改单位: {{ val.operatorOrg }}</view>
          <view>详细地址: {{ val.address }}</view>
        </template>
        </view>
      </view>
    </van-skeleton>
  </scroll-view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { getHidangerFlow } from "../../api/hidden";

let loading = ref(true);

onLoad((options) => {
  getDetail(options.uid);
});

let data = ref({});
const getDetail = async (id) => {
  data.value = (await getHidangerFlow(id))["data"];
  loading.value = false;
};
</script>
<style lang="scss" scoped>
.detail-box {
  padding: 40rpx 40rpx 40rpx 80rpx;

  .tit {
    margin-bottom: 20rpx;
  }
  .header{
    display: flex;
    align-items: center;
    gap:20rpx;
    margin: 20rpx 0;
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
.remark{
  color: $uni-text-color !important;
  font-weight: 600;
}
.region-imgBox{
  overflow-x: auto;
  @include flex-between;
}
</style>
