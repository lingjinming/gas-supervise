<template>
  <view class="topic">
    <image class="icon" src="../static/icon_detail.png"></image>
    {{ title }}
  </view>
  <view class="item" v-for="(item) in list" :key="item.checkItem">
    <view class="item-title">{{ item.checkItem }}</view>
    <view class="content" v-for="(content,index) in item.list" :key="index">
      <view class="content-title">{{ content.checkContent }}</view>
      <view class="result" v-if="content.checkResult === 'PASS'">
        <image class="icon" src="../static/icon_check_state_ok.png"></image>合格
      </view>
      <view class="result" v-else @click="goDangerDetail(content)">
        <image class="icon" src="../static/icon_check_state_bad.png"></image>存在隐患
        <uni-icons type="right" class="icon-right"/>
      </view>
    </view>
  </view>
  <view class="place"></view>
</template>
<script setup lang="ts">
import { getSafeCheckTaskByUid } from '@/api/gen/GasSuperviseApi';
import type { SortedDTO,SafeCheckTaskItemDetailDTO } from '@/api/gen/data-contracts'
import { EventType } from '../event'

const list = ref<SortedDTO[]>([]);
const title = ref('')

onLoad((params) => {
  const uid = params?.uid;
  if(!uid) return;
  getSafeCheckTaskByUid(uid).then(result => {
    const data = result.data
    if(data) {
      list.value = data.items;
      // @ts-ignore
      title.value = data._targetType + '安全检查'
    }
  })
}) 

const goDangerDetail = (content: SafeCheckTaskItemDetailDTO) => {
  uni.navigateTo({
    url: `/pages/safeCheck/pages/HidangerDetailPage`,
    success: (res) => {
      res.eventChannel.emit(EventType.SHOW_HIDANGER_DETAIL, { formData: content })
    }
  });
}
</script>
<style lang="scss" scoped>
.topic {
  height: 96rpx;
  margin-top: 22rpx;
  padding-left: 29rpx;
  background: #FFFFFF;
  line-height: 96rpx;
  font-size: 28rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #222222;
  border-bottom: 1rpx solid #E0E0E0;

  .icon {
    // 垂直居中
    display: inline-block;
    vertical-align: middle;
    width: 36rpx;
    height: 36rpx;
    margin-right: 16rpx;
  }
}
.item {
  padding: 29rpx;
  padding-bottom: 1rpx;
  background-color: #FFF;
  margin-bottom: 20rpx;
  .item-title {
    font-size: 28rpx;
    font-weight: 500;
    color: #222222;
    background: linear-gradient(to bottom, transparent 50%, #E1EEFF 50%);
    display: inline-block;
  }
  .content {
    margin: 29rpx 0rpx;
    &:not(:last-child) {
      border-bottom: 1rpx solid #E0E0E0;
      padding-bottom: 25rpx;
    }
    .content-title {
      min-height: 27rpx;
      line-height: 26rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #2A2C32;
    }
    .result {
      height: 30rpx;
      margin-top: 21rpx;
      line-height: 30rpx;
      font-size: 28rpx;
      font-weight: 500;
      color: #666666;
      // icon 垂直居中
      .icon {
        display: inline-block;
        vertical-align:bottom;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
      .icon-right {
        float: right;
        margin-top: 2rpx;
      }
    }
  }
}
.place {
  height: 100rpx;
  width: 100%;
  background-color: #F5F5F5;
}
</style>