<template>
  <scroll-view
    style="height: 100%;"
    scroll-y="true"
    class="scroll-Y"
  >
  <check v-for="(item,i) in checks" :key="i" :data="item" @refresh="getcheckPlanPageFn"/>

  </scroll-view>

</template>
<script setup lang="ts">
import { checkPlanPage } from "@/api/hidden";

let checks = ref([])
const getcheckPlanPageFn = async () => {
  let data = (
    await checkPlanPage({})
  )["data"];
  checks.value = data;

};
onMounted(() => {
  getcheckPlanPageFn();
});
</script>
