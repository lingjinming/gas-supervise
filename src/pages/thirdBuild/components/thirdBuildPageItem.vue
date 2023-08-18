<template>
  <view class="container" @click="goDetail">
    <!-- 左边图片 -->
    <view class="left-item">
      <image class="img" src="https://img.yzcdn.cn/vant/cat.jpeg"></image>
      <view class="tags">
        <van-tag :type="isOk(info.reportState) ? 'success' : 'warning'"> {{ info._reportState }}  </van-tag>
        <van-tag :type="isOk(info.guardState) ? 'success' : 'warning'"> {{ info._guardState }}  </van-tag>
      </view>
    </view>
    <!-- 右边详情 -->
    <view class="right-item">
      <view class="title">
        {{ info._orgId+info._buildType }}
      </view>
      <view class="build-state">{{ info._buildState }}</view>
      <view class="address">
        <van-icon name="location" />
        {{ info.constructionAddress }}
      </view>
      <view class="time">
        计划施工时间:{{ `${info.planTimeStart}~${info.planTimeEnd}` }}
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { ThirdBuildPageVO } from '@/api/generated/data-contracts'
const props = defineProps({
  info: {
    type: Object as PropType<ThirdBuildPageVO>,
    default: {
      uid: "",
    },
  }
});

// 去查看详情
const goDetail = () => {
  uni.navigateTo({
    url: `/pages/thirdBuild/pages/thirdBuildDetailPage?uid=${props.info.uid}`,
  });
}

const isOk = (value: string) => {
  return 'REPORTED,GUARDED'.includes(value)
}
</script>
<style lang="scss" scoped>
.container{
  margin: 0 30rpx 30rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  box-shadow: $uni-box-shadow;
  display: flex;
  height: 200rpx;
  overflow: hidden;

  .left-item{
    width: 40%;
    height: 100%;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
    }
    .tags {
      position: absolute;
      top: -4rpx;
      left: 0;
      & :nth-child(n+2){
        margin-left: 10rpx;
      }
    }
  
  }
  .right-item {
    margin-left: 20rpx;
    flex: 1;
    position: relative;
    .build-state {
      position: absolute;
      top: -25rpx;
      right: -25rpx;
      border: 1rpx solid;
      background-color: aqua;
    }
    .title {
      font-size: 30rpx;
      font-family: Microsoft YaHei;
      font-weight: 600;
      color: #222222;
    }
    .time {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      color: #ccc;
    }
  }
}
</style>