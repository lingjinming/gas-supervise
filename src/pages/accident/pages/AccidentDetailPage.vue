<template>
  <van-detail :record="detail" :fields="fields" />
  <view class="edit-btn">
    <van-button 
      custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
        color="#a7a7a7"
        plain
        size="large"
        type="default"
        @click="goEdit"
        >编辑</van-button
      >
  </view>
</template>
<script setup lang="ts">
import { getAccidentDetailByAccidentId } from '@/api/gen/GasSuperviseApi'
import type {AccidentVO } from '@/api/gen/data-contracts'

const detail = ref<AccidentVO>();
const fields = [{
  label: '事故时间',
  prop: 'accidentTime'
},{
  label: '所属企业',
  prop: '_orgId'
},{
  label: '所属区域',
  prop: '_districtId'
},{
  label: '事故地点',
  prop: 'address'
},{
  label: '事故类型',
  prop: '_accidentType'
},{
  label: '事故场景',
  prop: '_accidentScene'
},{
  label: '事故等级',
  prop: '_accidentLevel'
},{
  label: '死亡人数',
  prop: 'deathCnt'
},{
  label: '受伤人数',
  prop: 'injuredCnt'
},{
  label: '事故描述',
  prop: 'describe'
},{
  label: '事故报告',
  isFile: true,
  prop: 'fileIds'
}]

onLoad((options) => {
  getDetail(options!.uid);
});

const goEdit = () => {
  uni.navigateTo({
    url: `/pages/accident/pages/AccidentEditPage?accidentId=${detail.value!.accidentId}`,
    success: (res) => {
      res.eventChannel.emit('editAccident', { formData: detail.value })
    }
  });
}

const getDetail = async (uid: string) => {
  const { data } = await getAccidentDetailByAccidentId(uid)
  detail.value = data
}
</script>
<style lang="scss" scoped>

.edit-btn {
  height: 160rpx;
  padding: 30rpx 20rpx;
}

</style>