<template>
  <van-detail :record="detail" :fields="fields" >
    <template #fileIds>
      <view class="item-label">现场照片</view>
      <view class="item-value">
        <van-image
          v-for="(item, index) in detail?.fileIds"
          :key="index"
          width="100px"
          height="100px"
          :src="item"
          fit="contain"
          lazy-load
          @click="previewImage(index)"
        />
      </view>
    </template>
  </van-detail>
</template>
<script setup lang="ts">
import { getAccidentDetailByAccidentId } from '@/api/gen/GasSuperviseApi'

const detail = ref();
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
  label: '现场照片',
  prop: 'fileIds'
}]

const previewImage = (i) => {}

onLoad((options) => {
  getDetail(options!.uid);
});

const getDetail = async (uid: string) => {
  const { data } = await getAccidentDetailByAccidentId(uid)
  detail.value = data
}
</script>
<style lang="scss" scoped>

</style>