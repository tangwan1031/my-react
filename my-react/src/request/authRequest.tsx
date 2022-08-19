import axios from "axios";
import {message} from "antd";
const authRequest = axios.create({
    baseURL:"/auth",
    timeout:10000
})
// 请求拦截
authRequest.interceptors.request.use(config=>config);
// 响应拦截
authRequest.interceptors.response.use(result=>{
    const body = result.data;
    if(body.code === 200) return body;
    else {
        message.error(body.message);
        return Promise.reject(body.message);//生产一个失败的promise
    }
})
export default authRequest;