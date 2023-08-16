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
      :value="fieldValue"
      slot="input"
      style="width: 100%"
      placeholder="请选择"
    />
  </van-field>
  <van-popup :show="isShow" round position="bottom">
    <!-- <input @change="filter" v-model="inputVal" type="text" /> -->
    <van-cascader
      swipeable
      active-color="#ee0a24"
      :value="cascaderValue"
      :options="options"
      @change="change"
      @close="isShow = false"
      @finish="isShow = false"
    />
  </van-popup>
</template>
<script setup lang="ts">
import { getDictList, getDistrict } from "@/api/dic";
import { getHidangerTypes } from "@/api/hidden";
import type { DicItem, SysDistrictItem } from "@/api/model/SysDictionary";

const emits = defineEmits([
  "update:modelValue",
  "update:subjectType",
  "update:dangerSubtype",
]);
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
let options: Ref<DicItem[] | SysDistrictItem[]> = ref([]);
let fieldValue = ref("");
let cascaderValue = ref([]);

const columnsObj = {
  RISK_SUBJECT_TYPE_TREE: async () => {
    let data = await getHidangerTypes();
    options.value = data;
  },
  district: async () => {
    let data = [await getDistrict()];
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
let inputVal = ref("");
// const filter = () => {
//   console.log("val", inputVal.value);
//   emits("update:modelValue", "ZTBZYH001");
// };

const change = (e) => {
  const detail = e.detail;
  console.log(detail);
  if (props.dicType == "RISK_SUBJECT_TYPE_TREE") {
    let paths = detail["selectedOptions"];
    if (paths.length === 3) {
      emits("update:subjectType", paths[0].value);
      emits("update:modelValue", paths[1].value);
      emits("update:dangerSubtype", paths[2].value);
      fieldValue.value = detail["selectedOptions"][2]["text"];
      // cascaderValue.value = [paths[0].value, paths[1].value, paths[2].value];
    }
  }

  if (props.dicType == "district") {
    fieldValue.value = detail["selectedOptions"][1]["text"];
    emits("update:modelValue", detail.value);
  }
};
</script>
