import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({
      ...config,
      method: "get", //请求方法
    });
  }
  post(config) {
    return this.request({
      ...config,
      method: "post", //请求方法
    });
  }
}

const myHYRequest = new HYRequest(BASE_URL, TIMEOUT);
export default myHYRequest;
