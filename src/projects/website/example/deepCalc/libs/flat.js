

export function initalArray(depth = 13, seed = 10000) {
    let source = [];
    const callback = (source, depth, seed) => {
        depth--;
        for (let i = 0; i < depth; i++) {
            const random = parseInt( Math.random() * seed );
            source[i] = random > (seed / 2) ? [] : random;
            if (depth >= 0 ) {
                if (source[i] instanceof Array) {
                    callback(source[i], depth, seed);
                }
            } else {
                source[i] = random;
            }
        }
        
        return source;
    }
    return callback(source, depth, seed);
}


export function flat(list) {
    const arr = list.flat(Infinity);
    console.log(arr);
}

export function flatByJs(list, inorder = true) {
    let flatArr = [];
    const len = list.length;
    const deepCallback = (flatArr, item) => {
        if (item instanceof Array ) {
            for (let i = 0; i < item.length; i++) {
                deepCallback(flatArr, item[i]);
            }
        } else {
            return flatArr.push(item);
        }
    }
    if (!!inorder) {
        for (let k = 0; k < len; k++) {
            const element = list[k];
            deepCallback(flatArr, element);
        }
    } else {
        for (let k = len - 1; k >= 0; k--) {
            const element = list[k];
            deepCallback(flatArr, element);
        }
    }

    console.log(flatArr);
}

