class ISerialize {
    /** 序列化 **/
    enSerialize(params = {}){
        throw new Error("不能直接操作：【ISerialize.enSerialize】")
    }
    /** 反序列化 **/
    deSerialize(encodeString = ""){
        throw new Error("不能直接操作：【ISerialize.enSerialize】")
    }
}

export default ISerialize;