<template>
  
  <view class="container">
    <van-picker-new
        dicType="SERVER_CONFIG"
        label="服务器"
        title="服务器"
        v-model="reportForm.level"
      />
<!-- 
    <van-skeleton title avatar row="3" :loading="loading" class="notice-box">
      <view class="left">
        <view class="tit">
          <text>通知</text>
          <text>1</text>
        </view>
        <view class="con">
          <text class="name"> 2 </text>
          <text>4</text>
        </view>
      </view>
</van-skeleton> -->

  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addHidden, reformHidangerById, type req_addHidden } from "../../api/hidden";
let loading = ref(true)
let uid = ref('')
let reportForm = ref({
  uid:'',
});

onLoad(options => {
  uid.value = options.uid
})




</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
</style>
