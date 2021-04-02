const tools = {
    /**
     * 按天获取unix时长 
     * @param {count} 天数（Int > 0）
     * **/
    getUnixByDays(count) {
        const HOUR = 60 * 60 * 1000;
        const DAY = 24 * HOUR;
        return count * DAY;
    },

    /**
     * 按小时获取unix时长 
     * @param {count} 小时（Int > 0）
     * **/
    getUnixByHours(count) {
        const HOUR = 60 * 60 * 1000;
        return count * HOUR;
    }
}

export default tools;