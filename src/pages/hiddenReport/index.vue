<template>
  <view class="container">
    <van-cell-group>
      <view style="background: #fff;">
        <van-field :value="reportForm.remark" label="隐患描述" readonly />

        <textarea
          class="remark"
          maxlength="200"
          :value="reportForm.remark"
          @input="reportForm.remark = $event.detail.value"
          type="text"
          placeholder="请输入"
        />
      </view>


      <van-uploader-new v-model="reportForm.fileIds" />
      <van-cascader-new
        dicType="RISK_SUBJECT_TYPE_TREE"
        label="隐患类别"
        title="隐患类别"
        v-model="reportForm.dangerType"
        v-model:subjectType="reportForm.subjectType"
      />
      <van-field
        label="位置"
        @click-input="chooseLocation"
        right-icon="location-o"
      >
        <input
          slot="input"
          style="width: 100%"
          :value="reportForm.address"
          placeholder="请选择"
        />
      </van-field>

      <!-- <van-field
  :value="districtName"
  :innerValue="districtName"
  label="所属区域"
  fixed
  autosize
  placeholder="请点选位置"
/> -->

      <van-picker-new
        dicType="org"
        :label="isOrg ? '上报企业' : '责任企业'"
        :title="isOrg ? '上报企业' : '责任企业'"
        v-model="reportForm.orgId"
      />
      <!-- 企业不需要关联检查计划 -->
      <van-picker-new
        v-if="!isOrg"
        dicType="planCode"
        label="关联检查计划"
        title="关联检查计划"
        v-model="reportForm.planCode"
        :orgId="reportForm.orgId"
      />

      <van-picker-new
        dicType="RISK_DANGER_LEVEL"
        label="隐患等级"
        title="隐患等级"
        v-model="reportForm.level"
      />

      <van-field label="检查日期" disabled :value="reportForm.checkDate">
      </van-field>
    </van-cell-group>

    <van-button
      custom-style="margin:40rpx;width:calc(100% - 80rpx)"
      type="primary"
      size="large"
      color="#006CFF"
      @click="submit"
      >确定</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { addHidden } from "../../api/hidden";
import type { HidangerCreateReq } from "@/api/model/Hidanger";
import { formatDate } from "@/utils";
import { getDistrictId } from "@/utils/qqMapUtil";
import { minDate, maxDate } from "@/hooks";
import { userStore } from "@/state";

const store = userStore();

const isOrg: boolean = store.isOrgUser;

onShow(() => {
  !isOrg &&
    uni.setNavigationBarTitle({
      title: "安全检查下发",
    });
});

let checkDatePopupIsShow = ref(false);
const districtName = ref("");
let reportForm = ref({
  remark: "",
  address: "",
  orgId: "",
  level: "",
  checkDate: formatDate(minDate),
  planCode: "",
  subjectType: "",
  dangerType: "",
  fileIds: [],
  longitude: "",
  latitude: "",
  districtId: "",
} as HidangerCreateReq);

const submit = async () => {
  let data = await addHidden(reportForm.value);
  data.success &&
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
};

const chooseLocation = () => {
  uni.authorize({
    scope: "scope.userLocation",
    success() {
      uni.chooseLocation({
        success: function (res) {
          reportForm.value.address = res.address + res.name;
          reportForm.value.longitude = res.longitude;
          reportForm.value.latitude = res.latitude;

          getDistrictId(res.latitude, res.longitude).then((data) => {
            reportForm.value.districtId = data.code;
            districtName.value = data.name;
          });
        },
        fail: function (res) {
          console.log(res);
        },
      });
    },
  });
};
</script>
<style lang="scss" scoped>
.container{
  background: none;
}
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
