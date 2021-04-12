// vue 路由核心部件
// 同一个路径，可以匹配多个路由， 谁先定义， 谁优先级最高
// * 通配符匹配 通常用于 客户端 404 错误

import VueRouter from "vue-router";


/** 依赖注入路由们 */
const getRouter = (routes) =>
    new VueRouter({
        routes
    });


export default getRouter;