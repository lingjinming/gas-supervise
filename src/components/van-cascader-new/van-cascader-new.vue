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

const emits = defineEmits([
  "update:modelValue",
  "update:subjectType",
  "update:dangerSubtype",
  "selectFinish",
]);
const props = withDefaults(defineProps<{
  dicType: string;
  modelValue: string;
  subjectType?: string;
  dangerSubtype?: string;
}>(),{
  subjectType: '',
  dangerSubtype: ''
})

const store = userStore();
let isShow = ref(false);
let options: Ref<GasOption[]> = ref([]);
let fieldValue = ref("");

onMounted(() => {
  store.fetchDictionary(props.dicType).then(dics => {
    options.value = dics;
    // 反显出来
    reShow();
  })
})

watch(() => props.modelValue, (val) => {
  reShow();
})

const reShow = () => {
  if(props.modelValue) {
    let theDefault = findOption(props.modelValue);
    if(theDefault) {
      fieldValue.value = theDefault.text;
    }
  } else {
    fieldValue.value = "";
  }
}

// 递归查找出来
const findOption = (value: string) => {
  let theDefault: GasOption | undefined;
  const find = (options: GasOption[]) => {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      if (option.value == value) {
        theDefault = option;
        break;
      } else if (option.children) {
        find(option.children);
      }
    }
  };
  find(options.value);
  return theDefault;
}

const showCascader = async () => {
  isShow.value = true;
};

type EventDetail = { value: string | number, selectedOptions: GasOption[], tabIndex: number }
const finish = (e: {detail: EventDetail}) => {
  isShow.value = false;
  const detail = e.detail;
  if (props.dicType == "RISK_SUBJECT_TYPE_TREE") {
      let paths = detail.selectedOptions;
      emits("update:subjectType", paths[0].value);
      emits("update:modelValue", paths[1].value);
      emits("update:dangerSubtype", paths[2].value);
  } else {
      emits("update:modelValue", detail.value);
  }
  emits("selectFinish", detail.selectedOptions);
};

</script>
