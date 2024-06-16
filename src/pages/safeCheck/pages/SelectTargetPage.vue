<template>
  <gas-table 
    ref="tabelRef"
    keyword="请输入企业名称或地址"
    :autoFetch="true"
    :apiFun="getSafeCheckTargetPage" 
    :query="state.query"
    >
    <template #item="{ info ,index}">
      <view @click.capture.stop="selectTarget(info,index)">
          <TargetPageItem class="page-item"  :info="info">
            <template #select>
              <template v-if="currentSelected === index">
                <uni-icons type="checkmarkempty" size="24" color="#006CFF"></uni-icons>
              </template>
              <template v-else>
                <uni-icons type="circle" size="24" color="#006CFF"></uni-icons>
              </template>
            </template>
        </TargetPageItem>
        </view>
    </template>
    <template #bottom>
      <button type="default" class="button" @click="selectOrCreate">{{ isSelected ? '确定' : '新建检查对象' }}</button>
    </template>
  </gas-table>

 
</template>
<script lang="ts" setup>
import { getSafeCheckTargetPage } from '@/api/gen/GasSuperviseApi';
import type { SafeCheckTargetDTO, PageRequest } from '@/api/gen/data-contracts'
import TargetPageItem from '../components/TargetPageItem.vue';
import {EventType} from '../event'

type PageItemType = SafeCheckTargetDTO&{selected?: boolean,_targetType?: string}

const state = reactive({
  showQuery: false,
  query: <PageRequest>{
    keyword: ''
  },
})

let eventChannel:UniApp.EventChannel|null = null;
onLoad(() => {
  const _this = getCurrentInstance();
  // @ts-ignore
  eventChannel = _this!.ctx.getOpenerEventChannel();
})



const currentSelected = ref<number>(-1)
const selected = ref<PageItemType|null>(null)
const isSelected = computed(() => currentSelected.value !== -1)
const selectTarget = (target: PageItemType,index: number) => {
  if(currentSelected.value === index) {
    currentSelected.value = -1;
    selected.value = null;
  } else {
    currentSelected.value = index
    selected.value = target;
  }
}

const selectOrCreate = () => {
  // 选中了检查对象
  if(selected.value) {
    sendBack(selected.value);
  }
  // 去新建检查对象
  else {
    uni.navigateTo({
      url: '/pages/safeCheck/pages/CreateTargetPage',
      events: {
        // 创建完成直接返回
        [EventType.CREATE_TARGET]: ({ target }) => {
          sendBack(target);
        }
      }
    })
  } 
}

const sendBack = (target: PageItemType) => {
  uni.navigateBack({
    delta:1,
    success: () => {
      eventChannel && eventChannel.emit(EventType.SELECTED_TARGET, { target });
    }
  });
  
}
</script>
<style lang="scss" scoped>
.button {
    width: calc(100% - 80rpx);
  }

</style>