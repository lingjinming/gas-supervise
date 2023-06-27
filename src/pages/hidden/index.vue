<template>
    <view class="top">
        <text>共计{{ state.total }}条隐患</text>
        <text>筛选</text>
    </view>
    <scroll-view
    style="height: calc(100% - 100rpx);"
    scroll-y="true"
    class="scroll-Y"
  >
  <hidden v-for="item in state.list" :key="item.uid" :info="item"></hidden>

  </scroll-view>
</template>
<script setup lang="ts">
import { hidangerPage,type HidangerPgaeVO } from '@/api/hidden';
import { reactive } from 'vue';

let isOrg: boolean = uni.getStorageSync("USER_INFO")["orgType"] != 1;
const state = reactive({
  total: 0,
  list: [] as HidangerPgaeVO[]
})

const featchPage = async () => {
  const {total,data} = await hidangerPage({isOrg});
  state.total = total;
  state.list = data;
}
featchPage()
</script>
<style lang="scss" scoped>
.top{
    line-height: 100rpx;
}
</style>