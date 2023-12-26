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
      :innerValue="cascaderValue"
      :options="options"
      @change="change"
      @close="isShow = false"
      @finish="isShow = false"
    >
    </van-cascader>
  </van-popup>
</template>
<script setup lang="ts">
import { getHidangerTypes ,getUserMeDistrict} from "@/api/gen/GasSuperviseApi";


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
type DicTytpe = {
  text?: string,
  value?: string|number,
  children?: DicTytpe[]
}
let isShow = ref(false);
let options: Ref<DicTytpe[]> = ref([]);
let fieldValue = ref("");
let cascaderValue = ref([]);

const columnsObj = {
  RISK_SUBJECT_TYPE_TREE: async () => {
    let data = await getHidangerTypes();
    options.value = data.data || [];
  },
  district: async () => {
    let district = (await getUserMeDistrict()).data;
    if(district) {
      let {name,code,children} = district;
      options.value = [{text:name,value: code,children: children?.map(e => ({text: e.name,value: e.code}))}]
    } else {
      options.value = []
    }
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
