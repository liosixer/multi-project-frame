// vue 路由核心部件

import VueRouter from "vue-router";


/** 依赖注入路由们 */
const getRouter = (routes) =>
    new VueRouter({
        routes
    });


export default getRouter;