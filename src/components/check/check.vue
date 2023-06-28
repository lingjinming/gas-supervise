<template>
  <!-- <view > -->
    <van-swipe-cell :right-width="100" class="data-box">
      <van-cell-group>
        <view class="left">
          <view class="tit">
              <text>{{ data.title }} ({{ data.planCode }}) </text>
              <text>{{ data._handleState }} </text>
          </view>
          <view class="con">
            <text class="name"> {{ data._type }} ({{ data.startDate +'-'+ data.endDate}})</text>
            <view>检查人员 {{ data.checkers }}</view>
          </view>
        </view>
      </van-cell-group>
      <view slot="right" class="right">
        <view class="done" @click="finishPlan(data.uid)">完成</view>
        <view class="del" @click="deletePlan(data.uid)">删除</view>
      </view>
    </van-swipe-cell>
  <!-- </view> -->
</template>
<script setup lang="ts">
import { checkPlanDelById, checkPlanFinishById, type CheckVo } from "@/api/hidden";
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<CheckVo>,
    default: {},
  },
});
const emits = defineEmits(['refresh'])

console.log(props.data)

const deletePlan = async (uid) => {
  let data = await checkPlanDelById({uid});
  if(data.success){
    emits('refresh')
  }
};

const finishPlan = async (uid) => {
  let data = await checkPlanFinishById({uid});
  if(data.success){
    emits('refresh')
  }
};


</script>

<style lang="scss" scoped>
.data-box {
  background: #fff;
  margin-bottom: 20rpx;
  .left {
    flex: 1;
    padding: 30rpx;

    .tit {
      @include flex-between;
    }
    .con {
      .name {
        color: $uni-color-primary;
      }
    }
  }
  .right {
    height: 100%;
    @include flex-between;
    width: 200rpx;
    view{
      @include flex-center;
      width: 50%;
      height: 100%;
    }
    .done {
      background: $uni-color-success;
    }
    .del {
      background: $uni-color-error;
    }
  }
}
</style>
