<script setup lang="ts">
import { log } from 'console';
import { ref } from 'vue'
const { arr , num } = defineProps(['arr' , 'num'])
let arr_loc = ref([] as Array<number>)
arr_loc.value = arr.slice()
console.log(num)
function arr_click(){
    for(let i in arr_loc.value){
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
        <button @click="arr_click()"  class="GLASSlOLLIPOPS_button">
            {{ arr_loc }}
        </button>
    </div>
</template>