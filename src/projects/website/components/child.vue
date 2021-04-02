<template>
    <div>
        
    </div>
</template>

<script>
    import parent from "./parent.vue";
    export default {
        name: "ComChild",
        extends: parent,

        created() {
            console.log("我是孩子");
        }
    }
</script>

<style lang="scss" scoped>

</style>
