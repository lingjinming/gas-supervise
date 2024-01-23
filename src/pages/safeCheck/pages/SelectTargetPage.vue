<template>
  <view class="page-warpper">
    <view class="keyword">
      <!-- 关键字查询 -->
      <uni-easyinput prefixIcon="search" v-model="state.query.keyword" placeholder="输入企业名称或地址"
        @confirm="search"></uni-easyinput>
    </view>
    <view class="top">
      <text>
        <text class="total">{{ total }}</text>条记录
      </text>
      <view @click="state.showQuery = true" class="search">
        筛选<van-icon name="arrow-down" />
      </view>
    </view>
    <scroll-view style="height: calc(100vh - 480rpx);" scroll-y="true" class="scroll-Y" @scrolltolower="nextPage"
      refresher-enabled :refresher-triggered="triggered" @refresherpulling="onRefreshPulling"
      @refresherrefresh="onRefresh">
      <template v-if="total">
        <TargetPageItem class="check-page-item" v-for="(item, i) in list" :key="i" :info="item" />
      </template>
      <van-empty v-else description="暂无数据"></van-empty>
    </scroll-view>


  </view>
  <view class="opts">
    <view class="button" >确定</view>
  </view>
</template>
<script lang="ts" setup>
import { getSafeCheckTargetPage } from '@/api/gen/GasSuperviseApi';
import type { SafeCheckTargetDTO, PageRequest } from '@/api/gen/data-contracts'
import { useTable } from '@/hooks/useTable';
import TargetPageItem from '../components/TargetPageItem.vue';

const state = reactive({
  showQuery: false,
  query: <PageRequest>{
    keyword: ''
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
} = useTable<SafeCheckTargetDTO>(state.query, getSafeCheckTargetPage);

onLoad(() => {
  search()
})
</script>
<style lang="scss" scoped>
.page-warpper {
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
    background: #006CFF;
    color: #fff;

    font-size: 32rpx;
    font-weight: 500;
    line-height: 88rpx;
    text-align: center;
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