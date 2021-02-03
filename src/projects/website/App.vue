<template>
    <div @click="onClick">
        {{ test }}
        <h1>Hello Vue</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: "门户网",
        };
    },

    created() {},

    mounted() {},
    methods: {
        onClick() {
            console.log("点击事件");
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
