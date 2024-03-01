<script setup lang="ts">
let str = "hi"
let num = 0
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
        <div>
            <button @click="num++" class="GLASSlOLLIPOPS_button">
                {{num}}
            </button>
            <button @click="num++" class="GLASSlOLLIPOPS_button">
                {{num}}
            </button>
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