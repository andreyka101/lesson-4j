<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)
// defineProps(['amount'])
// 1.30 в видео установка vue
</script>
<template>
    <button @click="num++">
        {{ num }}
    </button>
    <!-- <button @click="num+=amount">
        {{ num }}
    </button> -->
</template>
<style scoped lang="scss"></style>