class IAction {
    do(operation){
        throw new Error("不能直接实现该方法: IOperate");
    }
}

export default IAction;