<template>
  <van-swipe-cell :right-width="160">
    <van-cell-group>
      <view class="data-box">
        <view class="tit">
          <text>{{ data.title }} ({{ data.planCode }}) </text>
          <van-tag :type="data.handleState == 'UNCOMPLETED' ? 'danger' : 'success'">{{ data._handleState }}</van-tag>

        </view>
        <view class="con">
          <view>
            <text class="name">
              {{ data._type }} ({{ data.startDate + "-" + data.endDate }})</text
            >
            <view>创建人: {{ data.planCreator }}</view>
          </view>
          <view class="checkers">
            {{ data.checkers }}
          </view>
        </view>
      </view>
    </van-cell-group>
    <view slot="right" class="right">
      <view class="done" @click="finishPlan(data.uid)">完成</view>
      <view class="del" @click="deletePlan(data.uid)">删除</view>
    </view>
  </van-swipe-cell>
</template>
<script setup lang="ts">
import { checkPlanDelById ,checkPlanFinishById} from "@/api/checkPlan";
import type { CheckPageVo } from "@/api/model/CheckPlan";
import { showToast } from "@/hooks";
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<CheckPageVo>,
    default: {},
  },
});

const deletePlan = async (uid) => {
  let data = await checkPlanDelById({ uid });
  showToast(data.success)
};

const finishPlan = async (uid) => {
  let data = await checkPlanFinishById({ uid });
  showToast(data.success)
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
    }
    .con {
      @include flex-between;
      .name {
        color: $uni-color-primary;
      }
      .checkers {
        width: 100rpx;
      }
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
      background: $uni-color-success;
    }
    .del {
      background: $uni-color-error;
    }
  }
</style>
