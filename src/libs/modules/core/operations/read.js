import { constant_actions } from "@/libs/constant";
import Operate from "./operate";

class Read extends Operate {
    constructor() {
        super(constant_actions.METHODS.READ)
    }
}

export default Read;