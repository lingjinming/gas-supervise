<template>
  <van-field required label="位置" @click-input="openMapAndChooseLocation" right-icon="location-o" >
    <input slot="input" disabled style="width: 100%" :value="form.address" placeholder="请选择" />
  </van-field>
  <van-picker-new required dicType="org"  label="所属燃气公司" title="所属燃气公司" v-model="form.orgId" />
  <van-picker-new required dicType="ACCIDENTLEVEL" label="事故等级" title="事故等级" :defaultValue="form.accidentLevel" v-model="form.accidentLevel" />
  <van-picker-new  required dicType="sp_accident_type" label="事故类型" title="事故类型" :defaultValue="form.accidentType"  v-model="form.accidentType" />
  <van-picker-new  required dicType="sp_accident_scene" label="事故场景" title="事故场景" :defaultValue="form.accidentScene"  v-model="form.accidentScene" />
  <van-field required @click-input="showcalendar" label="事故时间"  readonly  >
    <input placeholder="请选择事故时间" slot="input"  disabled style="width: 100%" :value="form.accidentTime" />
  </van-field>
  

  <van-field required label="死亡人数" >
    <input slot="input" type="number"   v-model="form.deathCnt" placeholder="请输入死亡人数"/>
  </van-field>
  <van-field required label="受伤人数" >
    <input slot="input" type="number"  v-model="form.injuredCnt" placeholder="请输入受伤人数"/>
  </van-field>

  <view class="btn-save" >
   <van-button
      @click="nextStep"
      custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      type="default"
      >下一步</van-button
    >
  </view>
  <view>
    <uni-calendar 
      ref="calendar"
      :insert="false"
      :start-date="'2000-1-1'"
      :end-date="'2025-5-20'"
      @confirm="change"
    />
  </view>
  
</template>
<script setup lang="ts">
import { useMap } from '@/hooks/useMap';
import type {UpdateAccidentQuery} from '@/api/gen/data-contracts'
import WxValidate from '@/utils/validate/WxValidate'
import { useEventChannel } from '@/hooks/useEventChannel';
import { EventType } from "../event";

let validator: WxValidateType<UpdateAccidentQuery> | null = null;

const form = ref<UpdateAccidentQuery>({
  districtId: '',
  orgId: '',
  address: '',
  longitude: 0,
  latitude: 0,
  accidentTime: '',
  accidentType: 'fire',
  accidentScene: 'OBJ_CZ',
  accidentLevel: 'YB',
  describe: '',
  deathCnt: 0,
  injuredCnt: 0,
  uid: '',
})



onLoad((params) => {
  validator = new WxValidate(rules, message);
  // 编辑
  if(params?.accidentId) {
    const { on } = useEventChannel();
    on(EventType.ON_EDIT_ACCIDENT,({formData}) => {
      form.value = formData;
    })
  }
  // 新增 
  else {

  }
  
})

// 下一步
const nextStep = () => {
  const formOk = validator?.checkForm(form.value);
  if(formOk) {
    uni.navigateTo({
    url: '/pages/accident/pages/AccidentUploadPage',
    success: (res) => {
      res.eventChannel.emit(EventType.ON_UPLOAD_FILE, { formData: form.value })
    }
  })
  } else {
    uni.showToast({
      icon: 'none',
      title: validator?.errorList[0].msg
    })
  }
}

// 打开地图,选择地址
const openMapAndChooseLocation = async() => {
  const {chooseLocation} = useMap();
  const location = await chooseLocation();
  if(location.success) {
    form.value.address = location.address;
    form.value.longitude = location.lon;
    form.value.latitude = location.lat;
    form.value.districtId = location.districtId;
  }
}

// 选择事故时间
const calendar = ref()
const change  = ({fulldate}) => {
  form.value.accidentTime = fulldate + ' 00:00:00';
}
const showcalendar = () => {
  calendar.value.open()
}


const rules:Rules<UpdateAccidentQuery> = {
  address: {
    required: true,
    maxlength: 64
  },
  orgId: {
    required: true
  },
  accidentLevel: {
    required: true
  },
  accidentScene: {
    required: true
  },
  accidentType: {
    required: true
  },
  accidentTime: {
    required: true
  },
  deathCnt: {
    required: true,
    number: true,
    min: 0
  },
  injuredCnt: {
    required: true,
    number: true,
    min: 0
  }
} 
const message:Messages<UpdateAccidentQuery> = {
  address: {
    required: '请选择事故地点',
    maxlength: '事故地点不能超过64个字符'
  },
  orgId: {
    required: '请选择所属燃气公司'
  },
  accidentLevel: {
    required: '请选择事故等级'
  },
  accidentScene: {
    required: '请选择事故场景'
  },
  accidentType: {
    required: '请选择事故类型'
  },
  accidentTime: {
    required: '请选择事故时间'
  },
  deathCnt: {
    required: '请输入死亡人数',
    number: '请输入数字',
    min: '请输入大于0的数字'
  },
  injuredCnt: {
    required: '请输入受伤人数',
    number: '请输入数字',
    min: '请输入大于0的数字'
  }
} 
</script>
<style lang="scss" scoped>
  .btn-save{
    margin: 20rpx 40rpx;
  }
</style>