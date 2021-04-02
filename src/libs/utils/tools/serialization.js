const content = {
    /** 
     * 序列化
     * @returns {String} string
     */
    serialize: (data) => {
        return Base64.encode(JSON.stringify(data));
    },

    /**
     * 反序列化
     * @returns {*} JSON Object
    */
    deserialize: (data) => {
        return JSON.parse(Base64.decode(encodeString));
    }
}

export default content;