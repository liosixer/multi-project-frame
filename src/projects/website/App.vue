<template>
    <div>
        {{ test }}
        <h1>数组扁平化</h1>
        <h2>间隔时间： {{ timegap }}</h2>
        <h3 @click="onflatClick(1)">flat</h3>
        <h3 @click="onflatClick(2)">flatByJs</h3>
        <h3 @click="onflatClick(3)">flatByJs(逆序)</h3>

        <h1>时间/空间复杂度</h1>
        <h2>间隔时间： {{ timegap }}</h2>
        <h3 @click="complexityCalc(1)">时间复杂度</h3>
        <h3 @click="complexityCalc(2)">空间复杂度</h3>
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
            /**
             * 1. 多维数组转化为1维 [flat] 扁平化处理
             *      类似可以推导 reduce 的性能分析
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

        complexityCalc(type) {
            /**
             * 2. 时间复杂度， 空间复杂度
             * **/
            const go = (n) => {
                let total = 0;
                for (let i = 1; i <= n; i++) {
                    total += i;
                }
                return total;
            };

            const go2 = (n) => {
                return ((1 + n) * n) / 2;
            };
            const pre = Date.now();
            if (type == 1) {
                go(1000);
            } else {
                go2(1000)
            }

            this.timegap = Date.now() - pre;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
