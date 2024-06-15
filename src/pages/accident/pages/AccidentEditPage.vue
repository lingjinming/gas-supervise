<template>

  <gas-field required 
            readonly
            label="位置" 
            placeholder="请选择"
            @click="openMapAndChooseLocation"
            v-model="form.address"
            right-icon="location">
  </gas-field>
  <gas-picker required dicType="org"  label="所属燃气公司" title="所属燃气公司" v-model="form.orgId" />
  <gas-picker required dicType="ACCIDENTLEVEL" label="事故等级" title="事故等级"  v-model="form.accidentLevel" />
  <gas-picker  required dicType="sp_accident_type" label="事故类型" title="事故类型"  v-model="form.accidentType" />
  <gas-picker  required dicType="sp_accident_scene" label="事故场景" title="事故场景"   v-model="form.accidentScene" />
  <gas-field required placeholder="请选择" label="事故时间" v-model="form.accidentTime" type="datetime"></gas-field>
 
  

  <gas-field required label="死亡人数" type="number" v-model="form.deathCnt" placeholder="请输入死亡人数"/>
  <gas-field required label="受伤人数" type="number" v-model="form.injuredCnt" placeholder="请输入受伤人数"/>

  <view class="btn-save" >
   <button  @click="nextStep"  size="large"  type="default">下一步</button>
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