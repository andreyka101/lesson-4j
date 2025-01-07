<template>
    <button @click="num+=3">
        {{ num }}
    </button>
</template>
<script lang="ts">
// пример использования свойства data
export default{
    data(){
        return{
            num:0
        }
    }
}
</script>