<script setup lang="ts"></script>
<template>
    <div class="while">
        <!-- LINK - все элементы HTML которые попадут внутрь закрывающегося компонента появятся вместо slot -->
        <slot></slot>
    </div>
</template>
<!-- LINK - scoped в style - делает стили локальными только для этого компонента -->
<!-- , если scoped не писать тогда стили будут доступны всем компонентам -->
<style scoped lang="scss">
.while{
    background-color: #ffffff;
    color: black;
    padding: 5px;
    border-radius: 5px;
}
</style>