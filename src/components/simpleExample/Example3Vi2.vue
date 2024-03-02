<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)
</script>
<template>
    <button @click="num+=2">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>