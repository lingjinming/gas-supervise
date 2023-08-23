<template>
<van-cell-group>
  <van-field
    label="位置"
    @click-input="openMapAndChooseLocation"
    right-icon="location-o"
  >
    <input
      slot="input"
      style="width: 100%"
      :value="form.info.constructionAddress"
      placeholder="请选择"
    />
  </van-field>
  <van-picker-new
    dicType="THIRD_BUILD_TYPE"
    label="施工类型"
    title="施工类型"
    v-model="form.info.buildType"
  />
  <van-picker-new
    dicType="RISK_THIRD_BUILD_STATE"
    label="施工状态"
    title="施工状态"
    v-model="form.info.buildState"
  />
  <!-- 政府用户,需要选择企业 -->
  <van-picker-new
    v-if="!isOrg"
    dicType="org"
    :label="isOrg ? '上报企业' : '责任企业'"
    :title="isOrg ? '上报企业' : '责任企业'"
    v-model="form.info.orgId"
  />
  <van-field
    @click-input="isShow = true"
    label="计划施工时间"
    placeholder="请选择"
    readonly
    >
    <input
      slot="input"
      style="width: 100%"
      :value="form.info.planTimeStart + ' - ' + form.info.planTimeEnd"
    />
  </van-field>
  <view class="line"></view>
  <van-field
    required
    :value="form.info.buildUnitName"
    label="建设单位"
    placeholder="请输入建设单位"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.buildUnitContactName"
    label="联系人"
    placeholder="请输入建设单位联系人"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.buildUnitContactName"
    label="联系方式"
    placeholder="请输入建设单位联系人手机号"
    maxlength="200"
  />
  <view class="line"></view>
  <van-field
    required
    :value="form.info.supUnitName"
    label="监理单位"
    placeholder="请输入监理单位"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.supUnitContactName"
    label="联系人"
    placeholder="请输入监理单位单位联系人"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.supUnitContactPhone"
    label="联系方式"
    placeholder="请输入监理单位联系人手机号"
    maxlength="200"
  />
</van-cell-group>

<view class="opts">
  <button v-if="form.isEdit" @click="save">保存</button>
  <button v-else  @click="nextStep">下一步</button>
</view>

<van-calendar
    allow-same-day
    type="range"
    :show="isShow"
    @close="isShow = false"
    @confirm="onCalendarConfirm"
  />
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { checkThirdBuildInfo } from '@/api/generated/ThirdBuild'
import type { ThirdBuildInfoCreateDTO} from '@/api/generated/data-contracts'
import { userStore } from "@/state";
import { formatDate } from "@/utils";
import { minDate } from "@/hooks";
import { useMap } from '@/hooks/useMap';

const store =  userStore()
const isOrg = store.isOrgUser

const isShow = ref(false)
const form = reactive({
  isEdit: false,
  info: <ThirdBuildInfoCreateDTO>{
    planTimeStart: formatDate(minDate),
    planTimeEnd: formatDate(minDate),
  },
})

onLoad(options => {
  form.isEdit = !!options?.uid;
})


const onCalendarConfirm = (e) => {
  form.info.planTimeStart = formatDate(e.detail[0]);
  form.info.planTimeEnd = formatDate(e.detail[1]);
  isShow.value = false;
};

const save = () => {

}

const nextStep = () => {
  // TODO验证表单

  // 新增看护记录
  uni.navigateTo({
    url: '/pages/thirdBuild/pages/thirdBuildReportFormPage',
    success: (res) => {
      // 下一步页面打开后,把三方施工信息传过去
      res.eventChannel.emit('thirdBuildInfoData', { thirdBuildInfo: form.info })
    }
  })
}


// 打开地图,选择地址
const openMapAndChooseLocation = async() => {
  const {chooseLocation} = useMap();
  const location = await chooseLocation();
  if(location.success) {
    form.info.constructionAddress = location.address;
    form.info.longitude = location.lon;
    form.info.latitude = location.lat;
    form.info.districtId = location.districtId;
  }
}

</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
  margin: 15rpx 0;
}
.opts {

}

</style>