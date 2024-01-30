<template>
  <!-- 看护页面 -->
  <view class="guard-container">
    <uni-forms :modelValue="data.form" label-position="top">

      <view class="form-item">
      <uni-forms-item  name="name">
        <template #label>
          <view class="label">看护描述</view>
        </template>
        <uni-easyinput type="textarea" v-model="data.form.remark" placeholder="请输入看护描述" maxlength="300"/>
      </uni-forms-item>
    </view>
    </uni-forms>
    <gas-uploader label="看护照片" v-model="data.form.picIds"/>
    <view class="required">*需要上传人员旁站照片</view>
    
  </view>
  <view class="info">
      注:jpg、jpeg、png 最多可上传最多三张.
    </view>
    <view class="opts">
      <van-button
        custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
        color="#a7a7a7"
        plain
        size="large"
        type="default"
        @click="save"
        >确认上报</van-button
      >
    </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import {EventType} from '@/enums/eventType'
import {useLoading} from '@/hooks/useLoading'

import type { ThirdBuildGuardCreateDTO, ThirdBuildReportCreateDTO,ThirdBuildInfoCreateDTO} from '@/api/gen/data-contracts'
import {postThirdBuild,postThirdBuildGuardByThirdBuildId} from '@/api/gen/GasSuperviseApi'

const data = reactive({
  isInChain: false,
  thirdBuildUid: '',
  form: <ThirdBuildGuardCreateDTO> {
    picIds: [],
    remark: ''
  },
  thirdBuildInfo: <ThirdBuildInfoCreateDTO>{},
  reportInfo: <ThirdBuildReportCreateDTO>{}
})

onLoad(options => {
  data.isInChain = !options?.uid;
  if(data.isInChain) {
    const _this = getCurrentInstance();
    // @ts-ignore
    const eventChannel = _this!.ctx.getOpenerEventChannel();
    eventChannel.on && eventChannel.on("reportInfo", ({thirdBuildInfo,reportInfo}) => {
      data.thirdBuildInfo  = thirdBuildInfo;
      data.reportInfo = reportInfo;
    });
  } else {
    data.thirdBuildUid = options!.uid;
  }
})

const save = async () => {
  // @ts-ignore
  const picIds = data.form?.picIds?.map(e => e.id);
  // 创建三方施工记录
  if(data.isInChain) {
    const createResult = postThirdBuild({info: data.thirdBuildInfo,report: data.reportInfo,guard: {remark: data.form.remark,picIds}});
    useLoading(createResult, () => {
      uni.reLaunch({  url: '/pages/thirdBuild/index'  })
    })
  }
  // 创建看护记录 
  else {
    const createResult = postThirdBuildGuardByThirdBuildId(data.thirdBuildUid,{remark: data.form.remark,picIds});
    useLoading(createResult, () => {
      uni.$emit(EventType.THIRD_BUILD_REFRESH)
      uni.navigateBack();
    })
  }
  
}


</script>
<style lang="scss" scoped>
.guard-container {
  background-color: #fff;
  padding-bottom: 30rpx;
  .form-item {
    padding: 30rpx;
    .label {
      margin-bottom: 20rpx;
    }
  }
  .required {
    margin-top: -30rpx;
    margin-left: 30rpx;
    color: #F63724
  }
  
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