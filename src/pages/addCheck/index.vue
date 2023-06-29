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
           style="width: 100%;"
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
      />
      <!-- <van-field label="位置" is-link>
        <input
           slot="input"
           style="width: 100%;"
          :value="reportForm.address"
          readonly
          placeholder="请选择"
          @click="chooseLocation"
        />
      </van-field> -->
   
    </van-cell-group>


    <van-button type="primary" size="large" round plain @click="submit"
      >确定</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { addCheckPlan, type ICheckPlanVo } from "../../api/hidden";
import { formatDate } from "@/utils";
import { minDate ,tomorrowDate} from "@/hooks";

let isShow = ref(false);

const onConfirm = (e) => {
  reportForm.value.startDate= formatDate(e.detail[0])
  reportForm.value.endDate= formatDate(e.detail[1])
  isShow.value = false
};
let reportForm:ICheckPlanVo = ref({
  targetOrgAddr:'',
  startDate:formatDate(minDate),
  endDate:formatDate(tomorrowDate),
});

// const chooseLocation = () => {
//   uni.authorize({
//     scope: "scope.userLocation",
//     success() {
//       uni.chooseLocation({
//         success: function (res) {
//           console.log(res)
//           reportForm.value.targetOrgAddr = res.name + res.name;
//         },
//       });
//     },
//   });
// };

const submit = async () => {
  let data = await addCheckPlan(reportForm.value);
  data.success &&
    uni.showToast({
      title: data.message,
      icon: 'success',
      mask: true
    })
    setTimeout(() => {
      uni.navigateBack();
    }, 500);
};

</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
</style>
