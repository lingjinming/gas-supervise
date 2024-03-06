<template>
  <van-field v-bind="$attrs" is-link clickable maxlength="200" @click-input="showPicker">
    <input hold-keyboard readonly disabled :value="pickerVal?.text" slot="input" style="width: 100%;" placeholder="请选择" />
  </van-field>
  <van-popup :show="isShow" root-portal round position="bottom">
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
  }
})

let isShow = ref(false);
let columns: Ref<GasOption[]> = ref([]);

// 选中的下拉选
let pickerVal = ref<GasOption|undefined>();
const confirm = (e) => {
  const selected: GasOption = e.detail.value;
  emits("update:modelValue", selected.value);
  isShow.value = false;
};
const findOption = (value?: string|number) :GasOption | undefined => {
  if(columns.value.length && value) {
    return columns.value.find(e => e.value === value)
  }
}

// 初始化/options变更时反显
const reshow = (option?: GasOption) => {
  if(option) {
    pickerVal.value = option;
  } else if(props.modelValue&&columns.value.length) {
    let theDefault = findOption(props.modelValue);
    if(theDefault) {
      pickerVal.value = theDefault;
    } else {
      emits("update:modelValue", undefined);
    }
  } else {
    pickerVal.value = undefined;
  }

}

watch(() => props.modelValue, (newValue) => {
  reshow();
})

// 监听提供的options变化
watch(() => props.options,(newOptions) => {
  if( newOptions && newOptions.length > 0) {
    columns.value = newOptions||[];
    reshow();
  }
},{immediate: true});


onMounted(() => {
  if(props.dicType) {
    store.fetchDictionary(props.dicType).then(options => {
      columns.value = options;
      reshow();
    })
  }
})





const showPicker =  () => {
  if(props.beforClick()) {
    isShow.value = true;
  }
};




</script>
