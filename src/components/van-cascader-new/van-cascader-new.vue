<template>
  <van-field v-bind="$attrs" @click-input="showCascader" maxlength="200" is-link>
    <input hold-keyboard disabled readonly :value="cascaderVal" slot="input" style="width: 100%;" placeholder="请选择" />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <van-cascader v-bind="$attrs" :options="options" @change="change" @close="isShow=false" @finish="isShow=false"/>
  </van-popup>
</template>
<script setup lang="ts">
import { getDictList, getDistrict } from "@/api/dic";
import { getHidangerTypes } from "@/api/hidden";
import type { DicItem ,SysDistrictItem} from "@/api/model/SysDictionary";

const emits = defineEmits(["update:modelValue", "update:subjectType","update:dangerSubtype"]);
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
let options:Ref<DicItem[] | SysDistrictItem[]> = ref([]);
let cascaderVal = ref('');

const columnsObj = {
  RISK_SUBJECT_TYPE_TREE: async () => {
    let data = await getHidangerTypes();
    options.value = data;
  },
  district: async () => {
    let data = [(await getDistrict())];
    data.forEach((item) => {
      item.text = item.name;
      item.value = item.code;
      if (item.children && item.children.length) {
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
    let paths = detail["selectedOptions"];
    if(paths.length === 3) {
      emits("update:subjectType", paths[0].value);
      emits("update:modelValue", paths[1].value);
      emits("update:dangerSubtype", paths[2].value);
      cascaderVal.value = detail["selectedOptions"][2]["text"];
    }

  }

  if (props.dicType == "district") {
    cascaderVal.value = detail["selectedOptions"][1]["text"];
    emits("update:modelValue", detail.value);
  }
};
</script>
