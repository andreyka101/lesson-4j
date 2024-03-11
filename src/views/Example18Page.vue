<script lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
export default{
    data(){
        return{
            num:0
        }
    },
    // создание методов 
    methods:{
        funPlus(){
            this.num++
        }
    }
}
</script>


<template>
        <div style="display: flex; justify-content: space-between;">
        <RouterLink to="/" class="GLASSlOLLIPOPS_a" style="margin: 30px;">exit</RouterLink>
    </div>
    <div class="GLASSlOLLIPOPS_div" style="text-align: center;">
        <button @click="funPlus">
            {{ num }}
        </button>
    </div>

</template>

<style scoped lang="scss"></style>