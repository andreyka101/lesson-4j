<template>
    <button @click="fun(), num = 10">
        {{ num }}
    </button>
</template>
<script lang="ts">
export default {
    data() {
        return {
            num: 10
        }
    },
    // создание методов 
    methods: {
        fun() {
            //LINK - создаём setInterval и сохраняем в локальную переменную tim
            let tim = setInterval(() => {
                this.num--
                
                if (this.num == 0) {
                    //LINK - обращаемся к локальной переменной функции без this.
                    //LINK - функция clearInterval - удаляет setInterval
                    clearInterval(tim)
                }
            }, 100)
        }
    }
}
</script>