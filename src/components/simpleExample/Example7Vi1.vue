<script setup lang="ts">
import { ref } from 'vue'
defineProps(['arr', 'text'])
let num = 0
function arr_click(){
    num++
    
}

</script>
<template>
    <div style="display: flex;flex-direction: column;align-items: center; margin: 0 10px;">
        arr = {{ arr }}
        <button @click="arr_click()"  class="GLASSlOLLIPOPS_button">
            {{ arr[0] + num }}
        </button>
    </div>
</template>