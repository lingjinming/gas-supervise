<template>
    <notice v-for="(item,i) in notices" :key="i" :notice="item"></notice>
</template>
<script setup lang="ts">
const notices = ref([])
uni.$on('NOTICES',function(data){
        notices.value = data.NOTICES.value
        console.log(notices.value);

	})
</script>