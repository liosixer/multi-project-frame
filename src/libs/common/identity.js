import { IIdentity } from "./interface";

/**
 * 全局唯一的身份凭证
 * **/
class Identity extends IIdentity {
    constructor(){
        super();
    }

    get identity(){
        // if (!this.uuid) this.uuid = Symbol("Identity");
        // if (!this.uuid) this.uuid = v4();
        if (!this.uuid) this.uuid = Symbol();
        return this.uuid;
    }
}

export default Identity;