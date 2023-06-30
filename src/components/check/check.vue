<template>
  <view class="data-box">
    <van-skeleton
    title
    avatar
    row="2"
    :loading="loading"
  >
    <van-swipe-cell :right-width="100" >
      <van-cell-group>
        <view class="left">
          <view class="tit">
              <text>{{ data.title }} ({{ data.planCode }}) </text>
              <text>{{ data._handleState }} </text>
          </view>
          <view class="con">
            <view>
              <text class="name"> {{ data._type }} ({{ data.startDate +'-'+ data.endDate}})</text>
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
    </van-skeleton>
  </view>
</template>
<script setup lang="ts">
import { checkPlanDelById, checkPlanFinishById, type CheckVo } from "@/api/hidden";
import type { PropType } from "vue";

let loading = ref(true)

setTimeout(() => {
  loading.value = false
},500)
const props = defineProps({
  data: {
    type: Object as PropType<CheckVo>,
    default: {},
  },
});
const emits = defineEmits(['refresh'])


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
  box-shadow: $uni-box-shadow;
  margin-bottom: 20rpx;
  margin: 20rpx;
    border-radius: 10rpx;
  .left {
    flex: 1;
    padding: 30rpx;

    .tit {
      @include flex-between;
    }
    .con {
      @include flex-between;
      .name {
        color: $uni-color-primary;
      }
      .checkers{
        width: 100rpx;
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
      color: #fff;
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
