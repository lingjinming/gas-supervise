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
const props = withDefaults(defineProps<{
  modelValue: string;
  dicType: string;
  defaultValue: string;
  // 提供一组准备好的选项
  options?: GasOption[];
  // 或者提供一个异步获取选项的方法
  fetcher?: () => Promise<GasOption[]>;
}>(),{
  dicType: "",
  defaultValue: "",
})

let isShow = ref(false);
let columns: Ref<GasOption[]> = ref([]);
// 选中的下拉选
let pickerVal = ref<GasOption|undefined>();

onMounted(() => {
  if(props.options) {
    columns.value = props.options;
  } else if(props.fetcher) {
    props.fetcher().then(options => {
      columns.value = options;
    })
  } else if(props.dicType) {
    store.fetchDictionary(props.dicType).then(options => {
      columns.value = options;
    })
  }
})

watch(columns,(newCols) => {
  // 下拉选默认值还原出来
  if(newCols.length && !pickerVal.value) {
    let dicValue = props.modelValue || props.defaultValue;
    let theDefault = findOption(dicValue);
    if(theDefault) {
      pickerVal.value = theDefault;
    }
  }
})

watch(pickerVal,(newPick) => {
  if(newPick?.value) {
    emits("update:modelValue", newPick.value);
  }
})

const showPicker = async () => {
  isShow.value = true;
};

const confirm = (e) => {
  const value: GasOption = e.detail.value;
  pickerVal.value = value;
  isShow.value = false;
};

const findOption = (value: string) :GasOption | undefined => {
  if(columns.value.length && value) {
    return columns.value.find(e => e.value === value)
  }
}
</script>
