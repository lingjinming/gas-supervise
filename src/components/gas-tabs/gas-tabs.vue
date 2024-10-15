<template>

  <view class="tabs-box">
    <view v-for="(item, index) in tabs" :key="item.key" class="tab-name" :class="{ active: currentStep == index }"
      @click="changeStep(index)">
      {{ item.title }}
    </view>
  </view>
  <view class="swiper-container">
    <view class="tabs-container" :style="{ transform: `translateX(-${scrollLeft}px)` }">
      <slot name="default"></slot>
    </view>
  </view>

</template>

<script setup lang="ts">
import { provide } from 'vue'
import { getRect } from '@/utils/index'

type Tab = {
  title: string,
  key: string
}
const instance = getCurrentInstance();
const currentStep = ref(0);
const scrollLeft = ref(0);
const active = ref('');
const tabs = ref<Tab[]>([])
const containerWidth = ref(0);
onMounted(() => {
  nextTick(() => {
    getRect(instance, '.swiper-container').then((rect: any) => {
      containerWidth.value = rect.width;
    });
  })
})


watch(currentStep, () => {
  let currentIndex = currentStep.value;
  const offsetLeft = currentIndex * containerWidth.value;
  scrollLeft.value = offsetLeft;
})

const changeStep = (index: number) => {
  currentStep.value = index;
  active.value = tabs.value[index].key;
}
provide('gas-tabs', {
  active: active,
  addMe(key: string, title: string) {
    tabs.value.push({ title, key })
  },
})
</script>
<style lang="scss" scoped>
.tabs-box {
  height: 96rpx;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: space-around;
  line-height: 100rpx;
  background: #fff;

  .tab-name {
    flex: 1;
    text-align: center;

    &.active {
      font-weight: 700;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 70%;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4rpx;
        background-color: $uni-color-primary;
      }

    }
  }

  .active {
    color: $uni-color-primary;
  }
}

.swiper-container {
  height: calc(100% - 120rpx);
  overflow: hidden;

  .tabs-container {
    display: flex;
    height: 100%;
    width: 10000rpx;
    flex-direction: row;
    overflow-x: auto;
    transition: all .2s ease-in-out;
  }
}
</style>
