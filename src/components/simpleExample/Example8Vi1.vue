<template>
    <button id="but" @click="num++ , fun()">
        {{ num }}
    </button>
</template>
<script lang="ts">
export default{
    data(){
        return{
            num:0
        }
    },
    methods:{
        fun(){
            let button = document.querySelector("#but") as HTMLButtonElement
            // console.log(button?.textContent)
            if (button?.textContent == '3'){
                button.style.display = "none"
            }
        }
    },
    // Это все Хуки жизненного цикла :
    beforeCreate() {
        console.log("beforeCreate  /",new Date)
    },
    created() {
        console.log("create  /",new Date)
    },
    beforeMount() {
        console.log("beforeMount  /",new Date)
    },
    mounted() {
        console.log("mounted  /",new Date)
    },
    beforeUpdate() {
        console.log("beforeUpdate  /",new Date)
    },
    updated() {
        console.log("update  /",new Date)
    },
    beforeUnmount() {
        console.log("beforeUnmount  /",new Date)
    },
    unmounted() {
        console.log("unmounted  /",new Date)
    },
}
</script>