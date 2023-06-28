<template>
  <van-field v-bind="$attrs" is-link clickable @click-input="showPicker">
    <input hold-keyboard readonly disabled :value="pickerVal" slot="input"  placeholder="请选择" />
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
import { getCheckPlanByOrg } from "@/api/hidden";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  dicType: {
    type: String,
    default: "",
  },
  orgId: {
    type: String,
    default: "",
  },
});
let isShow = ref(false);
let columns = ref([]);
let pickerVal = ref([]);

const columnsObj = {
  org: async () => {
    let data = (await getOrg())["data"];
    data.forEach((ele) => {
      ele.text = ele.shortName;
    });
    columns.value = data;
  },
  planCode: async () => {
    let data = (await getCheckPlanByOrg(props.orgId))["data"];
    data.forEach((ele) => {
      ele.text = ele.value;
    });
    columns.value = data;
  },
  RISK_DANGER_LEVEL: async () => {
    let data = (await getDictList(props.dicType))["data"][props.dicType];
    data.forEach((ele) => {
      ele.text = ele.label;
    });
    columns.value = data;
  },
  SERVER_CONFIG: async () => {
    let data = uni.getStorageSync("SERVER_LIST");
    data.forEach((ele) => {
      ele.text = ele.label;
    });
    columns.value = data;
  },
};

const showPicker = () => {
  isShow.value = true;
  Object.keys(columnsObj).includes(props.dicType) &&
    columnsObj[props.dicType]();
};

const confirm = (e) => {
  const value = e.detail.value;
  isShow.value = false;

  if (props.dicType == "planCode") {
    pickerVal.value = value.value;
    emits("update:modelValue", value.value);
  }
  if (props.dicType == "org") {
    pickerVal.value = value.shortName;
    emits("update:modelValue", value.id);
  }
  if (props.dicType == "RISK_DANGER_LEVEL" || props.dicType == "SERVER_CONFIG") {
    pickerVal.value = value.label;
    emits("update:modelValue", value.value);
  }
};
</script>
