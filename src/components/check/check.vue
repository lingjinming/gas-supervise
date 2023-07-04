<template>
  <van-skeleton title avatar row="2" :loading="loading">
    <van-swipe-cell :right-width="160">
      <van-cell-group>
        <view class="data-box">
          <view class="tit">
            <text>{{ data.title + data.planCode }} </text>
          </view>
          <view class="con">
            <view>
              <text class="name">
                {{ data._type }} :{{
                  data.startDate + "~" + data.endDate
                }}</text
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
  </van-skeleton>
</template>
<script setup lang="ts">
import { checkPlanDelById, checkPlanFinishById } from "@/api/checkPlan";
import type { CheckPageVo } from "@/api/model/CheckPlan";
import { showToast } from "@/hooks";
import type { PropType } from "vue";

let loading = ref(true)

onMounted(() => loading.value = !Boolean(props.data.uid))

const props = defineProps({
  data: {
    type: Object as PropType<CheckPageVo>,
    default: {},
  },
});

const deletePlan = async (uid) => {
  let data = await checkPlanDelById({ uid });
  showToast(data.success);
};

const finishPlan = async (uid) => {
  let data = await checkPlanFinishById({ uid });
  showToast(data.success);
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
.right {
  height: 100%;
  @include flex-between;
  width: 320rpx;
  view {
    @include flex-center;
    width: 50%;
    height: 100%;
    color: #fff;
  }
  .done {
    background: $uni-color-primary;
  }
  .del {
    background: $uni-color-error;
  }
}
</style>
