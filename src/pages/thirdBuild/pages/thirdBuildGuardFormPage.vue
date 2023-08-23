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
    uni.showLoading({
      title: '请稍后...'
    });
    try{
      const { success,message } = await checkThirdBuildInfo({info: data.thirdBuildInfo,report: data.reportInfo,guard: data.form});
      if(success) {
        uni.reLaunch({
          url: '/pages/thirdBuild/index'
        })
      } else {
        uni.hideLoading();
        uni.showToast({
          title: message
        })
      }
    }finally {
      uni.hideLoading();
    }
  } else {
    const {success} = await createThirdBuildGuard(data.thirdBuildUid,data.form);
    if(success) {
      uni.$emit('refreshThirdBuildDetailPage')
      uni.navigateBack();
    }
  }
  
}


</script>