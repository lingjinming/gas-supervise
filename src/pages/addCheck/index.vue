<template>
  <van-calendar
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onConfirm"
  />
  <view class="container">
    <van-cell-group>
      <van-field
        maxlength="200"
        :value="reportForm.title"
        @change="reportForm.title = $event.detail"
        label="计划名称"
        placeholder="请输入"
      />

      <van-field
        @click-input="isShow = true"
        label="计划时间"
        placeholder="请选择"
        readonly
      >
        <input
          slot="input"
          style="width: 100%"
          :value="reportForm.startDate + ' - ' + reportForm.endDate"
        />
      </van-field>

      <van-picker-new
        dicType="SAFE_CHECK_TYPE"
        label="检查类型"
        title="检查类型"
        v-model="reportForm.type"
      />
      <van-picker-new
        dicType="org"
        label="检查企业"
        title="检查企业"
        v-model="reportForm.targetOrgId"
      />
      <van-field
        :value="reportForm.targetOrgOwner"
        @change="reportForm.targetOrgOwner = $event.detail"
        label="企业负责人"
        placeholder="请输入"
        maxlength="200"
      />
      <van-field
        :value="reportForm.targetOrgPhone"
        @change="reportForm.targetOrgPhone = $event.detail"
        label="负责人联系方式"
        placeholder="请输入"
      />
      <van-field
        :value="reportForm.checkers"
        @change="reportForm.checkers = $event.detail"
        label="参与人"
        placeholder="请输入"
        maxlength="200"
      />
    </van-cell-group>

    <van-button  type="primary" size="large" round plain @click="submit"
      >确定</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addCheckPlan, type ICheckPlanVo } from "../../api/hidden";
import { formatDate } from "@/utils";
import { minDate, tomorrowDate } from "@/hooks";

let isShow = ref(false);




const onConfirm = (e) => {
  reportForm.value.startDate = formatDate(e.detail[0]);
  reportForm.value.endDate = formatDate(e.detail[1]);
  isShow.value = false;
};
let reportForm: ICheckPlanVo = ref({
  targetOrgAddr: "",
  startDate: formatDate(minDate),
  endDate: formatDate(tomorrowDate),
});




const submit = async () => {
  let data = await addCheckPlan(reportForm.value);
  uni.showToast({
    title: data.message,
    icon:data.success ? "success":'error',
    mask: true,
  });
  console.log(data)
if(data.success){
  setTimeout(() => {
    uni.navigateBack();
  }, 500);
}

};
</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
::v-deep .van-button{
  margin-top: 30rpx;
}
</style>
