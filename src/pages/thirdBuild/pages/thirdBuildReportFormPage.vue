<template>
  <view class="report-container">
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
      <gas-uploader label="上传交底照片" v-model="data.form.reportPicIds"/>
      <!-- 管网保护方案照片 -->
      <gas-uploader label="上传管网保护方案照片" v-model="data.form.schemaPicIds"/>
      <!-- 管网保护协议照片 -->
      <gas-uploader label="上传管网保护协议(施工方签字照片)" v-model="data.form.protocolPicIds"/>
      
    </van-cell-group>
  </view>
  <view class="info">  注:支持jpg、jpeg、png 每项可上传最多三张. </view>
  <view class="opts">
      <van-button v-if="data.isInChain"
      custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
        color="#a7a7a7"
        plain
        size="large"
        type="default"
        @click="nextStep"
        >下一步</van-button
      >
      <van-button v-else
      custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
        color="#a7a7a7"
        plain
        size="large"
        type="default"
        @click="save"
        >保存</van-button
      >
    </view>
</template>
<script lang="ts" setup>
import { reactive ,getCurrentInstance } from 'vue';
import {EventType} from '@/enums/eventType'
import {useLoading} from '@/hooks/useLoading'
import type {  ThirdBuildReportCreateDTO,ThirdBuildInfoCreateDTO} from '@/api/gen/data-contracts'
import {postThirdBuildReportByThirdBuildId} from '@/api/gen/GasSuperviseApi'


const data = reactive({
  thirdBuildUid: '',
  isInChain: false,
  form: <ThirdBuildReportCreateDTO>{
    reporterName: '',
    reporterPhone:  '',
    reportPicIds: [],
    schemaPicIds:[],
    protocolPicIds:[]
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
  // if(isOrg) {
  //   data.form.reporterName = store.userInfo?.name || ''
  //   data.form.reporterPhone = store.userInfo?.phoneNumber || ''
  // }
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
    uni.showToast({ title: '请至少填写一项', icon: 'error' });
    return;
  }
  // @ts-ignore
  const reportPicIds = data.form.reportPicIds.map(e => e.id);
  // @ts-ignore
  const schemaPicIds = data.form.schemaPicIds.map(e => e.id);
  // @ts-ignore
  const protocolPicIds = data.form.protocolPicIds.map(e => e.id);
  const result = postThirdBuildReportByThirdBuildId(data.thirdBuildUid,{...data.form,reportPicIds,schemaPicIds,protocolPicIds});
  useLoading(result, () => {
    uni.$emit(EventType.THIRD_BUILD_REFRESH)
    uni.navigateBack();
  })
}
// 交底至少写个东西
const atLeastOneParam = () => {
  return data.form.reporterName || data.form.reporterPhone || data.form.protocolPicIds?.length || data.form.schemaPicIds?.length || data.form.reportPicIds?.length
}


</script>

<style lang="scss" scoped>
.report-container {
  background-color: #fff;
  padding: 0 20rpx;
  
}
.opts {
    height: 160rpx;
    padding: 30rpx 20rpx;
  }
  .info {
    margin: 20rpx 30rpx;
    color: #a7a7a7;
  }
</style>