<template>
  <view class="page-warpper">
    <view class="keyword">
      <!-- 关键字查询 -->
      <!-- <uni-search-bar placeholder="输入企业名称或地址" bgColor="#fff" cancel-button="none" clearButton="none"  v-model="state.query.keyword" /> -->
      <uni-easyinput prefixIcon="search" v-model="state.query.keyword" placeholder="输入企业名称或地址" @confirm="search"></uni-easyinput>
    </view>
    <view class="top">
      <text>
        <text class="total">{{ total }}</text>条检查记录
      </text>
      <view @click="state.showQuery = true" class="search">
        筛选<van-icon name="arrow-down" />
      </view>
    </view>
    <scroll-view
      style="height: calc(100vh - 480rpx);"
      scroll-y="true"
      class="scroll-Y"
      @scrolltolower="nextPage"
      refresher-enabled
      :refresher-triggered="triggered"
      @refresherpulling="onRefreshPulling"
      @refresherrefresh="onRefresh"
    >
      <template v-if="total">
        <SafeCheckTaskPageItem class="check-page-item" v-for="(item, i) in list" :key="i" :info="item" ></SafeCheckTaskPageItem>
      </template>
      <van-empty v-else description="暂无数据"></van-empty>
    </scroll-view>
    
  </view>
  <view class="opts">
    <view class="button" @click="goCreateSafeCheck"><van-icon name="plus" class="icon"/>新建检查</view>
  </view>
   <!-- 搜索面板 -->
   <van-popup
      :show="state.showQuery"
      position="top"
      z-index="9999"
      root-portal
      custom-style="padding: 30rpx"
      @close="closeSearch"
    >
    <!-- 所属区域 -->
    <check-group
      useAll
      v-model="state.query.districtId"
      title="所属区域"
      type="district"
    ></check-group>
    <!-- 企业类型 -->
    <check-group
      useAll
      v-model="state.query.targetType"
      title="企业类型"
      type="SAFE_CHECK_TARGET_TYPE"
    ></check-group>
    <!-- 是否有隐患 -->
    <check-group
      useAll
      v-model="state.query.checkState"
      title="检查结果"
      type="SAFE_CHECK_TASK_STATE"
    ></check-group>
      <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="resetQuery" class="btn reset">重置</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
  </van-popup>
</template>
<script setup lang="ts">
import SafeCheckTaskPageItem from './PageItem.vue'
import { useTable } from '@/hooks/useTable';
import { getSafeCheckTaskPage } from '@/api/gen/GasSuperviseApi'
import type { SafeCheckTaskPageQuery,SafeCheckTaskPageVO } from '@/api/gen/data-contracts'
import { userStore } from '@/state';
import {EventType} from '../event'

const store = userStore();
const props = defineProps<{checkType: string,mine: boolean}>()
const state = reactive({
  showQuery: false,
  query: <SafeCheckTaskPageQuery>{
    keyword: '',
    targetType: [],
    checkState: [],
    districtId: '',
    checkType: [],
    mine: props.mine,
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
} = useTable<SafeCheckTaskPageVO>(state.query,getSafeCheckTaskPage);
watch(() => props.checkType,(newVal) => {
  if(newVal) {
    // @ts-ignore
    state.query.checkType = [newVal]
    search()
  }
})

const resetQuery = () => {
  state.query.keyword = '';
  state.query.targetType = [];
  state.query.checkState = [];
  // @ts-ignore
  state.query.districtId = [];
}
const doQuery = () => {
  search();
  state.showQuery = false;
}

const closeSearch = () => {
  state.showQuery = false;
}

const goCreateSafeCheck = () => {
  uni.navigateTo({
    url: `/pages/safeCheck/pages/CreatePage`,
    success: (res) => {
      res.eventChannel.emit(EventType.CREATE_SAFE_CHECK, { checkType: props.checkType });
    }
  });
}

onLoad(() => {
  uni.$on(EventType.REFRESH_PAGE,doQuery)
})
onUnload(() => {
  uni.$off(EventType.REFRESH_PAGE,doQuery)
})
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