<template>
  <!-- <view > -->
    <van-swipe-cell :right-width="100" class="notice-box" v-for="(notice, i) in notices" :key="i">
      <van-cell-group>
        <view class="left">
          <view class="tit">
            <text>通知</text>
            <text>{{ notice.sendTime }}</text>
          </view>
          <view class="con">
            <text class="name"> {{ notice.createBy }} </text>
            <text>{{ notice.content }}</text>
          </view>
        </view>
      </van-cell-group>
      <view slot="right" class="right">
        <view class="done">已完成</view>
        <view class="del" @click="deletePlan(notice.uid)">删除</view>
      </view>
    </van-swipe-cell>
  <!-- </view> -->
</template>
<script setup lang="ts">
import { checkPlanDelById, getNotice } from "@/api/hidden";
const notices = ref([]);

const props = defineProps({
  num: {
    type: Number,
    default: 0,
  },
});
const getNoticeFn = async () => {
  let data = (
    await getNotice({
      recipient: uni.getStorageSync("USER_INFO")["userId"],
    })
  )["data"];

  if (props.num) {
    notices.value = data.slice(0, props.num);
  } else {
    notices.value = data;
  }
};

const deletePlan = async (uid) => {
  let data = await checkPlanDelById(uid);
};

onMounted(() => {
  getNoticeFn();
});
</script>

<style lang="scss" scoped>
.notice-box {
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200rpx;
    .done {
      background: rgb(0, 255, 213);
    }
    .del {
      background: red;
    }
  }
}
</style>
