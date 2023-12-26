<template>
  <view class="top">
    <text
      >共计<text class="total">{{ total }}</text
      >条隐患</text
    >
    <view @click="state.showQuery = true" class="search">
      筛选<van-icon name="arrow-down" />
    </view>
  </view>
  <!-- 隐患列表 -->
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
      <HiddenPageItem v-for="(item, i) in list" :key="i" :info="item" ></HiddenPageItem>
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
    <!-- 隐患类型 -->
    <van-cascader-new
      dicType="RISK_SUBJECT_TYPE_TREE"
      label="隐患类别"
      title="隐患类别"
      v-model="state.query.dangerType"
      v-model:subjectType="state.query.subjectType"
    />
    <!-- 所属企业(政府用户可见) -->
    <van-picker-new
      v-if="!isOrg"
      dicType="org"
      label="所属企业"
      title="上报企业"
      v-model="state.query.orgId"
    />
    <!-- 隐患状态 -->
    <check-group
      useAll
      v-model="state.query.state"
      title="隐患状态"
      :options="[
        { label: '待整改', value: 'WAIT_HANDLE' },
        { label: '已整改', value: 'WAIT_AUDIT,HANDLED' },
      ]"
    >
    </check-group>
    <!-- 隐患来源 -->
    <check-group
      useAll
      type="RISK_DANGER_SOURCE"
      v-model="state.query.dangerSource"
      title="隐患来源"
    ></check-group>
    <!-- 隐患级别 -->
    <check-group
      useAll
      v-model="state.query.level"
      title="隐患级别"
      type="RISK_DANGER_LEVEL"
    ></check-group>

    <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="cancel" class="btn cancel">取消</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
  </van-popup>
</template>

<script setup lang="ts">

import HiddenPageItem from './components/HiddenPageItem.vue'
import { getHidangerOrgPage } from '@/api/gen/GasSuperviseApi'
import type { HidangerOrgPageQuery,HidangerOrgPageVO } from '@/api/gen/data-contracts'

import { reactive } from "vue";
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";
import { useTable } from "@/hooks/useTable";

const store = userStore();

const isOrg: boolean = store.isOrgUser;
const state = reactive({
  showQuery: false,
  query: <HidangerOrgPageQuery>{
    page: 1,
    size: 10,
    planCode: "",
    state: [],
    orgId: "",
    dangerSource: [],
    level: [],
    dangerType: "",
    dangerSubType: "",
  }
});


const {
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
} = useTable<HidangerOrgPageVO>(state.query, getHidangerOrgPage, { showToast: true });

uni.$on(EventType.DANGER_PAGE_REFRESH, () => {
  search();
});

onLoad((params) => {
  search();
});


const cancel = () => {
  state.showQuery = false;
};

// 关闭查询面板/点击确定 执行查询
const doQuery = async () => {
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
.step-box {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 100rpx;
  background: #fff;
  gap: 85rpx;
  .act {
    color: $uni-color-primary;
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
.remark {
  width: 100%;
  padding: 20rpx 30rpx;
}
</style>
