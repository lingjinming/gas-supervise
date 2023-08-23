<template>
  <!-- 交底上报页面 -->
  <van-cell-group>
    <van-field
      :value="data.form.reporterName"
      @change="data.form.reporterName = $event.detail"
      label="交底人员"
      placeholder="请输入交底人员姓名"
      maxlength="16"
    />
    <van-field
      :value="data.form.reporterPhone"
      @change="data.form.reporterPhone = $event.detail"
      label="联系电话"
      placeholder="请输入交底人员联系电话"
      maxlength="16"
    />
    <!-- 交底照片 -->
    <van-uploader-new label="上传交底照片" v-model="data.form.reportPicIds"/>
    <!-- 管网保护方案照片 -->
    <van-uploader-new label="上传管网保护方案照片" v-model="data.form.schemaPicIds"/>
    <!-- 管网保护协议照片 -->
    <van-uploader-new label="上传管网保护协议照片" v-model="data.form.protocolPicIds"/>
  </van-cell-group>
  <view class="opts">
    <button v-if="data.isInChain" @click="nextStep">下一步</button>
    <button v-else  @click="save">保存</button>
  </view>
      
</template>
<script lang="ts" setup>
import type {  ThirdBuildReportCreateDTO,ThirdBuildInfoCreateDTO} from '@/api/generated/data-contracts'
import { reactive ,getCurrentInstance } from 'vue';
import {createThirdBuildReport} from '@/api/generated/ThirdBuild'
import { userStore } from "@/state";
const store =  userStore()
const isOrg = store.isOrgUser

const data = reactive({
  thirdBuildUid: '',
  isInChain: false,
  form: <ThirdBuildReportCreateDTO>{
    reporterName: store.userInfo?.name || '',
    reporterPhone:  store.userInfo?.phoneNumber || ''
  },
  thirdBuildInfo: <ThirdBuildInfoCreateDTO>{}
})

onLoad(options => {
  data.isInChain = !options?.uid;
  if(data.isInChain) {
    const _this = getCurrentInstance();
    // @ts-ignore
    const eventChannel = _this!.ctx.getOpenerEventChannel();
    eventChannel && eventChannel.on("thirdBuildInfoData", ({thirdBuildInfo}) => {
      data.thirdBuildInfo  = thirdBuildInfo;
    });
  } else {
    data.thirdBuildUid = options?.uid
  }
  // 如果是企业用户,需要填充当前用户信息
  if(isOrg) {
    data.form.reporterName = store.userInfo?.name || ''
    data.form.reporterPhone = store.userInfo?.phoneNumber || ''
  }
})

const nextStep = () => {
  uni.navigateTo({
    url: '/pages/thirdBuild/pages/thirdBuildGuardFormPage',
    success: (res) => {
      res.eventChannel.emit('reportInfo', { thirdBuildInfo: data.thirdBuildInfo,reportInfo: data.form })
    }
  })
}

const save = async() => {
  const hasParam = atLeastOneParam();
  if(!hasParam) {
    uni.showToast({
      title: '请至少填写一项',
      icon: 'error'
    });
    return;
  }

  const {success,message}  = await createThirdBuildReport(data.thirdBuildUid,data.form);
  // 跳回去
  if(success) {
    uni.$emit('refreshThirdBuildDetailPage')
    uni.navigateBack();
  }
}
// 交底至少写个东西
const atLeastOneParam = () => {
  return data.form.reporterName || data.form.reporterPhone || data.form.protocolPicIds?.length || data.form.schemaPicIds?.length || data.form.reportPicIds?.length
}


</script>