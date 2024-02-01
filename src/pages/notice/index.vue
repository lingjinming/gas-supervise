import { getNotice } from "@/api/notice";

<template>
  <scroll-view
    style="height: 100%"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage"
  >
    <view v-if="list.length" style="padding: 0 20rpx">
      <NoticePageItem :notices="list" />
    </view>
    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
</template>
<script setup lang="ts">
import NoticePageItem from './components/NoticePageItem.vue'
import {  useNoticeRepository } from ".";

const {list,nextPage,search} = useNoticeRepository();

onShow(search);

onPullDownRefresh(() => search());

</script>
