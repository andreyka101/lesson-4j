<template>
    <button v-if="num != 3" id="but" @click="num++">
        {{ num }}
    </button>
</template>
<script lang="ts">
export default {
    data() {
        return {
            num: 0,
        }
    },
    methods: {

    },
    //SECTION -  Это все Хуки жизненного цикла :

    //LINK - beforeCreate - срабатывает после того как Рендерер сталкивается с компонентом
    beforeCreate() {
        console.log("beforeCreate  /", Date.now())
    },
    //LINK - create - срабатывает после Настройки API параметров инициализации
    created() {
        console.log("create  /", Date.now())
    },
    //LINK - beforeMount - срабатывает после Компиляции шаблонов компонента (если шаблоны есть)
    beforeMount() {
        console.log("beforeMount  /", Date.now())
    },
    //LINK - mounted - срабатывает после Начального рендеринга создания и вставки DOM узлов
    mounted() {
        console.log("mounted  /", Date.now())
    },
    //LINK - beforeUpdate - срабатывает после Изменения данных
    beforeUpdate() {
        console.log("beforeUpdate  /", Date.now())
        console.log("beforeUpdate - num =" , this.num)
    },
    //LINK - updated - срабатывает после Повторного рендера этого компонента уже с именёными данными
    updated() {
        console.log("updated  /", Date.now())
        console.log("updated - num =" , this.num)
    },
    // https://www.book2s.com/tutorials/vuejs-options-beforeunmount.html

    //FIXME - Когда компонент размонтируется
    //FIXME - Размонти ровано
    //LINK - beforeUnmount - вызывается перед размонтированием (удалением из DOM)
    beforeUnmount() {
        console.log("beforeUnmount  /", Date.now())
    },
    unmounted() {
        console.log("unmounted  /", Date.now())
    },
    //!SECTION
}
</script>