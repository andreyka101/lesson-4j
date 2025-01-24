<script setup lang="ts">
import { ref } from 'vue'

//LINK - с помощью defineProps этот компонент обязательно принимает массив и число
// const { arr , num } = defineProps(['arr' , 'num'])

//LINK - тоже самое ,но в defineProps прописаны типы
const { arr, num = 2 } = defineProps<{
    // обязательно принимает массив
    arr: Array<number>
    // не обязательно принимает число по умолчанию num = 2
    num?: number
}>()

//LINK - тоже самое ,но defineProps сохраняем в переменную prop, все переменные вызываются через точку
// const prop = defineProps(['arr' , 'num'])
// console.log(prop.num)
// console.log(prop.arr)



//NOTE - создаём локальный пустой массив
let arr_loc = ref([] as Array<number>)
// каждый элемент массива arr копируем в массив arr_loc
arr_loc.value = arr.slice()

// функция прибавляет num к каждому элементу массива arr_loc
function arr_click() {
    for (let i in arr_loc.value) {
        arr_loc.value[i] += num
    }
}

</script>
<template>
    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
        arr = {{ arr }}
        <p>
            num = {{ num }}
        </p>
        <!-- NOTE - функция вызывается при клике на кнопку -->
        <button @click="arr_click()" class="GLASSlOLLIPOPS_button">
            {{ arr_loc }}
        </button>
    </div>
</template>