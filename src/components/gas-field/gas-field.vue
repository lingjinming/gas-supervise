<template>
<van-field  v-bind="$attrs" 
          @click-input="inputClick" 
          @input="inputChange" 
          :innerValue="modelValue">

</van-field>
</template>
<script lang="ts" setup>

const emits = defineEmits(["update:modelValue","click-input"]);
const props = defineProps<{
  modelValue: string;
 }>();

const inputChange = (event) => {
  let value = event.detail;
  emits("update:modelValue", value);
}

const inputClick = (e) => {
  emits("click-input", e);
}

</script>
<style lang="scss" scoped>
</style>