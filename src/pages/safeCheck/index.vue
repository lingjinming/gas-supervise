<template>
<gas-tabs  swipeable animated sticky >
  <gas-tab key="全部" title="全部" >
    <SafeCheckTaskPageList  :checkType="type" :mine="false"></SafeCheckTaskPageList>
  </gas-tab>
  <gas-tab key="我的检查" title="我的检查">
    <SafeCheckTaskPageList :checkType="type" :mine="true"></SafeCheckTaskPageList>
  </gas-tab>
</gas-tabs>
</template>
<script setup lang="ts">
import SafeCheckTaskPageList from './components/PageList.vue'
import type { SafeCheckTaskPageQueryCheckType} from '@/api/gen/data-contracts'




const type = ref<SafeCheckTaskPageQueryCheckType>('SPECIAL');
onLoad((params) => {
  type.value = params?.type
  const title = type.value === 'DAILY' ? '日常安全检查' : type.value === 'SPECIAL' ? '专项安全检查' : '三方安全评价'
  uni.setNavigationBarTitle({ title })
})
</script>
<style lang="scss" scoped>

</style>