<template>

    <van-cell-group>
      <van-field
        :value="reportForm.handleContent"
        @change="reportForm.handleContent = $event.detail"
        label="隐患描述"
        type="textarea"
        fixed
        autosize="{minHeight: 200rpx}"
        placeholder="请输入"
        maxlength="200"
        size="large"
      />

      <van-field
        is-link
        label="整改日期"
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
      <van-calendar
        :show="handleDatePopupIsShow"
        @close="handleDatePopupIsShow = false"
        @confirm="chooseDate"
      />
      <van-uploader-new v-model="reportForm.picIds"/>

    </van-cell-group>


    <van-button custom-style="margin:40rpx;width:calc(100% - 80rpx)" type="primary" size="large" color="#006CFF" @click="submit"
      >确定</van-button
    >
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addHidden, reformHidangerById, type req_addHidden } from "../../api/hidden";
import { formatDate} from "@/utils";

let checkDate = ref(0)
let handleDatePopupIsShow = ref(false);

let reportForm = ref({
  uid:'',
  handleContent: "",
  handleDate: "",
  picIds: [],
});

onLoad(options => {
  reportForm.value.uid = options.uid
  checkDate.value = new Date(options.checkDate).getTime()
  reportForm.value.handleDate = formatDate(new Date())
})


const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = formatDate(e.detail);
};

const submit = async () => {
  if(new Date(reportForm.value.handleDate).getTime() - new Date(checkDate.value).getTime() < 0){
    uni.showToast({
      icon:'none',
      title:'整改日期应在排查日期之后'
    })
    return
  }
  let data = await reformHidangerById(reportForm.value);

  data.success &&
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
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
</style>
