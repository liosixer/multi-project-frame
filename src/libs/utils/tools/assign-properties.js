 /** 
* 向目标对象上赋予其对应属性上的值(会忽略掉name属性)
* @param [target] *object* 目标对象
* @param [source] *object* 资源对象
*/
function assignProperties(target, source){
   const copy = {...source};
   const keys = Reflect.ownKeys(target);
   for (let key of keys){
       if (key !== "constructor"
           && key !== "prototype"
           && key !== "name"
       ) {
           if (copy.hasOwnProperty(key)){
               target[key] = copy[key];
           }
       }
   }
}

export default assignProperties;