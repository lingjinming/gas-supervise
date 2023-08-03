<template>

    <van-cell-group>
      <view style="background: #fff;">
        <van-field :value="reportForm.handleContent" label="整改情况说明" readonly />

        <textarea
          class="remark"
          maxlength="200"
          :value="reportForm.handleContent"
          @input="reportForm.handleContent = $event.detail.value"
          type="text"
          placeholder="请输入"
        />
      </view>

      <van-field
        is-link
        label="整改时间"
        @click-input="handleDatePopupIsShow = true"
      >
        <input
          :value="reportForm.handleDate"
          slot="input"
          disabled
          style="width: 100%;"
          placeholder="请选择"
        />
      </van-field>
      <van-picker-new
        defaultValue="SAME"
        dicType="RISK_DANGER_CHECK"
        label="是否和描述一致"
        title="是否和描述一致"
        v-model="reportForm.sameWithRemark"
      />
      <van-field :value="username"  label="责任人" disabled readonly/>
      <van-calendar
        :show="handleDatePopupIsShow"
        @close="handleDatePopupIsShow = false"
        @confirm="chooseDate"
      />
      <van-uploader-new v-model="reportForm.picIds"/>

    </van-cell-group>


    <van-button 
      custom-style="margin:40rpx;width:calc(100% - 80rpx)" 
      :loading="loading"
      loading-text="请稍后..."
      type="primary" 
      size="large" 
      color="#006CFF" 
      @click="submit"
      >确定</van-button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { reformHidangerById } from "../../api/hidden";
import type { HidangerHandleReq } from "@/api/model/Hidanger";
import { timestampToDateTimeString} from "@/utils";
import { EventType } from '@/enums/eventType'
import { userStore } from "@/state";
const store = userStore();
let username = ref(store.userInfo?.name)

let checkDate = ref(0)
let handleDatePopupIsShow = ref(false);
let loading = ref(false)

let reportForm = ref({
  uid:'',
  handleState:"HANDLING",
  sameWithRemark: 'SAME',
  handleContent: "",
  handleDate: "",
  picIds: [],
  fileIds: [],
} as HidangerHandleReq & {uid: string});

onLoad(options => {
  reportForm.value.uid = options?.uid
  // HANDLING
  reportForm.value.handleState = options?.isComplete === 'true' ?  "HANDLED" : "HANDLING";
  reportForm.value.handleDate = timestampToDateTimeString(new Date().getTime())
  checkDate.value = new Date(options?.checkDate).getTime()
})


const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = timestampToDateTimeString(e.detail);
};

const submit = async () => {
   if(new Date(reportForm.value.handleDate).getTime() - new Date(checkDate.value).getTime() < 0){
    uni.showToast({
      icon:'none',
      title:'整改日期应在排查日期之后'
    })
    return
  }
  try {
    loading.value = true;
    let {success , message} = await reformHidangerById(reportForm.value.uid,reportForm.value);
    if(success) {
      setTimeout(() => {
        loading.value = false;
        uni.navigateBack();
         // 刷新详情
        uni.$emit(EventType.DANGER_DETAIL_REFRESH)
      }, 800);
    } else {
      loading.value = false;
      uni.showToast({
        icon:'none',
        title: message
      })
    }
  }catch(e) {
    loading.value = false;
  }
  

    
};


</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
.remark {
  height: 250rpx;
  width: calc(100% - 100rpx);
  margin: 0 30rpx;
  background: $uni-text-color-grey;
  border-radius: 10rpx;
  padding: 20rpx;
}
</style>
