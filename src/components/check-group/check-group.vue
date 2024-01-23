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

      <view  v-for="option in options" :key="option.label"
        :class="[ 'tab_item flex_center_row', { cur: checked.includes(option.value) }]"
        @click="onChecked(option)" >

        {{ option.label }}

      </view>

    </view>
  </view>
</template>

<script setup lang="ts">
import { ref ,type Ref} from 'vue';
import { userStore } from '@/state';


const store = userStore();
const emits = defineEmits(["update:modelValue","change"]);
const props = withDefaults(defineProps<{
  modelValue: any[],
  isColumn?: boolean,
  // 是否追加一个全部选项
  useAll?:  boolean,
  // 标题
  title: string,
  // 数据字典类型,和options二选一
  type?: string,
  // 选项集合
  options?: GasOption[]
}>(),{
  useAll: false,
  isColumn: false,
  type: '',
  title: '多选',
  options: () => []
})

const checked: Ref<unknown[]> = ref([]);
const allClicked = ref(false)
if(props.type) {
  store.fetchDictionary(props.type).then(options => {
    props.options.push(...options)
  })
}

watch(() => props.modelValue, (val) => {
 if(!val || !val.length) {
  checked.value = []
 }
})

const onChecked = (option: GasOption) => {
  // 如果已经选中了 就给反选
  if(checked.value.includes(option.value)) {
    checked.value = checked.value.filter(o => o !== option.value);
  } else {
    checked.value  = [...checked.value, option.value]
  }
  emits("update:modelValue", checked.value);
  emits("change", [option]);
};

const clickAll = () => {
  allClicked.value = !allClicked.value;
  // 选中全部
  if(allClicked.value) {
    checked.value = props.options.map(o => o.value)
    emits("change", props.options);
  }
  // 反选 
  else {
    checked.value = []
    emits("change", []);
  }
  emits("update:modelValue", checked.value);
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
    

    .tab_item {
      position: relative;
      width: 194rpx;
      height: 72rpx;
      line-height: 72rpx;
      border-radius: 10rpx;
      color: #4B5B6C;
      background: #f5f6fa;
      margin-right: 20rpx;
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
