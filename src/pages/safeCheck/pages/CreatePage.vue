<template>
  <!-- 操作步骤 -->
  <view class="step-box">
    <view :class="[currentStep >= 0 ? 'act' : '','item']">
      <van-icon class="icon" color="#fff" name="aim" />选择检查对象
    </view>
    <van-icon name="arrow" class="arrow" />
    <view  :class="[currentStep >= 1 ? 'act' : '','item']">
      <van-icon class="icon" color="#fff" name="edit" />填写检查内容
    </view>
    <!-- 三方安全评价多一个步骤 -->
    <template v-if="isThird">
      <van-icon name="arrow"  />
      <view :class="[currentStep >= 2 ? 'act' : '','item']">
        <van-icon class="icon" color="#fff" name="award-o" />填写检查评价
      </view>
    </template>
  </view>
  <view class="swiper-container">
    <swiper 
      class="swiper" 
      :disable-touch="true"
      :touchable="false"
      :circular="false" 
      :indicator-dots="false" 
      :autoplay="false"
      :current="currentStep" 
      @change="changeStep($event.detail.current)">
      <!-- 选择检查对象 -->
      <swiper-item @touchmove.stop="stopTouchMove" class="target">
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
          <view class="button confirm" @click="goToDoCheck">下一步</view>
        </view>
      </swiper-item>
      <!-- 填写检查内容 -->
      <swiper-item @touchmove.stop="stopTouchMove">
        <CreateSafeCheck :target="form" :topic="topicId" @complate="checkComplate" @goback="changeStep(0)"></CreateSafeCheck>
      </swiper-item>
      <!-- 第三方评价 -->
      <template v-if="isThird">
        <swiper-item @touchmove.stop="stopTouchMove">
          <view class="third">
            <van-picker-new required  :options="levelOptions" label="安全等级"  title="安全等级" v-model="form.safeLevel" />
            <view class="sub-item-title">评价总结</view>
            <view style="margin: 0rpx 30rpx;">
              <uni-easyinput  type="textarea" v-model="form.safeSummary" placeholder="请输入" maxlength="300"/>
            </view>
          </view>
          <view class="opts">
            <view class="button cancel" @click="changeStep(1)">上一步</view>
            <view class="button confirm" @click="thirdCheckComplate">检查完成</view>
          </view>
        </swiper-item>
      </template>
    </swiper>
  </view>
  
</template>
<script setup lang="ts">
import { EventType } from '../event'
import { getSafeCheckTopicPage,postSafeCheckTask} from '@/api/gen/GasSuperviseApi';
import type {SafeCheckTaskCreateDTO} from '@/api/gen/data-contracts'
import CreateSafeCheck from '../components/CreateSafeCheck.vue';
import { useLoading } from '@/hooks/useLoading';

const topicId = ref('');
const topicOptions = ref<GasOption[]>([]);

type TasBizType = SafeCheckTaskCreateDTO&{topicName: string,_targetType:string,_districtId:string}
const form = ref<TasBizType>({
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
  checkItems: [],
  safeLevel: 'A',
  safeSummary: ''
})
const isThird = computed(() => form.value.type === 'THIRD')
onLoad(() => {
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

const goToDoCheck = () => {
  if(validatorCheckTarget()) {
    changeStep(1);
  }
}

const stopTouchMove = () => false;
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
          if(!topicOptions.value.length) {
            uni.showToast({ title: '该检查对象类型未配置检查主题', icon: 'none' })
          }
        })
      }
    }
  });
}

// 检查单内容填写完毕
let taskForm : SafeCheckTaskCreateDTO | undefined = undefined;
const checkComplate = (task: SafeCheckTaskCreateDTO) => {
  // 非三方检查,直接完成
  if(!isThird.value) {
    postForm(task)
  }
  // 三方检查填写评价/总结
  else {
    taskForm = task;
    changeStep(2);
  }
}

const thirdCheckComplate = () => {
  // 评价等级校验
  if(!form.value.safeLevel) {
    uni.showToast({ title: '请选择安全等级', icon: 'none' })
    return;
  }
  // 评价总结
  if(!form.value.safeSummary) {
    uni.showToast({ title: '请填写评价总结', icon: 'none' })
    return;
  }
  if(taskForm) {
    taskForm.safeLevel = form.value.safeLevel;
    taskForm.safeSummary = form.value.safeSummary;
    postForm(taskForm);
  }
}

const postForm = (task : SafeCheckTaskCreateDTO) => {
  const response = postSafeCheckTask(task);
  useLoading(response,() => {
    uni.navigateBack();
    uni.$emit(EventType.REFRESH_PAGE)
  })
}

const levelOptions = ref<GasOption[]>([
  {
    text: 'A',
    value: 'A'
  },
  {
    text: 'B',
    value: 'B'
  },
  {
    text: 'C',
    value: 'C'
  },
  {
    text: 'D',
    value: 'D'
  }
])


const validatorCheckTarget = (): boolean => {
  // 校验是否选择检查对象
  if(!form.value.districtId) {
      uni.showToast({
        title: '请选择检查对象',
        icon: 'none'
      })
      return false;
    }
    // 校验是否选择检查主题
    if(!topicId.value) {
      uni.showToast({
        title: '请选择检查主题',
        icon: 'none'
      })
      return false;
    }
    return true;
}
</script>
<style lang="scss" scoped>
.step-box {
  height: 96rpx;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: space-around;
  line-height: 100rpx;
  background: #fff;

  .item {
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

    .third {
      background-color: #fff;
      padding-bottom: 40rpx;
      .sub-item-title {
        padding: 0rpx 30rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
    }
  }
}

.opts {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background-color: #fff;
  padding: 30rpx;
  display: flex;
  justify-content:space-between;
  .button {
    flex: 1;
    height: 88rpx;
    border-radius: 10rpx;

    font-size: 32rpx;
    font-weight: 500;
    color: #222222;
    line-height: 88rpx;
    text-align: center;

    margin: 0rpx 10rpx;
    
    // 非最后一个元素,带一个右边距
    

  }
  .button.cancel {
    color: #006CFF;
    background: #E8F1FF;
    border-radius: 10rpx;
  }
  .button.confirm {
    background: #006CFF;
    border-radius: 10rpx;
    color: #fff;
  }
}
</style>