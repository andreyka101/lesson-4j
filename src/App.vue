<script setup lang="ts">
import { ref } from 'vue'
import buttonPlus1 from './components/simpleExample/Example3Vi1.vue'
import buttonPlus2 from './components/simpleExample/Example3Vi2.vue'
import divBlock from './components/simpleExample/Example4,5Vi1.vue'
import buttonDataPlus from './components/simpleExample/Example6Vi1.vue'
import example7 from './components/simpleExample/Example7Vi1.vue'
import example8 from './components/simpleExample/Example8Vi1.vue'
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
        <div style="display: flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
            <!-- ANCHOR - пример 1 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 1
                </span>
                <span class="GLASSlOLLIPOPS_span">
                    {{ str }}
                </span>
            </span>
            <!-- ANCHOR - пример 2 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 2
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +2
                        </span>
                        <button @click="num += 2" class="GLASSlOLLIPOPS_button">
                            {{ num }}
                        </button>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <button @click="num++" class="GLASSlOLLIPOPS_button">
                            {{ num }}
                        </button>
                    </div>
                </div>
            </span>
            <!-- ANCHOR - пример 3 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 3
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +2
                        </span>
                        <buttonPlus2 class="GLASSlOLLIPOPS_button" />
                        <!-- <buttonPlus1 class="GLASSlOLLIPOPS_button" :amount="2"/> -->
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <buttonPlus1 class="GLASSlOLLIPOPS_button" />
                        <!-- <buttonPlus1 class="GLASSlOLLIPOPS_button" :amount="1"/> -->
                    </div>
                </div>
            </span>
            <!-- ANCHOR - пример 4 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 4
                </span>
                <!-- передаю текст внутрь тега текст -->
                <divBlock>
                    text
                </divBlock>
            </span>
            <!-- ANCHOR - пример 5 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 5
                </span>
                <!-- передаю текст внутрь тега теги -->
                <divBlock>
                    <span class="GLASSlOLLIPOPS_span">
                        привет
                    </span>
                    я
                    <span class="GLASSlOLLIPOPS_span">
                        span
                    </span>
                </divBlock>
            </span>
            <!-- ANCHOR - пример 6 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 6
                </span>
                <div style="display: flex;flex-direction: column;align-items: center;">
                    <span>
                        +3
                    </span>
                    <buttonDataPlus class="GLASSlOLLIPOPS_button" />
                </div>
            </span>
            <!-- ANCHOR - пример 7 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 7
                </span>
                <div style="display: flex;flex-direction: column;align-items: center;">
                    <span>
                        пуск
                    </span>
                    <example7 class="GLASSlOLLIPOPS_button" />
                </div>
            </span>
            <!-- ANCHOR - пример 8 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 8
                </span>
                <div style="display: flex;flex-direction: column;align-items: center;">
                    <span>
                        смотри в консоль
                    </span>
                    <example8 class="GLASSlOLLIPOPS_button" />
                </div>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
h1 a {
    text-decoration: none;
    color: black;

}

h1 a:hover {
    color: #373737;
}

.GLASSlOLLIPOPS_div {
    h3 {
        display: flex;
        justify-content: center;
    }
}

.spanFlex {
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    .title {
        padding: 5px;
    }
}
</style>
<!-- 1.37 -->./components/simpleExample/Example4,5Vi1.vue