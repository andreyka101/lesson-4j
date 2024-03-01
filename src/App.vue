<script setup lang="ts">
import {ref} from 'vue'
import bip from './components/simpleExample/Example3Vi1.vue'
let str = "hi"
let num = ref(0)
</script>

<template>
<header class="GLASSlOLLIPOPS_header">
    <h1 style="margin-left: 30px;">
        <a href="https://andreyka101.github.io/collection-of-all-lessons/">
            Vue
        </a>
    </h1>
</header>
<div class="GLASSlOLLIPOPS_div">
    <h3>
        простые примеры
    </h3>
    <span class="GLASSlOLLIPOPS_span spanFlex">
        <span class="title">
            пример 1
        </span>
        <span  class="GLASSlOLLIPOPS_span">
            {{ str }}
        </span>
    </span>
    <span class="GLASSlOLLIPOPS_span spanFlex">
        <span class="title">
            пример 2
        </span>
        <div style="display: flex;">
            <div style="display: flex;flex-direction: column;align-items: center;">
                <span>
                    +2
                </span>
                <button @click="num+=2" class="GLASSlOLLIPOPS_button">
                    {{num}}
                </button>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;">
                <span>
                    +1
                </span>
                <button @click="num++" class="GLASSlOLLIPOPS_button">
                    {{num}}
                </button>
            </div>
            </div>
    </span>
    <span class="GLASSlOLLIPOPS_span spanFlex">
        <span class="title">
            пример 2
        </span>
        <div style="display: flex;">
            <div style="display: flex;flex-direction: column;align-items: center;">
                <span>
                    +2
                </span>
                <bip class="GLASSlOLLIPOPS_button" :amount="2">
                </bip>
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;">
                <span>
                    +1
                </span>
                <bip class="GLASSlOLLIPOPS_button" :amount="1">
                </bip>
            </div>
            </div>
    </span>
</div>
</template>

<style scoped lang="scss">
h1 a{
    text-decoration: none;
    color: black;
    
}
h1 a:hover{
    color: #373737;
}
.GLASSlOLLIPOPS_div{
    h3{
        display: flex;
        justify-content: center;
    }
}
.spanFlex{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    .title{
        padding: 5px;
    }
}



</style>
<!-- 1.19 -->