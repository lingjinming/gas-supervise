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
    :defaultValue="form.info.buildType"
    v-model="form.info.buildType"
  />
  <van-picker-new
    dicType="RISK_THIRD_BUILD_STATE"
    label="施工状态"
    title="施工状态"
    :defaultValue="form.info.buildState"
    v-model="form.info.buildState"
  />
  <!-- 政府用户,需要选择企业 -->
  <van-picker-new
    v-if="!isOrg && !form.isEdit"
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
    :innerValue="form.info.buildUnitName"
    @change="form.info.buildUnitName = $event.detail"
    label="建设单位"
    placeholder="请输入建设单位"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.buildUnitContactName"
    :innerValue="form.info.buildUnitContactName"
    @change="form.info.buildUnitContactName = $event.detail"
    label="联系人"
    placeholder="请输入建设单位联系人"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.buildUnitContactPhone"
    :innerValue="form.info.buildUnitContactPhone"
    @change="form.info.buildUnitContactPhone = $event.detail"
    label="联系方式"
    placeholder="请输入建设单位联系人手机号"
    maxlength="200"
  />
  <view class="line"></view>
  <van-field
    required
    :value="form.info.supUnitName"
    :innerValue="form.info.supUnitName"
    @change="form.info.supUnitName = $event.detail"
    label="监理单位"
    placeholder="请输入监理单位"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.supUnitContactName"
    :innerValue="form.info.supUnitContactName"
    @change="form.info.supUnitContactName = $event.detail"
    label="联系人"
    placeholder="请输入监理单位单位联系人"
    maxlength="200"
  />
  <van-field
    required
    :value="form.info.supUnitContactPhone"
    :innerValue="form.info.supUnitContactPhone"
    @change="form.info.supUnitContactPhone = $event.detail"
    label="联系方式"
    placeholder="请输入监理单位联系人手机号"
    maxlength="200"
  />
</van-cell-group>

<view class="opts">
  <view class="btn-save" v-if="form.isEdit">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="save"
      >保存</van-button
    >
  </view>
  <view class="btn-save"  v-else>
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="nextStep"
      >下一步</van-button
    >
  </view>
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
import { detail,updateThirdBuildInfo } from '@/api/generated/ThirdBuild'
import type { ThirdBuildInfoCreateDTO} from '@/api/generated/data-contracts'
import { userStore } from "@/state";
import { formatDate } from "@/utils";
import { minDate } from "@/hooks";
import { useMap } from '@/hooks/useMap';
import {useLoading} from '@/hooks/useLoading'
import {EventType} from '@/enums/eventType'

const store =  userStore()
const isOrg = store.isOrgUser

const isShow = ref(false)
const form = reactive({
  uid: '',
  isEdit: false,
  info: <ThirdBuildInfoCreateDTO>{
    planTimeStart: formatDate(minDate),
    planTimeEnd: formatDate(minDate),
    buildType: 'DLGZ',
    buildState: 'NOT_STARTED',
    buildUnitName:'',
    buildUnitContactName:'',
    buildUnitContactPhone:'',
    supUnitName:'',
    supUnitContactName: '',
    supUnitContactPhone: ''
  },
})

onLoad(options => {
  form.isEdit = !!options?.uid;
  // 拉一下详情
  if(form.isEdit) {
    form.uid = options!.uid;
    detail(form.uid).then(res => {
      // 反显一下
      form.info = res.data;

    })
  }
})


const onCalendarConfirm = (e) => {
  form.info.planTimeStart = formatDate(e.detail[0]);
  form.info.planTimeEnd = formatDate(e.detail[1]);
  isShow.value = false;
};

// 保存更新
const save = () => {
  const result = updateThirdBuildInfo(form.uid,form.info);
  useLoading(result, () => {
    uni.$emit(EventType.THIRD_BUILD_REFRESH)
    uni.navigateBack();
  })
}

// 下一步去看护
const nextStep = () => {
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
  .btn-save {
    background: #fff;
    height: 160rpx;
    padding: 30rpx 20rpx;
  }
}

</style>