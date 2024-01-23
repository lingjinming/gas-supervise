<template>
  <!-- 操作步骤 -->
  <view class="step-box">
    <van-icon name="arrow" custom-style="position:absolute;left:50%;transform:translateX(-50%)" />
    <view @click="changeStep(0)" :class="[currentStep === 0 ? 'act' : '','item']">
      <van-icon class="icon" color="#fff" name="aim" />选择检查对象
    </view>
    <view @click="changeStep(1)" :class="[currentStep === 1 ? 'act' : '','item']">
      <van-icon class="icon" color="#fff" name="edit" />填写检查内容
    </view>
  </view>
  <view class="swiper-container">
    <swiper 
      class="swiper" 
      :disable-touch="true" 
      :circular="false" 
      :indicator-dots="false" 
      :autoplay="false"
      :current="currentStep" 
      @change="changeStep($event.detail.current)">
      <!-- 选择检查对象 -->
      <swiper-item class="target">
        <van-field required label="检查对象" @click-input="goSelectTarget"  right-icon="arrow" >
          <input slot="input" disabled style="width: 100%" :value="form._targetType" placeholder="点击选择" />
        </van-field>
        <van-field required label="企业类型" >
          <input slot="input" disabled v-model="form.targetType"  placeholder="选择或新建企业和自动带入"/>
        </van-field>
        <van-field required label="所属区域" >
          <input slot="input" disabled v-model="form._districtId"  placeholder="选择或新建企业和自动带入"/>
        </van-field>
        <van-field required label="详细地址" >
          <input slot="input" disabled v-model="form.address"  placeholder="选择或新建企业和自动带入"/>
        </van-field>
        <van-field required label="检查主题" @click="goSelectTopic" right-icon="arrow">
          <input slot="input" disabled v-model="form.address"  placeholder="点击选择"  />
        </van-field>
      </swiper-item>
      <!-- 填写检查内容 -->
      <swiper-item>
        b
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup lang="ts">
import {EventType} from '../event'
import { postSafeCheckTask } from '@/api/gen/GasSuperviseApi';
import type {SafeCheckTaskCreateDTO,CheckTaskItem} from '@/api/gen/data-contracts'

const form = ref<SafeCheckTaskCreateDTO&{_targetType: string,_districtId: string}>({
  type: 'DAILY',
  targetType: '',
  _targetType: '',
  targetName: '',
  _districtId: '',
  districtId: '',
  address: '',
  longitude: 0,
  latitude: 0,
  checkItems: []
})

onLoad((params) => {
  const _this = getCurrentInstance();
  // @ts-ignore
  const eventChannel = _this!.ctx.getOpenerEventChannel();
  eventChannel && eventChannel.on(EventType.CREATE_SAFE_CHECK, ({ checkType }) => {
    form.value.type = checkType
  });
})

const currentStep = ref(0)
const changeStep = (setp: number) => {
  currentStep.value = setp;
}

// 选择检查对象
const goSelectTarget = () => {

}
// 选择检查主题
const goSelectTopic = () => {

}
</script>
<style lang="scss" scoped>
.step-box {
  height: 96rpx;
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  line-height: 100rpx;
  background: #fff;

  .item {
    width: 50%;
    text-align: center;
    .icon {
      width: 36rpx;
      height: 36rpx;
      background: #C2C3C4;
      border-radius: 50%;
      margin-right: 15rpx;
    }
  }
  .act {
    color: $uni-color-primary;
    .icon {
      background: $uni-color-primary;
    }
  }
}
.swiper-container {
  height: calc(100% - 120rpx);
  overflow: hidden;

  .swiper {
    height: 100%;
  }
}
</style>