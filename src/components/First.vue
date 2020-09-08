<template>
    <div>first子组件
        <button @click="add">点击相加</button>
    </div>
</template>

<script>
    export default {
        name: "First",
        methods: {
            add(){
                this.$store.commit("add_num", 11)
            }
        }
    }
</script>

<style scoped>

</style>
