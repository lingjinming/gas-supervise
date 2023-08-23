<template>
  <!-- 看护页面 -->
  <van-cell-group>
    <view style="background: #fff;">
      <van-field :value="data.form.remark" label="看护描述" readonly />
      <textarea
        class="remark"
        maxlength="200"
        :value="data.form.remark"
        @input="data.form.remark = $event.detail.value"
        type="text"
        placeholder="请输入看护描述"
      />
    </view>
    <!-- 看护照片 -->
    <van-uploader-new label="看护照片" v-model="data.form.picIds"/>
  </van-cell-group>
  <view class="opts">
    <button  @click="save">保存</button>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import type { ThirdBuildGuardCreateDTO, ThirdBuildReportCreateDTO,ThirdBuildInfoCreateDTO} from '@/api/generated/data-contracts'
import { checkThirdBuildInfo ,createThirdBuildGuard} from '@/api/generated/ThirdBuild'
import {EventType} from '@/enums/eventType'
import {useLoading} from '@/hooks/useLoading'

const data = reactive({
  isInChain: false,
  thirdBuildUid: '',
  form: <ThirdBuildGuardCreateDTO> {},
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
  // 创建三方施工记录
  if(data.isInChain) {
    const createResult = checkThirdBuildInfo({info: data.thirdBuildInfo,report: data.reportInfo,guard: data.form});
    useLoading(createResult, () => {
      uni.reLaunch({  url: '/pages/thirdBuild/index'  })
    })
  }
  // 创建看护记录 
  else {
    const createResult = createThirdBuildGuard(data.thirdBuildUid,data.form);
    useLoading(createResult, () => {
      uni.$emit(EventType.THIRD_BUILD_REFRESH)
      uni.navigateBack();
    })
  }
  
}


</script>