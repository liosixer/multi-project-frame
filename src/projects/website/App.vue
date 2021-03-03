<template>
    <div>
        {{ test }}
        <h1>扁平化</h1>
        <h2>时间间隔： {{ timegap }}</h2>
        <h3 @click="onflatClick(1)">flat</h3>
        <h3 @click="onflatClick(2)">flatByJs</h3>
        <h3 @click="onflatClick(3)">flatByJs(逆序)</h3>
    </div>
</template>

<script>
// import MyTestableClass from './libs';
import { initalArray, flat, flatByJs } from "./libs/flat";
export default {
    data() {
        return {
            test: "门户网",
            timegap: 0,
            list: [],
        };
    },

    created() {
        this.list = initalArray();
        console.log("数据初始化完成");
    },

    mounted() {},
    methods: {
        onflatClick(type) {
            // console.log(MyTestableClass.isTestable)

            /**
             * 1. map & object 区别， 优劣
             * ***/

            /**
             * 2. 多维数组转化为1维 [flat] 扁平化处理
             * **/

            /**
             * 3. reduce 性能分析
             * **/

            const pre = Date.now();
            if (type == 1) {
                flat(this.list);
            } else if (type == 2) {
                flatByJs(this.list);
            } else {
                flatByJs(this.list, false);
            }
            this.timegap = Date.now() - pre;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
