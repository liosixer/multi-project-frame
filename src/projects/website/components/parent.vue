<template>
    <div>
    </div>
</template>

<script>
    export default {
        name:"ComParent",
        template: "<p>{{ `Hello ${words}` }}</p>",
        data() {
            return {
                words: "World",
            }
        },
        created() {
            console.log("我是大爷");
        }
        

    }
</script>

<style lang="scss" scoped>

</style>
