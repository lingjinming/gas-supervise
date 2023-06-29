<template>
  <van-field v-bind="$attrs" @click-input="showCascader" is-link>
    <input hold-keyboard readonly :value="cascaderVal" slot="input" placeholder="请选择" />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <van-cascader v-bind="$attrs" :options="options" @change="change" @close="isShow=false" @finish="isShow=false"/>
  </van-popup>
</template>
<script setup lang="ts">
import { getDictList, getDistrict } from "@/api/dic";

const emits = defineEmits(["update:modelValue", "update:subjectType"]);
const props = defineProps({
  dicType: {
    type: String,
    default: "",
  },
  subjectType: {
    type: String,
    default: "",
  },
});
let isShow = ref(false);
let options = ref([]);
let cascaderVal = ref('');

const columnsObj = {
  RISK_SUBJECT_TYPE_TREE: async () => {
    let data = (await getDictList(props.dicType))["data"][props.dicType];
    options.value = data;
  },
  district: async () => {
    let data = [(await getDistrict())["data"]];
    console.log(data);
    data.forEach((item) => {
      item.text = item.name;
      item.value = item.code;
      if (item.children.length) {
        item.children.forEach((item2) => {
          item2.text = item2.name;
          item2.value = item2.code;
        });
      }
    });
    options.value = data;
  },
};

const showCascader = () => {
  isShow.value = true;
  Object.keys(columnsObj).includes(props.dicType) &&
    columnsObj[props.dicType]();
};

const change = (e) => {
  const detail = e.detail;
  console.log(detail);
  if (props.dicType == "RISK_SUBJECT_TYPE_TREE") {
    if(detail["selectedOptions"].length == 1){//未选择子集
      cascaderVal.value = detail["selectedOptions"][0]["label"];

      emits("update:subjectType", detail["value"]);
      emits("update:modelValue", '');

    }else{
      cascaderVal.value = detail["selectedOptions"][1]["label"];
      emits("update:modelValue", detail.value);
      emits("update:subjectType", detail["selectedOptions"][0]["value"]);
    }

  }

  if (props.dicType == "district") {
    cascaderVal.value = detail["selectedOptions"][1]["text"];
    emits("update:modelValue", detail.value);
  }
};
</script>
