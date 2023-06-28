<template>
  <view class="hidden-box" @click="showFlow(info.uid as string)">
    <view class="tit">
      <view>
        <van-tag :type="info.level === 'ZD' ? 'danger': info.level == 'JD' ? 'warning' : 'primary'">{{ info._level }}</van-tag>
        <text class="name">{{ info._subjectType + '-' +info._dangerType }}</text>
      </view>
      <text class="ago">{{ info.ago }}</text>
    </view>
    <view class="con">
      <text>{{ info.remark||'暂无描述' }}</text>
    </view>
    <view class="addr">
      <van-icon name="location" />
      {{ info.address }}
    </view>

    <view class="bottom">
      <view>
        <van-icon name="user-o" :size="18"/>
        由<text class="publisher">{{ info.checkBy }}</text>发布
      </view>
      <template v-if=" 'WAIT_HANDLE'.includes(info.state!)">
        <van-button plain hairline round size="mini" type="primary" @click="navigatoReform(info.uid!)">去整改</van-button>
      </template>
      <template v-else >
        <view class="handled">
          已整改
        </view>
      </template>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { HidangerPgaeVO } from '@/api/hidden';
import type { PropType } from 'vue'

const props = defineProps({
  info: {
    type: Object as PropType<HidangerPgaeVO>,
    default: {
      uid: ''
    }
  }
})

// 去整改
const navigatoReform = (uid: string) => {
  uni.navigateTo({
    url: `/pages/hiddenReform/index?uid=${uid}`
  })
}
// 查看流程
const showFlow = (uid: string) => {

}

</script>


<style lang="scss" scoped>
.hidden-box {
  margin: 29rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  border-radius: 6rpx;

  .tit {
    margin-bottom: 25rpx;
    @include flex-between;
    .name {
      margin-left: 13rpx;
      font-size: 30rpx;
      font-family: Microsoft YaHei;
      font-weight: 600;
      color: #222222;
    }
    .ago {
      color: #989898;
    }
  }

  .con {
    color: #222222;
    margin-bottom: 20rpx;
    .name {
      color: $uni-color-primary;
    }
  }
  .addr {
    color: #4B5B6C;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 23rpx;
  }

  .bottom {
    @include flex-between;
    .publisher {
      font-weight: 700;
      margin: 0 10rpx;
    }
    .handled {
      color: $uni-color-success;
      position: relative;
      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -26rpx;
        content: " ";
        height: 16rpx;
        width: 16rpx;
        border-radius: 10rpx;
        background-color: $uni-color-success;
      }
    }
  }
}
</style>
