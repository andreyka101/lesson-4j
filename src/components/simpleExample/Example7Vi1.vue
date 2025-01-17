<script setup lang="ts">
import { log } from 'console';
import { ref } from 'vue'
const { arr } = defineProps(['arr'])
let num = ref(0)
let arr_loc = [] as Array<number>
function arr_click(){
    num.value++
    for(let i in arr){
        // arr_loc.push(arr[i])
        arr[i] += num.value
    }
    console.log(arr)
    console.log(arr_loc)
}

</script>
<template>
    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
        arr = {{ arr }}
        <button @click="arr_click()"  class="GLASSlOLLIPOPS_button">
            {{ arr }}
        </button>
    </div>
</template>