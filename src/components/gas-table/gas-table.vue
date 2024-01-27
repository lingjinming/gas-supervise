<template>
<view class="page-warpper">
  <view class="keyword">
      <!-- 关键字查询 -->
      <uni-easyinput prefixIcon="search"  placeholder="输入企业名称或地址" ></uni-easyinput>
  </view>
  <view class="top">
    <slot name="top" :total="total">
      <text>
        <text class="total">{{ total }}</text>条检查记录
      </text>
      <view @click="showQuery = true" class="search">
        筛选<van-icon name="arrow-down" />
      </view>
    </slot>
  </view>
  <scroll-view
      :style="listHeight"
      scroll-y="true"
      class="scroll-Y"
      @scrolltolower="nextPage"
      refresher-enabled
      :refresher-triggered="triggered"
      @refresherpulling="onRefreshPulling"
      @refresherrefresh="onRefresh"
    >
    <van-empty  v-if="!total" description="暂无数据"></van-empty>
    <view v-for="(item, i) in list" :key="i" >
      <slot name="item" :info="item"></slot>
    </view>
      
  </scroll-view>
</view>
<slot name="bottom"> </slot>
<van-popup
      :show="showQuery"
      position="top"
      root-portal
      custom-style="padding: 30rpx"
      @close="closeSearch"
    >
    <slot name="search"></slot>
     <!-- 确定 -->
     <view class="bottom">
      <button plain="true"  class="btn reset">重置</button>
      <button plain="true"  class="btn query">查询</button>
    </view>
</van-popup>
</template>
<script setup lang="ts">
import { useTable } from '@/hooks/useTable';
import type { ApiType } from '@/hooks/useTable';
import { useSlots } from 'vue';
const props = defineProps({
  apiFun: {
    type: Function as PropType<ApiType<any>>,
    required: true
  },
  query: {
    type: Object,
    default: () => ({})
  },
  autoFetch: {
    type: Boolean,
    default: true
  }
});

const showQuery = ref(false)

const slots = useSlots();
const listHeight = computed(() => {
  if(!slots['bottom']) {
    return 'height: 75vh;'
  }
  return 'height: 50vh;'
})
const {
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
} = useTable<any>(props.query,props.apiFun);

onMounted(() => {
  if (props.autoFetch) {
    search();
  }
})

const closeSearch = () => {
  showQuery.value = false
}

defineExpose({
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
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