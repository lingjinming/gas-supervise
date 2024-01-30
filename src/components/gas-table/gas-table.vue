<template>
<view class="page-warpper">
  <!-- 关键字查询 -->
  <view class="keyword" v-if="keyword">
      <uni-easyinput 
        prefixIcon="search" 
        v-model="query.keyword" 
        @clear="clearKeyword"
        @confirm="search"
        :placeholder="keyword" />
  </view>
  <view class="top">
    <slot name="top" :total="total">
      <text>
        <text class="total">{{ total }}</text>条记录
      </text>
      <view @click="showQuery = true" class="search" v-if="$slots['search']">
        筛选<van-icon name="arrow-down" />
      </view>
    </slot>
  </view>
  <scroll-view
      :style="{ height: scrollViewHeight  }"
      scroll-y="true"
      class="gas-table-sv"
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
    <view class="place" v-if="total">
      {{ loading ? '加载中...' : '没有更多了' }}
    </view>
  </scroll-view>
  <!-- 底部按钮操作 -->
  <view class="opt-bottom" v-if="$slots['bottom']">
    <slot name="bottom"></slot>
  </view>
</view>
<!-- 弹出查询 -->
<van-popup
      :show="showQuery"
      position="top"
      root-portal
      custom-style="padding: 30rpx"
      @close="closeSearch"
    >
    <slot name="search"></slot>
     <!-- 确定 -->
     <view class="search-bottom">
      <button plain="true" @click="resetQuery" class="btn reset">重置</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
</van-popup>
</template>
<script setup lang="ts">
import { useTable } from '@/hooks/useTable';
import type { ApiType } from '@/hooks/useTable';

const props = defineProps({
  /* 接口请求方法 */
  apiFun: {
    type: Function as PropType<ApiType<any>>,
    required: true
  },
  /* 分页查询参数 */
  query: {
    type: Object,
    default: () => ({})
  },
  /* 顶部展示关键字搜索 */
  keyword: {
    type: String,
    default: () => ''
  },
  /* 组件挂载后自动请求分页数据 */
  autoFetch: {
    type: Boolean,
    default: true
  },
  scrollHeight: {
    type: String,
    default: () => ''
  }
});
const instance = getCurrentInstance();
const innerScrollHeight = ref(10);
const scrollViewHeight = computed(() => props.scrollHeight || innerScrollHeight.value + 'px')

const {
  total,
  list,
  search,
  reset,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
  loading
} = useTable<any>(props.query,props.apiFun);





onMounted(() => {
  if(!props.scrollHeight) {
    setupScroll();
  }
  if (props.autoFetch) {
    search();
  }
})

onUnmounted(() => {
  // clear observer
  intersectionObserver?.disconnect();
  intersectionObserver = undefined;
})

const slots = useSlots();
const setupScroll = () => {
  const res = uni.getSystemInfoSync()
  // 窗口高度
  const windowHeight = res.windowHeight;
  let scrollQuery = uni.createSelectorQuery().in(instance).select(".gas-table-sv"); 
  scrollQuery.boundingClientRect((data: any) => {
    if(!data?.width) {
      observerVisibleOnce();
    } else {
      const bottomHeight = slots.bottom ? uni.upx2px(150) : 0;
      innerScrollHeight.value = windowHeight  - data.top - bottomHeight;
    }
  }).exec();
}

let intersectionObserver : UniApp.IntersectionObserver | undefined = undefined;
const observerVisibleOnce = () => {
  intersectionObserver = uni.createIntersectionObserver(instance);
  intersectionObserver.relativeToViewport().observe('.gas-table-sv', (res) => {
    if(res.intersectionRatio > 0) {
      intersectionObserver?.disconnect();
      intersectionObserver = undefined;
      setupScroll();
    }
  })
}

const showQuery = ref(false)
const closeSearch = () => {
  showQuery.value = false
}
const doQuery = () => {
  search();
  showQuery.value = false;
}

const clearKeyword = () => {
  props.query.keyword = '';
  search();
}

const resetQuery = () => {
  props.query.keyword = '';
  showQuery.value = false;
  reset();
}
const closeQuery = () => {
  showQuery.value = false;
}
const openQuery = () => {
  showQuery.value = true;
}

defineExpose({
  doQuery,
  closeQuery,
  openQuery
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

  .place {
    height: 70rpx;
    width: 100%;
    text-align: center;
    line-height: 70rpx;
    color: #a7a7a7;
    
  }
  
}
.opt-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150rpx;
  width: 100%;
  background-color: #fff;
  // 内部元素居中
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-bottom {
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