<!-- LINK - lang = язык -->
<!-- LINK - с помощью setup при любом изменении или создании компонента будет срабатывать script -->
<script setup lang="ts">

import { ref } from 'vue'
//FIXME - написать нормальный комментарий
// Example18 router
import { createRouter, createWebHistory } from 'vue-router'
// Example19 pinia
import { createPinia } from 'pinia'

//SECTION - импортируем другие компоненты
import buttonPlus1 from '../components/simpleExample/Example3Vi1.vue'
import divBlock from '../components/simpleExample/Example4,5Vi1.vue'
import example6 from '../components/simpleExample/Example6Vi1.vue'
import buttonDataPlus from '../components/simpleExample/Example6Vi1x.vue'
import example7 from '../components/simpleExample/Example7Vi1.vue'
import example8 from '../components/simpleExample/Example8Vi1.vue'
import example11 from '../components/simpleExample/Example11Vi1.vue'
import example11u2 from '../components/simpleExample/Example11Vi2.vue'
import example13 from '../components/simpleExample/Example13Vi1.vue'
import example13u2 from '../components/simpleExample/Example13Vi2.vue'
import Example17 from '../components/simpleExample/Example17Vi1.vue'
//!SECTION

//SECTION - создание переменных
//LINK - обычная переменная
let str = "hi" // пример 1
//LINK - реактивные переменные создаются через ref()
let num = ref(0) // пример 2, 6
let num8 = ref(0) // пример 8
let num9 = ref(0) // пример 9
let num10 = ref(0) // пример 10
let num11 = ref(0) // пример 11
let arr12 = ref(['q', 'w', 'e', 'r', 't', 'y']) // пример 11
let nameClass = 'GLASSlOLLIPOPS_span spanFlex'
let yesNo = ref(false)
let url = ref('https://andreyka101.github.io/lesson-1j/')
let str12 = ref('ссылка 1')
let num14 = ref(0)
let str16 = ref('')
//!SECTION
</script>


