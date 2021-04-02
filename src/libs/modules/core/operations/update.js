import { constant_actions } from "@/libs/constant";
import Operate from "./operate";


class Update extends Operate {
    constructor() {
        super(constant_actions.METHODS.UPDATE);
    }
}

export default Update;