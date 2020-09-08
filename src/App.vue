<template>
    <div id="app">

        <router-view></router-view>
        <first></first>
        <second></second>
    </div>
</template>

<script>
    import First from "./components/First";
    import second from "./components/second";

    export default {
        name: 'App',
        components: {
            first:First,
            second:second
        }

    }
</script>

<style>

</style>
