<style scoped lang="scss"></style>

<template>
    <div style="display: inline-flex;flex-direction: column;align-items: center;">
        <span>
            текущее значение {{ strNext }}
        </span>
        <span>
            прошлое значение {{ strPrev }}
        </span>
        <button @click="num++" class="GLASSlOLLIPOPS_button">
            {{ num }}
        </button>
    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            num: 0,
            strPrev: 0,
            strNext: 0
        }
    },
    // watch наблюдает за переменной и показывает текущие , прошлое значение
    watch:{
            // срабатывает при каждом изменение переменной
            num(next,prev){
            this.strNext = next
            this.strPrev = prev
        }
    }
}
</script>


<!-- LINK - тоже самое , но только короче -->
<!-- <script setup lang="ts">
import { ref , watch } from 'vue';
let num = ref(0)
let strPrev = ref(0)
let strNext = ref(0)
watch(num,(next,prev)=>{
    strNext.value = next
    strPrev.value = prev
})
</script> -->