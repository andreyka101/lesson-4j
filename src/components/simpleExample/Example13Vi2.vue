<script setup lang="ts">
import {ref , computed} from 'vue'
const num = ref(1)
const numberTranslation = computed(()=>{
    return num.value == 1 ? 'один' : 'два'
})
</script>

<template>
    <button @click="num++">
        {{ numberTranslation }}
    </button>
</template>

<style scoped lang="scss"></style>