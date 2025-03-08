<template>
    <button @click="num+=3">
        {{ num }}
    </button>
</template>


<!--  -->
<script lang="ts">

//LINK - export default - экспортирует в этот компонент функции или переменные
export default{
    //LINK - data() - нужна для создания ref переменных этого компонент
    data(){
        return{
            //LINK - тоже самое что: let num = ref(0)
            num:0
        }
    }
}
</script>