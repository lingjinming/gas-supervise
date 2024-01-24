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
      <template v-if="total" v-for="(item, index) in list" :key="index">
        <view @click.capture.stop="selectTarget(item,index)">
          <TargetPageItem class="page-item"  :info="item">
            <template #select>
              <template v-if="currentSelected === index">
                <van-icon 
                  size="36rpx"
                  color="#fff"
                  custom-style="margin-right:20rpx;top:4rpx;background: #006CFF;border-radius: 50%;;border: 2rpx solid #006CFF;"
                  name="success"
                />
              </template>
              <template v-else>
                <van-icon 
                color="#fff"
                size="36rpx"
                custom-style="margin-right:20rpx;top:4rpx;background: rgba(0,108,255,0.1);border-radius: 50%;border: 2rpx solid #006CFF;"
                name="circle" 
              />
              </template>
              
            </template>
        </TargetPageItem>
        </view>
      </template>
      <van-empty v-else description="暂无数据"></van-empty>
    </scroll-view>


  </view>
  <view class="opts">
    <view class="button" @click="selectOrCreate">{{ isSelected ? '确定' : '新建检查对象' }}</view>
  </view>
</template>
<script lang="ts" setup>
import { getSafeCheckTargetPage } from '@/api/gen/GasSuperviseApi';
import type { SafeCheckTargetDTO, PageRequest } from '@/api/gen/data-contracts'
import { useTable } from '@/hooks/useTable';
import TargetPageItem from '../components/TargetPageItem.vue';
import {EventType} from '../event'

type PageItemType = SafeCheckTargetDTO&{selected?: boolean,_targetType?: string}

const state = reactive({
  showQuery: false,
  query: <PageRequest>{
    keyword: ''
  },
})
const {
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
} = useTable<PageItemType>(state.query, getSafeCheckTargetPage);

let eventChannel:UniApp.EventChannel|null = null;
onLoad(() => {
  search();
  const _this = getCurrentInstance();
  // @ts-ignore
  eventChannel = _this!.ctx.getOpenerEventChannel();
})



const currentSelected = ref<number>(-1)
const isSelected = computed(() => currentSelected.value !== -1)
const selectTarget = (target: PageItemType,index: number) => {
  if(currentSelected.value === index) {
    currentSelected.value = -1;
  } else {
    currentSelected.value = index
  }
}

const selectOrCreate = () => {
  // 选中了检查对象
  if(isSelected.value) {
    const target = list.value[currentSelected.value]
    sendBack(target);
  }
  // 去新建检查对象
  else {
    uni.navigateTo({
      url: '/pages/safeCheck/pages/CreateTargetPage',
      events: {
        // 创建完成直接返回
        [EventType.CREATE_TARGET]: ({ target }) => {
          sendBack(target);
        }
      }
    })
  } 
}

const sendBack = (target: PageItemType) => {
  uni.navigateBack();
  eventChannel && eventChannel.emit(EventType.SELECTED_TARGET, { target });
}
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