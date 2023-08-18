<template>
  <view  class="top">
    <text>
      共计
      <text class="total">{{ total }}</text>
      条三方施工记录
    </text>
    <view @click="state.showQuery = true" class="search">
      筛选<van-icon name="arrow-down" />
    </view>
  </view>
  <!-- 三方施工列表 -->
  <scroll-view
    style="height: 100%"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextPage"
    :refresher-triggered="triggered"
    @refresherpulling="onRefreshPulling"
    @refresherrefresh="onRefresh"
  >
    <template v-if="total">
      <ThirdBuildPageItem
        v-for="(item, i) in list"
        :key="i"
        :info="item"
      ></ThirdBuildPageItem>
    </template>
    <van-empty v-else description="暂无数据"></van-empty>
  </scroll-view>
  <!-- 搜索面板 -->
  <van-popup
    :show="state.showQuery"
    position="top"
    custom-style="padding: 30rpx"
    @close="cancel"
  >
    <!-- 施工类型 -->
    <check-group
      useAll
      v-model="state.query.buildType"
      title="施工类型"
      type="THIRD_BUILD_TYPE"
    ></check-group>
    <!-- 施工状态 -->
    <check-group
      useAll
      v-model="state.query.buildStates"
      title="施工状态"
      type="RISK_THIRD_BUILD_STATE"
    ></check-group>
    <!-- 交底状态 -->
    <check-group
      useAll
      v-model="state.query.reportStates"
      title="交底状态"
      type="RISK_THIRD_REPORT_STATE"
    ></check-group>
    <!-- 看护状态 -->
    <check-group
      useAll
      v-model="state.query.guardStates"
      title="看护状态"
      type="RISK_THIRD_GUARD_STATE"
    ></check-group>
    <!-- 所属企业(政府用户可见) -->
    <van-picker-new
      v-if="!isOrg"
      dicType="org"
      label="所属企业"
      title="上报企业"
      v-model="state.query.orgId"
    />

    <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="cancel" class="btn cancel">取消</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
  </van-popup>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { userStore } from "@/state";
import { pageQuery } from '@/api/generated/ThirdBuild';
import { useTable } from '@/hooks/useTable';
import type { ThirdBuildPageVO ,ThirdBuildPageQuery} from '@/api/generated/data-contracts'
import ThirdBuildPageItem from './components/thirdBuildPageItem.vue'

const store = userStore();
const isOrg: boolean = store.isOrgUser;
const state = reactive({
  showQuery: false,
  query: <ThirdBuildPageQuery>{
    page: 1,
    size: 10
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
} = useTable<ThirdBuildPageVO>(state.query,pageQuery);
onLoad(() => {
  search()
})
const doQuery = () => {
  search();
  state.showQuery = false;
}
const cancel = () => {
  state.showQuery = false;
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
    width: 333rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 10px;
  }

  .btn.cancel {
    background: #e8f1ff;
    color: $uni-color-primary;
  }

  .btn.query {
    background: $uni-color-primary;
    color: #fff;
  }
}
</style>