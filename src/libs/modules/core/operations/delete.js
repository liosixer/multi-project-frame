import { constant_actions } from "@/libs/constant";
import Operate from "./operate";

class Delete extends Operate {
    constructor() {
        super(constant_actions.METHODS.DELETE);
    }
}

export default Delete;