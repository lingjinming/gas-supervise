<template>
  <view class="page-warpper">
    <view class="keyword">
      <!-- 关键字查询 -->
      <uni-easyinput prefixIcon="search" v-model="state.query.keyword" placeholder="输入企业名称或地址" @confirm="search"></uni-easyinput>
    </view>
    <view class="top">
      <text >共计<text class="total">{{ total }}</text >条隐患</text>
      <view @click="state.showQuery = true" class="search">
        筛选<van-icon name="arrow-down" />
      </view>
    </view>

    <!-- 隐患列表 -->
    <scroll-view
      style="height: calc(100vh - 280rpx);"
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

  </view>
  

  <!-- 搜索面板 -->
  <van-popup
    :show="state.showQuery"
    position="top"
    custom-style="padding: 30rpx"
    root-portal
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

import HiddenPageItem from './HiddenPageItem.vue'
import { getHidangerOrgPage } from '@/api/gen/GasSuperviseApi'
import type { HidangerOrgPageQuery,HidangerOrgPageVO } from '@/api/gen/data-contracts'

import { reactive } from "vue";
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";
import { useTable } from "@/hooks/useTable";

const props = defineProps<{mine: boolean,state: string}>()

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



onMounted(() => {
  console.log('onMounted')
  uni.$on(EventType.DANGER_PAGE_REFRESH, search);
  const fromState = props?.state;
  state.query.mine = props?.mine;
  if(fromState === 'ALL') {
    state.query.state = []
  } else if(fromState === 'UN_HANDLED') {
    state.query.state = ['WAIT_AUDIT','WAIT_HANDLE']
  } else if(fromState === 'HANDLED') {
    state.query.state = ['HANDLED']
  }
  search()
})

onUnmounted(() => {
  console.log('onUnmounted')
  uni.$off(EventType.DANGER_PAGE_REFRESH, search);
})

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
  .page-warpper{
    margin: 0 30rpx;
    .keyword {
      margin-top: 24rpx;
    }
    .top {
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
    .check-page-item {
      // 给最后一个元素 添加底部边距
      &:is(:last-child) {
        margin-bottom: 100rpx
      }
    }
    
  }
  .opts {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 120rpx;
      width: 100%;
      background-color: #fff;
      padding: 30rpx;
      .button {
        width: 90%;
        height: 88rpx;
        border: 1px solid #868686;
        border-radius: 10rpx;

        font-size: 32rpx;
        font-weight: 500;
        color: #222222;
        line-height: 88rpx;
        text-align: center;
        .icon {
          margin-right: 15rpx
        }
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
