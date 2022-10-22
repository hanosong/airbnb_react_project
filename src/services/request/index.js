import axios from "axios";
import {BASE_URL,TIMEOUT} from './config'

// 采用类的方式封装 => 具有更好的内聚性
class HYRequest {
    constructor(baseURL,timeout){
        //单独创建一个axios实例
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 响应拦截
        this.instance.interceptors.response.use((res) => (
            res.data
        ),err => (err))
    }
    // 请求方法
    request(config) {
        return this.instance.request(config)
    }
    get (config){
        return this.request({
            ...config,
            method:'get', //请求方法
        })
    }
    post (config){
        return this.request({
            ...config,
            method:'post', //请求方法
        })
    }
}

// 有几个实例就导出几个
export default new HYRequest(BASE_URL,TIMEOUT)