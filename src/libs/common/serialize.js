import { ISerialize } from "./interface";


class Serialize extends ISerialize{
    constructor(){
        super();
    }

    enSerialize( params = {} ){
        //这里序列化他们
        return Base64.encode( JSON.stringify(params));
    }

    deSerialize( encodeString = "" ){
        return JSON.parse(Base64.decode(encodeString));
    }
}

export default Serialize;