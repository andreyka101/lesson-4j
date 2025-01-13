<script setup lang="ts">
import { ref } from 'vue'

// с помощью defineProps этот компонент принимает переменные 
defineProps(['amount'])
let num = ref(0)
</script>
<template>
    <button @click="num ++">
        {{ num + amount }}
    </button>
</template>