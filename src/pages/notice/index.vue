<template>
    <notice v-for="(item,i) in notices" :key="i" :notice="item"></notice>
</template>
<script setup lang="ts">
let notices = []
uni.$on('NOTICES',function(data){
        notices = data.NOTICES.value
        console.log(notices);

	})
</script>