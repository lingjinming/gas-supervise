<template>
  <gas-field
    v-bind="$attrs"
    readonly
    v-model="selected"
    :right-icon="icon"
    @click-right-icon="clickIcon"
  >
    <template #input>
      <uni-data-picker 
        placeholder="请选择" 
        :popup-title="title"
        :localdata="columns" 
        v-model="selected"
				@change="confirm" 
        >
      <template #default="{data, error, options}">
        {{ selected || placeholder || '请选择' }}
      </template>
      </uni-data-picker>
    </template>
  </gas-field>

</template>
<script setup lang="ts">
import { userStore } from "@/state";

const store = userStore()
const emits = defineEmits(["update:modelValue","onConfirm"]);
const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    required: false
  },
  dicType: {
    type: String,
    default: () => ''
  },
  options: {
    type: Array as PropType<GasOption[]>,
    default: () => []
  },
  beforClick: {
    type: Function,
    default: () => () => true
  },
  title: {
    type: String,
    default: () => ''
  },
  placeholder: {
    type: String,
    default: () => ''
  }
})

let columns: Ref<GasOption[]> = ref([]);
let map = computed(() => columns.value.reduce((acc,next) => {
  acc[next.value] = next.text;
  return acc;
},{}))

const selected = computed({
  get(){
    let val = props.modelValue;
    let optionsMap = map.value;
    return val&&optionsMap[val];
  },
  set(val){
    changEvent(val);
  }
})
const icon = computed(() => {
  return selected.value ? 'closeempty' : 'right'
})
const changEvent = (val) => {
  emits("update:modelValue", val);
}


const confirm = (e) => {
  const paths: GasOption[] = e.detail.value;
  let checked = paths[paths.length - 1];
  emits("onConfirm",checked)
  selected.value = checked.value;
};




watchEffect(() => {
  if(props.options.length) {
    columns.value = props.options;
  } else if(props.dicType) {
    Promise.resolve()
      .then(() =>  store.fetchDictionary(props.dicType))
      .then(options => {
      columns.value = options;
    })
  }
})



/**
 * 点击尾部icon,如果已经选中了,则清空选中
 * see bug: SMYFRJ2022005-3317
 */
const clickIcon = () => {
  if(selected.value) {
    changEvent(undefined)
  } else {
    showPicker();
  }
}

const showPicker =  () => {
  if(props.beforClick()) {
  }
};




</script>
