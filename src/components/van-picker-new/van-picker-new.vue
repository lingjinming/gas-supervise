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
import type { DicItem ,SysOrgItem} from "@/api/model/SysDictionary";
import type { CheckPlanOptions } from "@/api/model/CheckPlan";

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
let columns: Ref<DicItem[] | SysOrgItem[] | CheckPlanOptions[]> = ref([]);
let pickerVal = ref([]);

const columnsObj = {
  org: async () => {
    let data = await getOrg();
    data.forEach((ele) => {
      ele.text = ele.shortName;
    });
    columns.value = data;
  },
  planCode: async () => {
    let data = await getCheckPlanByOrg(props.orgId);
    data.forEach((ele) => {
      ele.text = ele.value;
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

const getDictListFn = async (type:string) =>{
  let data = (await getDictList(type))[type];
  columns.value = data;
}

const showPicker = () => {
  isShow.value = true;
  if(Object.keys(columnsObj).includes(props.dicType)){
    columnsObj[props.dicType]();
  }else{
    getDictListFn(props.dicType);
  }
};

const confirm = (e) => {
  const value = e.detail.value;
  isShow.value = false;

  if (props.dicType == "planCode") {
    pickerVal.value = value.value;
    emits("update:modelValue", value.value);
  } else if (props.dicType == "org") {
    pickerVal.value = value.shortName;
    emits("update:modelValue", value.id);
  }else{
    pickerVal.value = value.label;
    emits("update:modelValue", value.value);
  }
};
</script>
