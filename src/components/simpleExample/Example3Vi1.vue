<script setup lang="ts">
import { ref } from 'vue'
// локальная переменная этого компонента
let num = ref(0)
//LINK -  defineProps(['amount'])
//LINK -  1.30 в видео установка vue
</script>
<!-- компонент возвращает все элементы которые внутри template -->
<template>
    <button @click="num++">
        {{ num }}
    </button>
    <!-- <button @click="num+=amount">
        {{ num }}
    </button> -->
</template>
<style scoped lang="scss"></style>