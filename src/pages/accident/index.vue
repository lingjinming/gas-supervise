<!-- 事故事件 -->
<template>
  <view class="top">
    <text
      >共计<text class="total">{{ total }}</text
      >条记录</text
    >
    <view @click="state.showQuery = true" class="search">
      筛选<van-icon name="arrow-down" />
    </view>
  </view>
   <!-- 事故事件列表 -->
   <scroll-view
    style="height: 90%"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage"
    refresher-enabled
    :refresher-triggered="triggered"
    @refresherpulling="onRefreshPulling"
    @refresherrefresh="onRefresh"
  >
   <template v-if="total">
      <AccidentPageItem v-for="(item, i) in list" :key="i" :info="item" ></AccidentPageItem>
    </template>
    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
  <!-- 搜索面板 -->
  <van-popup
    :show="state.showQuery"
    position="top"
    custom-style="padding: 30rpx"
    @close="state.showQuery = false"
  >
    <!-- 关键字查询 -->
    <uni-search-bar placeholder="地址查询" cancel-button="none" clearButton="none"  v-model="state.query.keyword" />
    <!-- 事故类型 -->
    <check-group useAll type="sp_accident_type" v-model="state.query.accidentType" title="事故类型"/>
    <!-- 事故级别 -->
    <check-group useAll type="ACCIDENTLEVEL"  v-model="state.query.accidentLevel" title="事故级别"/>
    <!-- 事故场景 -->
    <check-group useAll type="sp_accident_scene" v-model="state.query.accidentScene" title="事故场景"  />

    <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="resetQuery" class="btn reset">重置</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
  </van-popup>
</template>
<script setup lang="ts">
import AccidentPageItem from "./components/AccidentPageItem.vue";
import { useTable } from "@/hooks/useTable";
import {getAccident} from '@/api/gen/GasSuperviseApi'
import type {AccidentPageQuery,AccidentVO} from '@/api/gen/data-contracts'
import { EventType } from "./event";


///accident
const state = reactive({
  // 展示搜索框
  showQuery: false,
  query: <AccidentPageQuery>{
    keyword: undefined,
    accidentScene: [],
    accidentLevel: undefined,
    accidentType: undefined,
  }
})


const {
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
} = useTable<AccidentVO>(state.query, getAccident, { showToast: true });
// 进入页面时加载列表
onLoad((params) => {
  search();
});
// 刷新页面
uni.$on(EventType.LIST_PAGE_REFRESH,function(data){
  doQuery();
})


const resetQuery = () => {
  state.query.keyword = undefined;
  state.query.accidentScene = [];
  state.query.accidentLevel = undefined;
  state.query.accidentType = undefined;
}
const doQuery = () => {
  state.showQuery = false;
  search();
};
</script>
<style lang="scss" scoped>
.top {
  margin: 0 40rpx;
  line-height: 100rpx;
  position: relative;

  .total {
    font-weight: 700;
    padding: 0 8rpx;
  }

  .search {
    position: absolute;
    top: 0rpx;
    bottom: 0rpx;
    right: 0rpx;
    margin: auto;
    width: 129rpx;
    height: 52rpx;
    background-color: #fff;
    text-align: center;
    border-radius: 26rpx;
    line-height: 50rpx;
  }
}
.bottom {
  @include flex-between;
  margin-top: 20rpx;

  .btn {
    border: 0px;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 10px;
  }

  .btn.reset {
    width: 200rpx;
    background: #e8f1ff;
    color: $uni-color-primary;
  }

  .btn.query {
    width: 470rpx;
    background: $uni-color-primary;
    color: #fff;
  }
}
</style>