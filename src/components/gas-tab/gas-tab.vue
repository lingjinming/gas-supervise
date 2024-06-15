<template >
  <view class="gas-tab" :class="{'gas-tab_active':isMe}">
    <slot name="default">

    </slot>

  </view>
</template>
<script setup lang="ts">
import { inject,computed } from 'vue'

const props = defineProps({
  title: String,
  key: String
})
const data = inject('gas-tabs') as any;
const isMe = computed(() => data.active.value === props.key)
data.addMe(props.key, props.title)



</script>
<style lang="scss" scoped>
.gas-tab {

  flex-shrink: 0;
  width: 100vw;
  
}
</style>