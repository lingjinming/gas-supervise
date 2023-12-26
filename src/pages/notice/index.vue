import { getNotice } from "@/api/notice";

<template>
  <scroll-view
    style="height: 100%"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage"
  >
    <view v-if="notices.length" style="padding: 0 20rpx">
      <NoticePageItem :notices="notices" />
    </view>
    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
</template>
<script setup lang="ts">
import NoticePageItem from './components/NoticePageItem.vue'
import { EventType } from "@/enums/eventType";
import { getNoticeFn, notices, nextPage } from ".";


onShow(() => {
  console.log("notice onShow");

  uni.$on(EventType.NOTICE_REFRESH, () => getNoticeFn());

  getNoticeFn(true);
});
// onUnmounted(() => {
//   console.log("notice onUnmounted");
//   uni.$off(EventType.NOTICE_REFRESH);
// });
onPullDownRefresh(() => getNoticeFn());

</script>
