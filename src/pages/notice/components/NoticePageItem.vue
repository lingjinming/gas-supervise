<template>
  <view v-for="(notice, i) in notices" :key="i" >
    <view class="notice-box" @click="goDetail(notice)">
      <view class="tit">
        <view
          style="
            display: flex;
            align-items: center;
            gap: 10rpx;
            font-size: 30rpx;
            font-weight: 600;
          "
        >
          <image :src="'/static/img/' + notice.type + '.png'" class="icon_img"></image>
          {{ notice.title }}
        </view>

        <text class="time">{{ notice.timestampLively }}</text>
      </view>
      <view class="con">
        <text class="content">{{ notice.content?.content }}</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { MessageContent } from "@/api/gen/data-contracts";
import { NoticeType } from "../enum";
import { postNoticeReadByMsgId } from '@/api/gen/GasSuperviseApi'

type MsgBizType = MessageContent & {timestampLively?: string}
let loading = ref(false);

const props = defineProps({
  notices: {
    type: Array<MsgBizType>,
    default: [],
  },
});

const goDetail = (notice: MsgBizType) => {
  // 没有这个需求,不给看详情
  return;
  // 隐患派单,如果是多个隐患,
  if(notice.type === NoticeType.MsgRiskDispatch) {
    const dangerUids = notice.properties?.dangerUids || [];
    if(!dangerUids.length) return;
    // 如果就一个隐患就跳到隐患详情
    if(dangerUids.length === 1) {
      uni.navigateTo({
        url: `/pages/hidden/pages/HiddenDetailPage?uid=${dangerUids[0]}`,
        success:()=>{
          postNoticeReadByMsgId(notice.id);
        },
      });
    }
    // 多个就跳到隐患列表 
    else {
      uni.navigateTo({
        url: `/pages/hidden/pages/HiddenListPage?dangerUids=${dangerUids.join(',')}`,
      });
    }
  }
}

</script>
<style lang="scss" scoped>
.notice-box {
  background: #fff;
  margin-bottom: 30rpx;
  padding: 20rpx;
  box-shadow: $uni-box-shadow;
  .tit {
    line-height: 48rpx;
    @include flex-between;
    font-size: $uni-font-size-base;
    .icon_img {
      width: 36rpx;
      height: 36rpx;
    }
    .title {
      margin-left: 18rpx;
      width: 80%;
    }
    .time {
      width: 100rpx;
      color: #989898;
      font-size: $uni-font-size-sm;
      white-space: nowrap;
    }
  }
  .con {
    color: #4b5b6c;
    margin: 20rpx 2rpx;
    .name {
      color: $uni-color-primary;
      margin-right: 10rpx;
    }
  }
}
</style>
