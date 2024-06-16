<template>
  <view class="create-container">

    <gas-field label="检查对象" v-model="form.targetName" required placeholder="请输入"/>

    <gas-cascader
        required
        dicType="SAFE_CHECK_TARGET_TYPE"
        label="检查对象类型"
        title="检查对象类型"
        v-model="form.targetType"
        @selectFinish="selectFinish"
      />
    
    <gas-field 
        label="详细地址"
        required
        @click="openMapAndChooseLocation"
        right-icon="location"
        placeholder="请选择"
        v-model="form.address"
      />

    <gas-field label="行政区划" v-model="form._districtId" required disabled placeholder="请选择地址"/>
  </view>

  <view class="opts">
    <view class="button" @click="confirm">确定</view>
  </view>
</template>
<script lang="ts" setup>
import { EventType } from '../event'
import { useMap } from '@/hooks/useMap';

const form = ref({
  targetName: '',
  targetType: '',
  _targetType: '',
  districtId: '',
  address: '',
  longitude: 0,
  latitude: 0,
  _districtId: '',
})

const isOk = computed(() => {
  return form.value.targetType && form.value.districtId && form.value.address && form.value.longitude && form.value.latitude
})

let eventChannel: UniApp.EventChannel | null = null;
onLoad(() => {
  const _this = getCurrentInstance();
  // @ts-ignore
  eventChannel = _this!.ctx.getOpenerEventChannel();
})

const selectFinish = (options: GasOption[]) => {
  const last = options[options.length - 1];
  form.value._targetType = last.text;
}

const openMapAndChooseLocation = async() => {
  const {chooseLocation} = useMap();
  const location = await chooseLocation();
  if(location.success) {
    form.value.address = location.address;
    form.value.longitude = location.lon;
    form.value.latitude = location.lat;
    form.value.districtId = location.districtId;
    form.value._districtId = location.cityName+'/' +location.districtName;
  }
}

const confirm = () => {
  if(isOk.value) {
    uni.navigateBack({
      delta:1,
      success: () => {
        eventChannel && eventChannel.emit(EventType.CREATE_TARGET, { target: form.value });
      }
    });
  } else {
    uni.showToast({
      title: '请完善信息',
      icon: 'none'
    })
  }
}

</script>
<style lang="scss" scoped>
.create-container {
  margin-top: 20rpx;
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