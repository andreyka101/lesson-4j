<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)
</script>
<template>
    <!-- можно нажать только правой кнопкой мыши   -->
    <button @click.right="num++">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>