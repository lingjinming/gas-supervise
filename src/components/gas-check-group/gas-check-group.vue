<template>
  <view class="tab_box" :class="{ isColumn: isColumn }">
    <!-- 标题 -->
    <view v-if="title" class="tit">{{ title }}</view>
    <!-- 多选框们 -->
    <view class="tab_item_box">
      <!-- 追加一个全部 -->
      <template v-if="useAll">
        <view :class="[ 'tab_item flex_center_row', { cur: allClicked }]" @click="clickAll">全部</view>
      </template>

      <view  v-for="option in innerOpts" :key="option.label"
        :class="[ 'tab_item flex_center_row', { cur: isChecked(option) }]"
        @click="onChecked(option)" >

        {{ option.label }}

      </view>

    </view>
  </view>
</template>

<script setup lang="ts">
import { ref ,type Ref} from 'vue';
import { userStore } from '@/state';

type StringOrNumber = string | number;
const store = userStore();
const emits = defineEmits<{
  (e: 'update:modelValue',modelValue: StringOrNumber[]): void,
  (e: 'change',options: GasOption[]): void
}>();
const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<StringOrNumber>>,
    required: false
  },
   // 数据字典类型,和options二选一
  type: String,
  // 选项集合
  options: {
    type: Array as PropType<GasOption[]>,
    default: () => []
  },
  // 是否追加一个全部选项
  useAll: {
    type: Boolean,
    default: true
  },
  isColumn: Boolean,
  // 标题
  title: {
    type: String,
    required: true
  }
})

const innerOpts = ref<GasOption[]>([]);
const checked: Ref<GasOption[]> = ref([]);
const allClicked = ref(false)

const isChecked = (option: GasOption) => {
  return checked.value.includes(option);
};


onMounted(() => {
  if(props.type) {
    store.fetchDictionary(props.type).then(list => {
      innerOpts.value = [...list]
    })
  } else if(props.options.length) {
      innerOpts.value = [...props.options]
  }
})


let isInternalChange = false; 
watch(() => props.modelValue, (newModelValue) => {
  if(isInternalChange) {
    isInternalChange = false;
    return;
  }
  checked.value = innerOpts.value.filter(o => newModelValue?.includes(o.value));
  allClicked.value = checked.value.length === innerOpts.value.length;
})

watch(checked,(current: GasOption[]) => {
  emits("change", current);
  emits("update:modelValue", current.map(o => o.value));
  isInternalChange = true;
})


const onChecked = (option: GasOption) => {
  // 如果已经选中了 就给反选
  if(isChecked(option)) {
    checked.value = checked.value.filter(o => o !== option);
  } else {
    checked.value  = [...checked.value, option]
  }
};

const clickAll = () => {
  allClicked.value = !allClicked.value;
  checked.value = allClicked.value ? innerOpts.value : [];
}

</script>

<style lang="scss" scoped>
.tab_box {
  margin-bottom: 20rpx;
  .tit {
    color: #999;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 28rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #222222;
  }

  .tab_item_box {
    display: flex;
    flex-wrap: wrap;
    margin: 0rpx auto;

    .tab_item {
      position: relative;
      width: 30%;
      height: 72rpx;
      line-height: 72rpx;
      border-radius: 10rpx;
      color: #4B5B6C;
      background: #f5f6fa;
      margin-right: 30rpx;
      margin-top: 10rpx ;
      text-align: center;
      overflow: hidden;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    .cur {
      box-sizing: border-box;
      color: $uni-color-primary;
      background: #e9f1fb;
      border: 1rpx solid $uni-color-primary;
    }
  }
}

.isColumn {
  .tit {
    text-align: center;
    margin: 50rpx 0;
  }

  .tab_item_box {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tab_item {
      margin-right: 0;
      margin-bottom: 40rpx;
    }
  }
}
</style>
