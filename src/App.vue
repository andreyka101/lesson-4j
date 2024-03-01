<script setup lang="ts">
let str = "hi"
</script>

<template>
<header class="GLASSlOLLIPOPS_header">
    <h1 style="margin-left: 30px;">
        <a href="https://andreyka101.github.io/collection-of-all-lessons/">
            Vue
        </a>
    </h1>
</header>
<div class="GLASSlOLLIPOPS_div" style="height: 1000px;;">
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
        <button  class="GLASSlOLLIPOPS_button">
            tytfff
        </button>
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