
export class Operate {
    constructor(action = { type, label }) {
        const { type, label } = { ...action };
        this.type = type;
        this.label = label;
    }

    do() {
        console.log(`[Operate] Just Do ${this.type}!`);
    }
}

export default Operate;
