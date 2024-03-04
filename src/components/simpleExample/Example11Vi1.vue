<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)
</script>
<template>
    <!-- сработает только один раз -->
    <button @click.once="num++">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>