<!-- NOTE - запомни :
    Атрибуты которые начинаются с (v-) называются директивы

    вместо v-on: можно писать @ 
    вместо v-bind: можно писать :
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
            <!-- SECTION - пример 1 -->
            <!-- ANCHOR - вставка переменной -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 1
                </span>
                <span class="GLASSlOLLIPOPS_span">
                    <!-- LINK - можно с помощью фигурных скобок вставлять переменную в html -->
                    {{ str }}
                </span>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 2 -->
            <!-- ANCHOR - с помощью двух кнопок меняем одну переменную num -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 2
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <!-- LINK - Атрибуты которые начинаются с (v-) называются директивы -->
                        <!-- LINK - директива v-on:click выполняет какое либо действие при клике -->
                        <button v-on:click="num++" class="GLASSlOLLIPOPS_button">
                            <!-- LINK - переменная num реактивная (ref()) по этому vue обрисовывает в HTML любое изменение переменной -->
                            {{ num }}
                        </button>
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <!-- LINK - @click тоже самое что v-on:click только короче -->
                        <button @click="num++" class="GLASSlOLLIPOPS_button">
                            <!-- LINK - переменная num реактивная (ref()) по этому vue обрисовывает в HTML любое изменение переменной -->
                            {{ num }}
                        </button>
                    </div>
                </div>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 3 -->
            <!-- ANCHOR - здесь два не закрывающиихся компонента каждый из них меняет и выводит свою локальную переменную num -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 3
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <!-- LINK - этот не закрывающийся компонент прибавляет свою переменную на 1 -->
                        <buttonPlus1 class="GLASSlOLLIPOPS_button" />
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            +1
                        </span>
                        <!-- LINK - у каждого компонента своя уникальная переменная num -->
                        <buttonPlus1 class="GLASSlOLLIPOPS_button" />
                    </div>
                </div>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 4 -->
            <!-- ANCHOR - закрывающийся компонент пример 1 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 4
                </span>
                <!-- LINK - передаю текст внутрь закрывающегося компонента -->
                <divBlock>
                    text
                </divBlock>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 5 -->
            <!-- ANCHOR - закрывающийся компонент пример 2 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 5
                </span>
                <!-- LINK - передаю два span внутрь закрывающегося компонента -->
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
            <!-- !SECTION -->
            <!-- SECTION - пример 6 -->
            <!-- ANCHOR - defineProps пример 1 -->
            <!-- LINK - компоненты example6 c помощью Props принимают переменную -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 6
                </span>
                <div style="display: flex;">
                    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
                        1 + 5
                        <!-- LINK - передаю компоненту число -->
                        <example6 class="GLASSlOLLIPOPS_button" :amount="5" />
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
                        1 + num
                        <!-- LINK - передаю компоненту значение переменной num -->
                        <example6 class="GLASSlOLLIPOPS_button" :amount="num" />
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
                        1 + "5"
                        <!-- LINK - если не писать (:) то передаём компоненту всегда строку -->
                        <example6 class="GLASSlOLLIPOPS_button" amount="5" />
                    </div>
                </div>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 7 -->
            <!-- ANCHOR - defineProps пример 2 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 7
                </span>
                <div style="display: flex;flex-direction: column;align-items: center;">
                    <!-- LINK - компонент example7 c помощью Props принимает обязательный массив и не обязательное число -->
                    <example7 :arr="[1, 2, 3]" :num="2" />
                </div>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 8 -->
            <!-- ANCHOR - директива v-if -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 8
                </span>
                <!-- LINK - пока в v-if находится значение true элемент отображается в DOM -->
                <!-- LINK - если в v-if находится значение false элемент удаляется из DOM -->
                <span v-if="num8 < 5">
                    v-if ({{ num8 }} < 5) 
                </span>
                <button @click="num8++" class="GLASSlOLLIPOPS_button">
                    {{ num8 }}
                </button>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 9 -->
            <!-- ANCHOR - директива v-else -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 9
                </span>
                <!-- LINK - пока в v-if находится значение true элемент отображается в DOM -->
                <!-- LINK - если в v-if находится значение false элемент удаляется из DOM -->
                <span v-if="num9 == 5">
                    ооо круто пять
                </span>
                <span v-else>
                    <!-- LINK - если v-if не сработала тогда элемент с v-else отображается в DOM -->
                    это не пять😞
                </span>
                <button @click="num9++" class="GLASSlOLLIPOPS_button">
                    {{ num9 }}
                </button>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 10 -->
            <!-- ANCHOR - директива v-else -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 10
                </span>
                <!-- LINK - пока в v-if находится значение true элемент отображается в DOM -->
                <!-- LINK - если в v-if находится значение false элемент удаляется из DOM -->
                <span v-if="num10 == 1" style="color:#FF6B6BFF;">
                    v-if num = 1
                </span>
                <!-- с помощью v-else-if создаём цепочку условий -->
                <span v-else-if="num10 == 2" style="color:#FFDC6BFF;">
                    v-else-if num = 2
                </span>
                <span v-else-if="num10 == 3" style="color:#8BFF6BFF;">
                    v-else-if num = 3
                </span>
                <!-- LINK - если не одно v-if из цепочки условий не сработала тогда элемент с v-else отображается в DOM -->
                <span v-else>
                    v-else
                </span>
                <button @click="num10++" class="GLASSlOLLIPOPS_button">
                    {{ num10 }}
                </button>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 11 -->
            <!-- ANCHOR - директива v-show -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 11
                </span>
                <!-- LINK - пока в v-show находится значение true элемент отображается -->
                <!-- LINK - если в v-show находится значение false элементу присваивается значение: display: none -->
                <!-- LINK - в отличие от v-if директива v-show не изменяет структуру DOM -->
                <span v-show="num11 < 7">
                    v-show ({{ num11 }} < 7) 
                </span>
                <button @click="num11++" class="GLASSlOLLIPOPS_button">
                    {{ num11 }}
                </button>
            </span>
            <!-- !SECTION -->
            <!-- SECTION - пример 12 -->
            <!-- ANCHOR - директива v-for -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 12
                </span>
                <div>
                    <!-- v-for обрисовывает элементы на основе массива -->
                    <span v-for="i in arr12" class="GLASSlOLLIPOPS_span">
                        {{ i }}
                    </span>
                </div>
            </span>
            <!-- !SECTION -->

            <!-- FIXME + ========================== -->
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
                    <!-- <example7 class="GLASSlOLLIPOPS_button" /> -->
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
            <!-- в @click есть методы это режимы addEventListener пример написание метода: @click.left -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
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
                        <example11 class="GLASSlOLLIPOPS_button" />
                    </span>
                    <span class="GLASSlOLLIPOPS_span spanFlex">
                        <span>
                            right
                        </span>
                        <example11u2 class="GLASSlOLLIPOPS_button" />
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
                        {{ str12 }}
                    </a>
                    <button @click="url = 'https://andreyka101.github.io/lesson-2j/', str12 = 'ссылка 2'"
                        class="GLASSlOLLIPOPS_button">
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
                        <example13 class="GLASSlOLLIPOPS_button" />
                    </div>
                    <div style="display: flex;flex-direction: column;align-items: center;">
                        <span>
                            v2
                        </span>
                        <example13u2 class="GLASSlOLLIPOPS_button" />
                    </div>
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
            <!-- ANCHOR - пример 17 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 17
                </span>
                <Example17 />
            </span>
            <!-- ANCHOR - пример 18 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 18
                </span>
                <span>
                    router
                </span>
                <!-- помни ты всегда находишься в App.vue -->
                <RouterLink to="/example18" class="GLASSlOLLIPOPS_a">
                    ссылка vue
                </RouterLink>
            </span>
            <!-- ANCHOR - пример 19 -->
            <span class="GLASSlOLLIPOPS_span spanFlex">
                <span class="title">
                    пример 19
                </span>
                <RouterLink to="/example19" class="GLASSlOLLIPOPS_a">
                    open
                </RouterLink>
            </span>
        </div>
    </div>
</template>

<!-- если писать scoped то стили будут работать только в этом файле -->
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
<!-- 1.18 -->