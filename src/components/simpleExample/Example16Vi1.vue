<template>
    <button @click="num+=3">
        {{ num }}
    </button>
</template>
<script lang="ts">


// export default - экспортирует в этот компонент функции 
export default{
    // data() - нужна для создания ref переменных этого компонент
    data(){
        return{
            // тоже самое что: let num = ref(0)
            num:0
        }
    }
}
</script>