/**
 * 全局唯一的身份凭证 接口
 * **/
class IIdentity {
    get identity(){
        throw new Error("不能直接实现该方法: identity");
    }
}

export default IIdentity;