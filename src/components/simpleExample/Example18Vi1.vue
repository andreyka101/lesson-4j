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
            let tim = setInterval(() => {
                this.num--
            }, 100)
            if (this.num == 0) {

                clearInterval(tim)
            }
            // setTimeout(()=>{
            //     clearInterval(tim)
            // },1000)
        }
    }
}
</script>