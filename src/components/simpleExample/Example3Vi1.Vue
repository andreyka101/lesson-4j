<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)
defineProps(['amount'])
</script>
<template>
    <button @click="num+=amount">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>