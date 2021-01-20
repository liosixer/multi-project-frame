//代理，有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求
const static_options = [{}];

/** 
 * 生成代理
 * @param {Array} options - [{title:string, target: string, pathRewrite:{Object}}, ... ]
 * @param {string} option.title - The title of proxy .etc. "/api" //代理对象
 * @param {string} option.target - The target of proxy .etc. "http://localhost/xxx/api" //代理请求路径
 * @param {string} option.pathRewrite - The pathRewrite of proxy .etc. { "^api" : "" } //映射为需要的路径
 * @param {boolean} option.ws - The pathRewrite of proxy .etc. ws:true //if you want to proxy websockets
 * @param {boolean} option.changeOrigin - changes the origin of the host header to the target URL
 * 
 *  **/
function getProxy(options){
    const result = {};
    for (let index = 0; index < options.length; index++) {
        const { title, target, pathRewrite } = options[index];
        result.title = {target, pathRewrite, changeOrigin?: true, ws };
    }
    return result
}

module.exports = { getProxy, static_options };
