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

    //LINK - beforeCreate - срабатывает после того как Рендерер сталкивается с этим компонентом
    // (инициализации Options API не произошла: переменные и функции использовать нельзя)
    beforeCreate() {
        console.log("beforeCreate  /", Date.now())
        console.log("beforeCreate - num =" , this.num)
    },
    // https://v3.ru.vuejs.org/ru/api/options-api.html
    //LINK - create - срабатывает после инициализации Options API
    // (переменные и функции использовать можно)
    created() {
        console.log("create  /", Date.now())
        console.log("created - num =" , this.num)
    },
    //LINK - beforeMount - срабатывает перед монтированием (создания и вставки) компонента в DOM
    beforeMount() {
        console.log("beforeMount  /", Date.now())
    },
    //LINK - mounted - срабатывает после монтирования (создания и вставки) компонента в DOM
    mounted() {
        console.log("mounted  /", Date.now())
    },
    //LINK - beforeUpdate - срабатывает перед обновлением компонента , но после изменения данных
    beforeUpdate() {
        console.log("beforeUpdate  /", Date.now())
        console.log("beforeUpdate - num =" , this.num)
    },
    //LINK - updated - срабатывает после обновления компонента (после повторного рендера этого компонента с внесёнными данными)
    updated() {
        console.log("updated  /", Date.now())
        console.log("updated - num =" , this.num)
    },
    // https://www.book2s.com/tutorials/vuejs-options-beforeunmount.html
    //LINK - beforeUnmount - вызывается перед размонтированием (перед удалением из DOM) всего компонента , а не элемента (кнопка)
    // По этому если сработает v-if кнопки этого компонента то beforeUnmount не будет вызван (мы удаляем из DOM кнопку ,а не компонент)
    // Но beforeUnmount сработает при переходе через router или при переходе на другую страницу
    beforeUnmount() {
        console.log("beforeUnmount  /", Date.now())
    },
    //LINK - unmounted - вызывается после размонтирования (после удаления из DOM) всего компонента , а не элемента (кнопка)
    // По этому если сработает v-if кнопки этого компонента то unmounted не будет вызван (мы удаляем из DOM кнопку ,а не компонент)
    // Но unmounted сработает при переходе через router или при переходе на другую страницу
    unmounted() {
        console.log("unmounted  /", Date.now())
    },
    //!SECTION
}
</script>