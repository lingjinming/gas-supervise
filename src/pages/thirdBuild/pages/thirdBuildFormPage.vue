<template>
  <!-- <van-field required label="位置" @click-input="openMapAndChooseLocation" right-icon="location-o" >
    <input slot="input" disabled style="width: 100%" :value="form.info.constructionAddress" placeholder="请选择" />
  </van-field> -->
  <gas-field required 
            readonly
            label="位置" 
            placeholder="请选择"
            @clickInput="openMapAndChooseLocation"
            v-model="form.info.constructionAddress"
            icon="location-o">
          </gas-field>
  <gas-picker required dicType="THIRD_BUILD_TYPE" label="施工类型" title="施工类型" v-model="form.info.buildType" />
  <gas-picker  required dicType="RISK_THIRD_BUILD_STATE" label="施工状态" title="施工状态"   v-model="form.info.buildState" />
  <!-- 政府用户,需要选择企业 -->
  <gas-picker
    required
    v-if="!isOrg && !form.isEdit"
    dicType="org"
    :label="isOrg ? '上报企业' : '责任企业'"
    :title="isOrg ? '上报企业' : '责任企业'"
    v-model="form.info.orgId"
  />
  <van-field required @click-input="showCalender" label="计划施工时间" placeholder="请选择" readonly  >
    <input slot="input"  disabled style="width: 100%" :value="form.info.planTimeStart + ' - ' + form.info.planTimeEnd" />
  </van-field>

  <view class="line"></view>
 
  <gas-field required label="建设单位"  clearable v-model="form.info.buildUnitName"  placeholder="请输入建设单位"></gas-field>
  <gas-field required label="联系人"   clearable v-model="form.info.buildUnitContactName"  placeholder="请输入建设单位联系人"></gas-field>
  <gas-field required label="联系方式" type="number"	 clearable v-model="form.info.buildUnitContactPhone"  placeholder="请输入建设单位联系人手机号"></gas-field>

  <view class="line"></view>

  <gas-field required label="监理单位"  clearable v-model="form.info.supUnitName"  placeholder="请输入监理单位"></gas-field>
  <gas-field required label="联系人"   clearable v-model="form.info.supUnitContactName"  placeholder="请输入监理单位单位联系人"></gas-field>
  <gas-field required label="联系方式" type="number"	 clearable v-model="form.info.supUnitContactPhone"  placeholder="请输入监理单位联系人手机号"></gas-field>
 

<view class="opts">
  <view class="btn-save" v-if="form.isEdit">
    <van-button
    custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      type="default"
      @click="save"
      >保存</van-button
    >
  </view>
  <view class="btn-save"  v-else>
    <van-button
    custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      type="default"
      @click="nextStep"
      >下一步</van-button
    >
  </view>
</view>

<van-calendar
    allow-same-day
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onCalendarConfirm"
  />
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { userStore } from "@/state";
import { formatDate } from "@/utils";
import { minDate } from "@/hooks";
import { useMap } from '@/hooks/useMap';
import {useLoading} from '@/hooks/useLoading'
import {EventType} from '@/enums/eventType'
import WxValidate from '@/utils/validate/WxValidate'


import { getThirdBuildById,putThirdBuildById} from '@/api/gen/GasSuperviseApi'
import type {ThirdBuildUpdateDTO} from '@/api/gen/data-contracts'

const store =  userStore();
const isOrg = store.isOrgUser;
let validator: WxValidateType<ThirdBuildUpdateDTO> | null = null;

const isShow = ref(false)
const form = reactive({
  uid: '',
  isEdit: false,
  info: <ThirdBuildUpdateDTO&{orgId?:string}>{
    planTimeStart: formatDate(minDate),
    planTimeEnd: formatDate(minDate),
    buildType: 'DLGZ',
    buildState: 'NOT_STARTED',
    buildUnitName:'',
    buildUnitContactName:'',
    buildUnitContactPhone:'',
    supUnitName:'',
    supUnitContactName: '',
    supUnitContactPhone: ''
  },
})

onLoad(options => {
  validator = new WxValidate(rules, message);
  form.isEdit = !!options?.uid;
  // 拉一下详情
  if(form.isEdit) {
    form.uid = options!.uid;
    getThirdBuildById(form.uid).then(res => {
      // 反显一下
      form.info = res.data!;

    })
  }
})

const showCalender = () => {
  uni.hideKeyboard();
  isShow.value = true;
};

const onCalendarConfirm = (e) => {
  form.info.planTimeStart = formatDate(e.detail[0]);
  form.info.planTimeEnd = formatDate(e.detail[1]);
  isShow.value = false;
};

// 保存更新
const save = () => {
  const formOk = validator?.checkForm(form.info);
  if(!formOk) {
    uni.showToast({
      icon: 'none',
      title: validator?.errorList[0].msg
    })
  } else {
    const result = putThirdBuildById(form.uid,form.info);
    useLoading(result, () => {
      uni.$emit(EventType.THIRD_BUILD_REFRESH)
      uni.navigateBack();
    })
  }
}

// 下一步去看护
const nextStep = () => {
  const formOk = validator?.checkForm(form.info);
  if(formOk) {
    uni.navigateTo({
    url: '/pages/thirdBuild/pages/thirdBuildReportFormPage',
    success: (res) => {
      // 下一步页面打开后,把三方施工信息传过去
      res.eventChannel.emit('thirdBuildInfoData', { thirdBuildInfo: form.info })
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
    form.info.constructionAddress = location.address;
    form.info.longitude = location.lon;
    form.info.latitude = location.lat;
    form.info.districtId = location.districtId;
  }
}



const rules:Rules<ThirdBuildUpdateDTO> = {
  constructionAddress: {
    required: true,
    maxlength: 64
  },
  buildType: {
    required: true
  },
  buildState: {
    required: true
  },
  buildUnitName: {
    required: true,
    maxlength: 16
  },
  buildUnitContactName: {
    required: true,
    maxlength: 16
  },
  buildUnitContactPhone: {
    required: true,
    tel: true
  },
  supUnitName: {
    required: true,
    maxlength: 16
  },
  supUnitContactName: {
    required: true,
    maxlength: 16
  },
  supUnitContactPhone: {
    required: true,
    tel: true
  }
} 
const message:Messages<ThirdBuildUpdateDTO> = {
  constructionAddress: {
    required: '请选择施工地址',
    maxlength: '施工地址不能超过64个字符'
  },
  buildType: {
    required: '请选择施工类型',
  },
  buildState: {
    required: '请选择施工状态',
  },
  buildUnitName: {
    required: '请输入建设单位',
    maxlength: '建设单位不能超过16个字符'
  },
  buildUnitContactName: {
    required: '请输入建设单位联系人',
    maxlength: '建设单位联系人不能超过16个字符'
  },
  buildUnitContactPhone: {
    required: '请输入建设单位联系方式',
    tel: '请输入正确的建设单位联系方式'
  },
  supUnitName: {
    required: '请输入监理单位',
    maxlength: '监理单位不能超过16个字符'
  },
  supUnitContactName: {
    required: '请输入监理单位联系人',
    maxlength: '监理单位联系人不能超过16个字符'
  },
  supUnitContactPhone: {
    required: '请输入监理单位联系方式',
    tel: '请输入正确的监理单位联系方式'
  }
} 

</script>
<style lang="scss" scoped>

.line {
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
  margin: 15rpx 0;
}
.opts {
  .btn-save {
    height: 160rpx;
    padding: 30rpx 20rpx;
  }
}

</style>