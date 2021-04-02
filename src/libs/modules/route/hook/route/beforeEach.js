const excute = (router) => {
    router.befeforeEach( (to, from, next) => {
        //实现前置导航守卫

        //获取目标位置对应的组件数组（数组的定义/构造类）；
        const toList = router.getMatchedComponents(to);
        console.log(toList);
    })
}

export default excute;