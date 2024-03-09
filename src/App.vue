<script setup lang="ts">

import { ref } from 'vue'
import buttonPlus1 from './components/simpleExample/Example3Vi1N.vue'
import buttonPlus2 from './components/simpleExample/Example3Vi2.vue'
import divBlock from './components/simpleExample/Example4,5Vi1.vue'
import buttonDataPlus from './components/simpleExample/Example6Vi1.vue'
import example7 from './components/simpleExample/Example7Vi1.vue'
import example8 from './components/simpleExample/Example8Vi1.vue'
import example11 from './components/simpleExample/Example11Vi1.vue'
import example11u2 from './components/simpleExample/Example11Vi2.vue'
import example13 from './components/simpleExample/Example13Vi1.vue'
let str = "hi"
let num = ref(0)
let nameClass = 'GLASSlOLLIPOPS_span spanFlex'
let yesNo = ref(false)
let url = ref('https://andreyka101.github.io/lesson-1j/')
let str12 = ref('ссылка 1')
let num14 = ref(0)
let letters = ref(['q','w','e','r','t','y'])
let str16 = ref('')
</script>

<!-- NOTE - запомни :
    вместо v-on: можно писать @ ;
    вместо v-bind: можно писать : ;
-->

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
            <!-- ANCHOR - пример 9 -->
            <span v-bind:class="nameClass">
                <span class="title">
                    пример 9
                </span>
                <span>
                    v - bind : class
                </span>
            </span>
            <!-- ANCHOR - пример 10 -->
            <span v-bind:class="nameClass">
                <span class="title">
                    пример 10
                </span>
                <span>
                    {{ yesNo ? 'YES' : 'NO' }}
                </span>
                <button @click="yesNo = true" class="GLASSlOLLIPOPS_button">
                    клик
                </button>
            </span>
            <!-- ANCHOR - пример 11 -->
            <span  class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 11
                </span>
                <span>
                    модификаторы
                </span>
                <div>
                    <span class="GLASSlOLLIPOPS_span spanFlex">
                        <span>
                            once
                        </span>
                        <example11  class="GLASSlOLLIPOPS_button" />
                    </span>
                    <span class="GLASSlOLLIPOPS_span spanFlex">
                        <span>
                            right
                        </span>
                        <example11u2  class="GLASSlOLLIPOPS_button" />
                    </span>
                </div>
            </span>
            <!-- ANCHOR - пример 12 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 12
                </span>
                <span>
                    изменение ссылки
                </span>
                <div>
                    <!-- ещё можно писать :href -->
                    <a v-bind:href="url" class="GLASSlOLLIPOPS_a">
                        {{str12}}
                    </a>
                    <button @click="url='https://andreyka101.github.io/lesson-2j/' , str12='ссылка 2'" class="GLASSlOLLIPOPS_button">
                        изменить url
                    </button>
                </div>
            </span>
            <!-- ANCHOR - пример 13 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 13
                </span>
                <span>
                    количество кликов
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            v1
                        </span>
                        <example13 class="GLASSlOLLIPOPS_button"/>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            v2
                        </span>
                        <example13 class="GLASSlOLLIPOPS_button"/>
                    </div>
                </div>
            </span>
            <!-- ANCHOR - пример 14 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 14
                </span>
                <span v-if="num14==5">
                    ооо круто пять
                </span>
                <span v-else>
                    это не пять😞
                </span>
                <button @click="num14++" class="GLASSlOLLIPOPS_button">
                    {{ num14 }}
                </button>
            </span>
            <!-- ANCHOR - пример 15 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 15
                </span>
                <div>
                    <span v-for="i in letters" class="GLASSlOLLIPOPS_span">
                        {{ i }}
                    </span>
                </div>
            </span>
            <!-- ANCHOR - пример 16 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 16
                </span>
                <span style="margin-bottom: 6px;">
                    {{ str16 }}
                </span>
                <input v-model="str16" type="text" class="GLASSlOLLIPOPS_input">
                <button @click="str16 = str16 + ' x_x '" class="GLASSlOLLIPOPS_button">
                    + x_x
                </button>
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
<!-- 0.25 -->