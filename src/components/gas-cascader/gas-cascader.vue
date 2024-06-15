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
      :value="selected"
      slot="input"
      style="width: 100%"
      placeholder="请选择"
    />
  </van-field>
  <van-popup :show="isShow" root-portal round position="bottom">
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
import { flatten } from './index';
const emits = defineEmits<{
  (e: 'update:modelValue',modelValue: string|number|undefined): void,
  (e: 'selectFinish',value: GasOption[]): void,
}>();

const props = defineProps({
  // 数据字典编码
  dicType: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: false,
  }
})

const store = userStore();
let isShow = ref(false);
let options: Ref<GasOption[]> = ref([]);
let optionsMap = computed(() => flatten(options.value))

const selected = computed<string|number|undefined>({
  get(){
    let value = props.modelValue;
    let map = optionsMap.value;
    return value && map[value]?.text;
  },
  set(val) {
    emits("update:modelValue", val);
  }
})

watchEffect(() => {
  let type = props.dicType;
  Promise.resolve()
  .then(() => store.fetchDictionary(type))
  .then((dics) => {
    options.value = dics;
  })
})






const showCascader = async () => isShow.value = true;

type EventDetail = { value: string | number, selectedOptions: GasOption[], tabIndex: number }
const finish = (e: {detail: EventDetail}) => {
  isShow.value = false;
  const detail = e.detail;
  let paths = detail.selectedOptions;
  selected.value = detail.value;
  emits("selectFinish", paths);
};

</script>
