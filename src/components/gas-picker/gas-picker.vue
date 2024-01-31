<template>
  <van-field v-bind="$attrs" is-link clickable maxlength="200" @click-input="showPicker">
    <input hold-keyboard readonly disabled :value="pickerVal?.text" slot="input" style="width: 100%;" placeholder="请选择" />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <van-picker
      hold-keyboard	
      show-toolbar
      v-bind="$attrs"
      :columns="columns"
      @confirm="confirm"
      @cancel="isShow = false"
    />
  </van-popup>
</template>
<script setup lang="ts">
import { userStore } from "@/state";

const store = userStore()
const emits = defineEmits(["update:modelValue"]);


const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    required: true
  },
  dicType: {
    type: String,
    default: () => ''
  },
  options: {
    type: Array as PropType<GasOption[]>,
    default: () => []
  }
})

let isShow = ref(false);
let columns: Ref<GasOption[]> = ref([]);


// 选中的下拉选
let pickerVal = ref<GasOption|undefined>();
const confirm = (e) => {
  const value: GasOption = e.detail.value;
  pickerVal.value = value;
  isShow.value = false;
};
const findOption = (value: string|number) :GasOption | undefined => {
  if(columns.value.length && value) {
    return columns.value.find(e => e.value === value)
  }
}
// 初始化/options变更时反显
const reshow = () => {
  if(columns.value.length && !pickerVal.value) {
    let dicValue = props.modelValue ;
    let theDefault = findOption(dicValue);
    if(theDefault) {
      pickerVal.value = theDefault;
    }
  }
}
watch(pickerVal,(newPick) => {
  if(newPick?.value) {
    emits("update:modelValue", newPick.value);
  }
})

watch(() => props.options,(newOptions) => {
      columns.value = newOptions||[];
      reshow();
    },{immediate: true})

onMounted(() => {
  if(props.dicType) {
    store.fetchDictionary(props.dicType).then(options => {
      columns.value = options;
      reshow();
    })
  }
})





const showPicker =  () => {
  isShow.value = true;
};




</script>
