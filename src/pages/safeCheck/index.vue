<template>
<van-tabs  swipeable animated sticky :active="activeTab" @change="onChangeTab">
  <van-tab name="全部" title="全部" >
    <SafeCheckTaskPageList  :checkType="type" :mine="false"></SafeCheckTaskPageList>
  </van-tab>
  <van-tab name="我的检查" title="我的检查">
    <SafeCheckTaskPageList :checkType="type" :mine="true"></SafeCheckTaskPageList>
  </van-tab>
</van-tabs>
</template>
<script setup lang="ts">
import SafeCheckTaskPageList from './components/PageList.vue'
import type { SafeCheckTaskPageQueryCheckType} from '@/api/gen/data-contracts'


let activeTab = ref("全部");
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};

const type = ref<SafeCheckTaskPageQueryCheckType>('SPECIAL');
onLoad((params) => {
  type.value = params?.type
  const title = type.value === 'DAILY' ? '日常安全检查' : type.value === 'SPECIAL' ? '专项安全检查' : '三方安全评价'
  uni.setNavigationBarTitle({ title })
})
</script>
<style lang="scss" scoped>

</style>