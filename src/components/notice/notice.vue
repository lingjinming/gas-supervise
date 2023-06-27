
<template>

 <van-swipe-cell :right-width="50" name="示例" class="notice-box" v-for="(notice,i) in notices" :key="i">
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
        删除
      </view>
  </van-swipe-cell> 
</template>
<script setup lang="ts">
import { getNotice } from "@/api/hidden";
const notices = ref([]);

const props = defineProps({
  num: {
    type: Number,
    default:0
  },
});
const getNoticeFn = async () => {
  let data = (await getNotice({
    recipient:uni.getStorageSync('USER_INFO')['userId']
  }))["data"];

  if(props.num){
    notices.value = data.slice(0,props.num)
  }else{
    notices.value = data
  }
};

onMounted(() => {
  getNoticeFn();

})
</script>

<style lang="scss" scoped>
.notice-box {


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
    background: red;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
  }
}
</style>
