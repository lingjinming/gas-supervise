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
    <van-uploader-new accept="file" :types="['doc','docx','pdf']"  label="事故事件报告" v-model="form.fileIds" />
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
import { postAccidentAdd, postAccidentUpdate } from '@/api/gen/GasSuperviseApi'
import { useLoading } from '@/hooks/useLoading';
import { EventType } from '../event'

const form = ref<any>({
  uid: '',
  describe: '',
  fileIds: ''
}); 

onLoad((params) => {
  const _this = getCurrentInstance();
  // @ts-ignore
  const eventChannel = _this!.ctx.getOpenerEventChannel();
  eventChannel && eventChannel.on("accidentFileUpload", ({ formData }) => {
    form.value = formData;
  });
})

const saveOrUpdate = () => { 
  const isValid = validate();
  if (!isValid) return;
  const isUpdate = !!form.value.uid;
  const fileIds = form.value.fileIds.map(e => e.id).join(",");
  const formData = {...form.value, fileIds}
  const result = Promise.resolve().then(() => {
    return isUpdate ? postAccidentUpdate(formData) : postAccidentAdd(formData)
  })
  useLoading(result,()=>{
    if(isUpdate) {
      // 返回到详情页,并刷新
      uni.$emit(EventType.DETAIL_PAGE_REFRESH)
      uni.navigateBack({delta:2})
    }
    else {
      // 重定向到列表页
      uni.$emit(EventType.LIST_PAGE_REFRESH)
      uni.redirectTo({
        url: '/pages/accident/index'
      })
    }

  })
}

const validate = (): boolean => {
// 校验参数
  if (!form.value.fileIds.length) {
    uni.showToast({
      title: '请上传事故事件报告',
      icon: 'none'
    })
    return false
  }
  // describe 长度最大200
  if (form.value.describe.length > 200) {
    uni.showToast({
      title: '事故事件描述最多200字',
      icon: 'none'
    })
    return false
  }
  return true;
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