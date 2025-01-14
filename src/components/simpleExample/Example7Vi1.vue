<script setup lang="ts">
import { log } from 'console';
import { ref } from 'vue'
const { arr } = defineProps(['arr'])
let num = ref(0)
let arr_loc = ref(arr)
function arr_click(){
    num.value++
    for(let i in arr){
        arr_loc.value[i] += num
    }
}

</script>
<template>
    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
        arr = {{ arr }}
        <button @click="arr_click()"  class="GLASSlOLLIPOPS_button">
            {{ arr_loc }}
        </button>
    </div>
</template>