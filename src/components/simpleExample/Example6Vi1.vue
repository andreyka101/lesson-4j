<script setup lang="ts">
import { ref } from 'vue'

//LINK -  с помощью defineProps этот компонент принимает переменную
defineProps(['amount'])
let num = ref(0)
</script>
<template>
    <button @click="num ++">
        <!-- LINK - переменные defineProps всегда реактивные -->
        {{ num + amount }}
    </button>
</template>