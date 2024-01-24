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
          <input slot="input" disabled style="width: 100%" :value="form.targetName" placeholder="点击选择" />
        </van-field>
        <van-field required label="企业类型" >
          <input slot="input" disabled v-model="form._targetType"  placeholder="选择或新建企业后自动带入"/>
        </van-field>
        <van-field required label="所属区域" >
          <input slot="input" disabled v-model="form._districtId"  placeholder="选择或新建企业后自动带入"/>
        </van-field>
        <van-field required label="详细地址" >
          <input slot="input" disabled v-model="form.address"  placeholder="选择或新建企业后自动带入"/>
        </van-field>
        <van-picker-new required   label="检查主题" :options="topicOptions" title="检查主题" v-model="topicId" />
        <view class="opts">
          <view class="button" @click="nextStep">下一步</view>
        </view>
      </swiper-item>
      <!-- 填写检查内容 -->
      <swiper-item>
        <CreateSafeCheck :target="form" :topic="topicId"></CreateSafeCheck>
      </swiper-item>
    </swiper>
  </view>
  
</template>
<script setup lang="ts">
import {EventType} from '../event'
import { postSafeCheckTask ,getSafeCheckTopicPage} from '@/api/gen/GasSuperviseApi';
import type {SafeCheckTaskCreateDTO} from '@/api/gen/data-contracts'
import CreateSafeCheck from '../components/CreateSafeCheck.vue';

const topicId = ref('');
const topicOptions = ref<GasOption[]>([]);

const form = ref<SafeCheckTaskCreateDTO&any>({
  type: 'DAILY',
  topicName: '',
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
  if(eventChannel) {
    // 安全检查类型
    eventChannel?.on(EventType.CREATE_SAFE_CHECK, ({ checkType }) => {
      form.value.type = checkType
    });
  }
})

const currentStep = ref(0)
const changeStep = (setp: number) => {
  currentStep.value = setp;
}

const nextStep = () => {
  // 校验是否选择检查对象
  if(!form.value.districtId) {
    uni.showToast({
      title: '请选择检查对象',
      icon: 'none'
    })
    return;
  }
  // 校验是否选择检查主题
  if(!topicId.value) {
    uni.showToast({
      title: '请选择检查主题',
      icon: 'none'
    })
    return;
  }
  changeStep(1);
}

// 选择检查对象
const goSelectTarget = () => {
  uni.navigateTo({
    url: `/pages/safeCheck/pages/SelectTargetPage`,
    events: {
      [EventType.SELECTED_TARGET]: ({target}) => {
        form.value.targetType = target.targetType;
        form.value._targetType = target._targetType;
        form.value.targetName = target.targetName;
        form.value.districtId = target.districtId;
        form.value._districtId = target._districtId;
        form.value.address = target.address;
        form.value.longitude = target.longitude;
        form.value.latitude = target.latitude;

        // 关联检查主题
        getSafeCheckTopicPage({query: {
          paging: false,
          targetType: target.targetType
        }}).then(result => {
          topicOptions.value = result.data.map(item => {
            return {
              text: item.topic,
              value: item.uid
            }
          })
        })
      }
    }
  });
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
</style>