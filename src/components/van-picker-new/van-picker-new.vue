<template>
  <van-field v-bind="$attrs" is-link clickable maxlength="200" @click-input="showPicker">
    <input hold-keyboard readonly disabled :value="pickerVal" slot="input" style="width: 100%;" placeholder="请选择" />
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
import { getDictList, getOrg } from "@/api/dic";
import { getCheckPlanByOrg } from "@/api/checkPlan";
import { userStore } from "@/state";


interface Options {
  text: string;
  value: string;
}
const store = userStore()
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  dicType: {
    type: String,
    default: "",
  },
  // 下拉选的默认值
  defaultValue: {
    type: String,
    default: "",
  },
  orgId: {
    type: String,
    default: "",
  },
});
let isShow = ref(false);
let columns: Ref<Options[]> = ref([]);
let pickerVal = ref('');

const columnsObj = {
  org: async () => {
    let data = await getOrg();
    columns.value = data.map(e => ({
      text: e.shortName,
      value: e.id
    }))
  },
  planCode: async () => {
    let data = await getCheckPlanByOrg(props.orgId);
    columns.value = data.map(e => ({
      text: e.value,
      value: e.value
    }))
  },
  SERVER_CONFIG: async () => {
    columns.value = store.auth.servers.map(e => ({
      text: e.label,
      value: e.value
    }))
  },
};

const getDictListFn = async (type:string) =>{
  if(columns.value.length) {
    return columns.value;
  }
  let data = (await getDictList(type))[type];
  columns.value = data;
  return data;
}
// 下拉选默认值
if(props.defaultValue) {
  const refDefault = toRefs(props).defaultValue
  watch(refDefault,(val)=> {
    getDictListFn(props.dicType).then((res) => {
    let theDefault = findOption(val);
    if(theDefault) {
      pickerVal.value = theDefault.text;
      emits("update:modelValue", theDefault.value);
    }
  })
  },{immediate: true})
}

const showPicker = () => {
  isShow.value = true;
  if(!columns.value.length) {
    if(Object.keys(columnsObj).includes(props.dicType)){
      columnsObj[props.dicType]();
    }else{
      getDictListFn(props.dicType);
    }
  }
};

const confirm = (e) => {
  const value: Options = e.detail.value;
  isShow.value = false;
  
  pickerVal.value = value.text;
  emits("update:modelValue", value.value);
};

const findOption = (value: string) :Options | undefined => {
  if(columns.value.length) {
    return columns.value.find(e => e.value === props.defaultValue)
  }
}
</script>
