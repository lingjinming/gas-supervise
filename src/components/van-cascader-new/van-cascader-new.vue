<template>
  <van-field v-bind="$attrs" @click-input="showCascader">
    <input :value="cascaderVal" slot="input" readonly placeholder="请选择" />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <van-cascader v-bind="$attrs" :options="options" @finish="finish" />
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
let cascaderVal = ref([]);

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

const finish = (e) => {
  const detail = e.detail;
  isShow.value = false;
  console.log(detail);
  if (props.dicType == "RISK_SUBJECT_TYPE_TREE") {
    cascaderVal.value = detail["selectedOptions"][1]["label"];
    emits("update:modelValue", detail.value);
    console.log(detail["selectedOptions"][0]["value"]);
    emits("update:subjectType", detail["selectedOptions"][0]["value"]);
  }

  if (props.dicType == "district") {
    cascaderVal.value = detail["selectedOptions"][1]["text"];
    emits("update:modelValue", detail.value);
  }
};
</script>
