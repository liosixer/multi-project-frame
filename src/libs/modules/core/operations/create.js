import { constant_actions } from "@/libs/constant";
import Operate from "./operation";

class Create extends Operate {
    constructor() {
        super(constant_actions.METHODS.CREATE);
    }
}

export default Create;