<template>
    <span>
        fun ({{ num_a }} + {{ num_b }}) * 2
    </span>
    <button @click="fun_X2()" class="GLASSlOLLIPOPS_button">
        {{ answer }}
    </button>
</template>
<script lang="ts">
// export default - экспортирует в этот компонент функции или переменные
    export default{
        // data() - нужна для создания ref переменных этого компонент
        data(){
            return{
                // тоже самое что: let num = ref(0)
                num_a:0,
                num_b:0,
                answer:0,
            }
        },
        //LINK - methods: - хранилище для методов (функций)
        methods:{
            fun_sum(a:number , b:number){
                console.log("run fun_sum")
                return a + b
            },
            fun_X2(){
                //LINK - если переменная создана в export default её нужно вызывать через this.
                this.num_a += 1
                this.num_b += 2
                //LINK - если функция создана в export default её нужно тоже вызывать через this.
                let num_sum = this.fun_sum(this.num_a , this.num_b)
                this.answer = num_sum * 2
            }
        }
    }
</script>