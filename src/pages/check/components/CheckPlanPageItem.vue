<template>
  <van-swipe-cell :right-width="160">
    <van-cell-group>
      <view
        class="data-box"
        @click="navigateToDetail(data.uid, data.planCode, $event)"
      >
        <view class="tit">
          <text>{{ data.title + data.planCode }} </text>
        </view>
        <view class="con">
          <view>
            <text class="name">
              {{ data._type }} :{{ data.startDate + "~" + data.endDate }}</text
            >
            <view class="checkers"> 检查人员：{{ data.checkers }} </view>
          </view>

          <view class="bottom">
            <view>
              <van-icon name="user-o" :size="18" /> 由<text class="label">
                {{ data.planCreator }} </text
              >创建</view
            >

            <view
              class="state"
              :class="
                data.handleState == 'UNCOMPLETED'
                  ? 'wait-handle-red'
                  : 'handled'
              "
            >
              {{ data._handleState }}
            </view>
          </view>
        </view>
      </view>
    </van-cell-group>
    <view slot="right" class="right">
      <view class="done" @click="finishPlan(data.uid)">标记已完成</view>
      <view class="del" @click="deletePlan(data.uid)">删除</view>
    </view>
  </van-swipe-cell>
</template>
<script setup lang="ts">
import { deleteHidangerGovCheckPlanByIds ,postHidangerGovCheckPlanFinishById} from '@/api/gen/GasSuperviseApi'
import {EventType} from '../event'

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const navigateToDetail = (uid, planCode, e) => {
  uni.navigateTo({
    url: `/pages/check/pages/CheckPlanDetailPage?uid=${uid}&planCode=${planCode}`,
  });
};
// 删除计划
const deletePlan = async (uid: number) => {
  let result = await deleteHidangerGovCheckPlanByIds(uid);
  if(result.success) {
    uni.showToast({ title: '操作成功', icon: 'none', duration: 1000});
    uni.$emit(EventType.REFRESH_PAGE);
  } else {
    uni.showModal({ title: '提示', content: result.message, showCancel: false, confirmText: '知道了',  success: function (res) { } });
  }
};
// 标记已完成
const finishPlan = async (uid) => {
  let result =  await postHidangerGovCheckPlanFinishById(uid);
  if(result.success) {
    uni.showToast({ title: '操作成功', icon: 'none', duration: 1000});
    uni.$emit(EventType.REFRESH_PAGE);
  } else {
    uni.showModal({ title: '提示', content: result.message, showCancel: false, confirmText: '知道了',  success: function (res) { } });
  }

};


</script>

<style lang="scss" scoped>
.data-box {
  margin: 0 30rpx 30rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  box-shadow: $uni-box-shadow;

  .tit {
    @include flex-between;
    @include label;
    margin: 20rpx 0;
    font-size: 28rpx;
    // 最多一行,超出后用...显示
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .label {
    margin: 0 10rpx;
  }
  .con {
    .name,
    .checkers {
      line-height: 50rpx;
    }
  }
  .bottom {
    line-height: 60rpx;
    @include flex-between;
  }
}
</style>
