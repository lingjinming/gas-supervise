<template>
  <gas-field
    v-bind="$attrs"
    readonly
    v-model="selected"
    right-icon="right"
  >
    <template #input>
      <uni-data-picker 
        placeholder="请选择" 
        :popup-title="title"
        :localdata="options" 
        v-model="selected"
				@change="finish" 
        @nodeclick="onnodeclick" 
        @popupopened="onpopupopened" 
        @popupclosed="onpopupclosed">
      <template #default="{data, error, options}">
        {{ selected || placeholder || '请选择' }}
      </template>
      </uni-data-picker>
    </template>
  </gas-field>
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
  },
  placeholder: {
    type: String,
    default: "请选择"
  },
  title: {
    type: String,
    default: "请选择"
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


const onnodeclick = (e) => {
}
const onpopupopened = (e) => {
}
const onpopupclosed = (e) => {
}

watchEffect(() => {
  let type = props.dicType;
  Promise.resolve()
  .then(() => store.fetchDictionary(type))
  .then((dics) => {
    options.value = dics;
  })
})



type EventDetail = { value: GasOption[] }
const finish = (e: {detail: EventDetail}) => {
  isShow.value = false;
  const detail = e.detail;
  let paths = detail.value;
  emits("selectFinish", paths);
};

</script>
