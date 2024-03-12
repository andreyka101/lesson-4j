<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { useNumStore } from '../stores/numGlobal'

const num = useNumStore()
</script>

<!-- https://pinia-ru.netlify.app/introduction.html -->

<template>
        <div style="display: flex; justify-content: space-between;">
        <RouterLink to="/" class="GLASSlOLLIPOPS_a" style="margin: 30px;">exit</RouterLink>
    </div>
    <div class="GLASSlOLLIPOPS_div" style="text-align: center;">
        <button>
            {{ num.num }}
        </button>
    </div>

</template>

<style scoped lang="scss"></style>