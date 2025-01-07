<script setup lang="ts">
import { ref } from 'vue'
let num = ref(9)
</script>
<template>
    <button @click="num ++">
        {{ num }}
    </button>
</template>