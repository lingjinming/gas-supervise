<template>
  <van-skeleton
    title
    avatar
    row="2"
    :loading="loading"
    :right-width="50"
    v-for="(notice, i) in notices"
    :key="i"
  >
    <van-swipe-cell :right-width="0">
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
            <van-icon
              :name="'/static/img/' + notice.type + '.png'"
              size="36rpx"
            />{{ notice.title }}
          </view>

          <text class="time">{{ notice.timestampLively }}</text>
        </view>
        <view class="con">
          <text class="content">{{ notice.content?.content }}</text>
        </view>
      </view>
      <!-- <view slot="right" class="right">
      <view class="del" @click="del(notice)">删除</view>
    </view> -->
    </van-swipe-cell>
  </van-skeleton>
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
