<template>
  <van-field
    v-bind="$attrs"
    @click-input="showCascader"
    maxlength="200"
    is-link
  >
    <input
      hold-keyboard
      disabled
      readonly
      :value="fieldValue"
      slot="input"
      style="width: 100%"
      placeholder="请选择"
    />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <!-- <input @change="filter" v-model="inputVal" type="text" /> -->
    <van-cascader
      swipeable
      active-color="#ee0a24"
      :options="options"
      @close="isShow = false"
      @finish="finish"
    >
    </van-cascader>
  </van-popup>
</template>
<script setup lang="ts">
import { userStore } from "@/state";

const emits = defineEmits<{
  (e: 'update:modelValue',modelValue: string|number): void,
  (e: 'update:subjectType',value: string|number): void,
  (e: 'update:dangerSubtype',value: string|number): void,
  (e: 'selectFinish',value: GasOption[]): void,
}>();

const props = defineProps({
  // 数据字典编码
  dicType: {
    type: String,
    required: true,
  },
  // 绑定值
  modelValue: {
    type: [String, Number],
    required: true,
  },
  // 一级分类
  subjectType: {
    type: String,
    default: "",
  },
  // 二级分类
  dangerSubtype: {
    type: String,
    default: "",
  },
})

const store = userStore();
let isShow = ref(false);
let options: Ref<GasOption[]> = ref([]);
let fieldValue = ref("");


onMounted(() => {
  store.fetchDictionary(props.dicType).then(dics => {
    options.value = dics;
    // 反显出来
    reshow();
  })
})

watch(() => props.modelValue, () => {
  reshow()
})

function reshow(option?: GasOption) {
  if(option) {
    fieldValue.value = option.text;
  } else if(props.modelValue) {
    let theDefault = findOptionDFS(props.modelValue,options.value);
    if(theDefault) {
      fieldValue.value = theDefault.text;
    }
  } else {
    fieldValue.value = "";
  }
}

// DFS 深度优先遍历查找
function findOptionDFS(value: string | number,list: GasOption[]) : GasOption | undefined {
  for (let i = 0; i < list.length; i++) {
    const option = list[i];
    if(option.value === value) {
      return option;
    } else if(option.children?.length) {
      const target = findOptionDFS(value,option.children);
      if(target) {
        return target;
      }
    }
  }
  return void(0);
}


const showCascader = async () => isShow.value = true;

type EventDetail = { value: string | number, selectedOptions: GasOption[], tabIndex: number }
const finish = (e: {detail: EventDetail}) => {
  isShow.value = false;
  const detail = e.detail;
  let paths = detail.selectedOptions;
  const last = paths[paths.length - 1];
  if (props.dicType == "RISK_SUBJECT_TYPE_TREE") {
      emits("update:subjectType", paths[0].value);
      emits("update:modelValue", paths[1].value);
      emits("update:dangerSubtype", paths[2].value);
  } else {
      emits("update:modelValue", detail.value);
  }
  emits("selectFinish", detail.selectedOptions);
  reshow(last);
};

</script>
