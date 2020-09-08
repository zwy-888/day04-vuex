<template>
    <div>second子组件
        <span>{{this.$store.getters.rst}}</span>
    </div>
</template>

<script>
    export default {
        name: "second"
    }
</script>

<style scoped>

</style>
