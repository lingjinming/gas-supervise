<template>
  <view class="acc-upload-container">
    <uni-forms :modelValue="form" label-position="top">
      <view class="form-item">
        <uni-forms-item name="name">
          <template #label>
            <view class="label">事故事件描述</view>
          </template>
          <uni-easyinput type="textarea" v-model="form.describe" placeholder="请输入事故事件描述" maxlength="300" />
        </uni-forms-item>
      </view>
    </uni-forms>
    <van-uploader-new accept="file"   label="事故事件报告" v-model="form.fileIds" />
    <view class="required">*请上传事故事件报告</view>
  </view>
  <view class="info">
    注:支持格式:doc/docx/pdf 单个文件不能超过50M
  </view>
  <view class="opts">
    <van-button @click="saveOrUpdate" custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
      color="#a7a7a7" plain size="large" type="default">确认</van-button>
  </view>
</template>
<script setup lang="ts">
import type { UpdateAccidentQuery } from '@/api/gen/data-contracts'
import { postAccidentAdd, postAccidentUpdate } from '@/api/gen/GasSuperviseApi'

const fileNames = ref([])
const form = ref<{ uid: string, describe: string, fileIds: string[] }>({
  uid: '',
  describe: '',
  fileIds: []
});

onLoad((params) => {
  const _this = getCurrentInstance();
  // @ts-ignore
  const eventChannel = _this!.ctx.getOpenerEventChannel();
  eventChannel && eventChannel.on("accidentFileUpload", ({ formData }) => {
    form.value = formData;
    // @ts-ignore
  });
})

const saveOrUpdate = () => {
  console.log(form.value)
}
</script>
<style scoped lang="scss">
.acc-upload-container {
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