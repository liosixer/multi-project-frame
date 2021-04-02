import { assignProperties } from "../utils";
import { IFill } from "./interface";
/** 填充数据 **/
class Fill extends IFill {
    constructor(){
        super();
    }

    fill(source = {}){
        assignProperties(this, source);
    }

}

export default Fill;