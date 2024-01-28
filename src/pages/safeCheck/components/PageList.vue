<template>
  <gas-table 
    ref="tabelRef"
    keyword="请输入企业名称或地址"
    :autoFetch="false"
    scrollViewStyle="height: 70vh;"
    :apiFun="getSafeCheckTaskPage" 
    :query="state.query"
    >
    <template #item="{ info }">
      <SafeCheckTaskPageItem :info="info"></SafeCheckTaskPageItem>
    </template>

    <template #search>
      <!-- 所属区域 -->
      <check-group useAll v-model="state.query.districtId" title="所属区域" type="district"></check-group>
      <!-- 企业类型 -->
      <check-group useAll v-model="state.query.targetType" title="企业类型" type="SAFE_CHECK_TARGET_TYPE"></check-group>
      <!-- 是否有隐患 -->
      <check-group useAll v-model="state.query.checkState" title="检查结果" type="SAFE_CHECK_TASK_STATE"></check-group>

    </template>
  </gas-table>
  <view class="opts">
    <view class="button" @click="goCreateSafeCheck"><van-icon name="plus" class="icon"/>新建检查</view>
  </view>

</template>
<script setup lang="ts">
import SafeCheckTaskPageItem from './PageItem.vue'
import { getSafeCheckTaskPage } from '@/api/gen/GasSuperviseApi'
import type { SafeCheckTaskPageQuery ,SafeCheckTaskPageQueryCheckType} from '@/api/gen/data-contracts'
import { EventType } from '../event'

const props = defineProps<{ checkType: SafeCheckTaskPageQueryCheckType, mine: boolean }>()
const state = reactive({
  showQuery: false,
  query: <SafeCheckTaskPageQuery>{
    keyword: '',
    targetType: [],
    checkState: [],
    districtId: '',
    checkType: [],
    mine: props.mine,
  }
})

const tabelRef = ref<any>(null);
const query = () => {
  tabelRef.value?.doQuery() 
}
onMounted(() => {
  uni.$on(EventType.REFRESH_PAGE, query);
  state.query.checkType = [props.checkType]
  query();
})

onUnmounted(() => {
  uni.$off(EventType.REFRESH_PAGE, query)
})



const goCreateSafeCheck = () => {
  uni.navigateTo({
    url: `/pages/safeCheck/pages/CreatePage`,
    success: (res) => {
      res.eventChannel.emit(EventType.CREATE_SAFE_CHECK, { checkType: props.checkType });
    }
  });
}


</script>
<style lang="scss" scoped>

.opts {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  width: 100%;
  background-color: #fff;
  padding: 30rpx;

  .button {
    width: 90%;
    height: 88rpx;
    border: 1px solid #868686;
    border-radius: 10rpx;

    font-size: 32rpx;
    font-weight: 500;
    color: #222222;
    line-height: 88rpx;
    text-align: center;

    .icon {
      margin-right: 15rpx
    }
  }
}

</style>