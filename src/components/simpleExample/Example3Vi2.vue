<script setup lang="ts">
import { ref } from 'vue'
// локальная переменная этого компонента
let num = ref(0)
</script>
<!-- компонент возвращает все элементы которые внутри template -->
<template>
    <button @click="num+=2">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>