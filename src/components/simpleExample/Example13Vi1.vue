<style scoped lang="scss"></style>

<template>
    <button @click="num++">
        {{ numberTranslation }}
        <!-- {{ run }} -->
    </button>
</template>

<script lang="ts">
export default {
    data() {
        return {
            num: 1
        }
    },
    // methods:{
    //     run(){
    //         if (this.num <= 2) return this.num == 1 ? 'один' : 'два'
    //         else return this.num == 3 ? 'три' : 'много'
    //     }
    // },

    // Вычисляемое свойство
    computed: {
        numberTranslation() {
            if (this.num <= 2) return this.num == 1 ? 'один' : 'два'
            else return this.num == 3 ? 'три' : 'много'
        }
    }
}
</script>