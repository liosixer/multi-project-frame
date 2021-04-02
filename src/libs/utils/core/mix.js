/** Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类 **/
function mix(...mixins) {
    class Mix {
        constructor() {
            for (let _class of mixins) {
                copyProperties(this, new _class()); 
            }
        }
    }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin); 
        copyProperties(Mix.prototype, mixin.prototype); 
    }
    return Mix;
}

function copyProperties(target, source) {
    const ownKeys = Reflect.ownKeys(source);
    for (let key of ownKeys) {
        if (key !== "constructor" &&
            key !== "prototype" &&
            key !== "name"
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

export default mix;