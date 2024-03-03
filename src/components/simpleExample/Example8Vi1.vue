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
        console.log("beforeCreate  /", Date.now())
    },
    created() {
        console.log("create  /", Date.now())
    },
    beforeMount() {
        console.log("beforeMount  /", Date.now())
    },
    mounted() {
        console.log("mounted  /", Date.now())
    },
    beforeUpdate() {
        console.log("beforeUpdate  /", Date.now())
    },
    updated() {
        console.log("update  /", Date.now())
    },
    beforeUnmount() {
        console.log("beforeUnmount  /", Date.now())
    },
    unmounted() {
        console.log("unmounted  /", Date.now())
    },
}
</script>