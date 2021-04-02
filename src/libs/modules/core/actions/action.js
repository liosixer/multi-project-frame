import Operate from "../operations/operation";

const { constant_state } = require("@/libs/constant");
const { default: IAction } = require("./interfaces/iaction");

class Action extends IAction {
    constructor() {
        super();
        this.status = constant_state.UNDO;
    }

    do(operation) {
        if (!!operation && operation instanceof Operate) {
            Operate( operation ).do();
            this.status = constant_state.DONE;
        }
    }
}

export default Action;