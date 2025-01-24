<script setup lang="ts">
import { ref } from 'vue'
//LINK - локальная переменная этого компонента (она реактивная)
let num = ref(0)

//LINK - получить или измить значение реактивной переменной в <script> можно только через .value
console.log(num.value)
</script>
<!-- LINK - компонент возвращает все элементы которые внутри template -->
<template>
    <button @click="num++">
        {{ num }}
    </button>
</template>
<style scoped lang="scss"></style>