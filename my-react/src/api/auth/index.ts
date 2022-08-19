// 管理员相关接口
import { authRequest } from "@/request";

type TauthInfo = {
    username:string,
    password:string,
}
// 管理员登录
export const postLogin = function(authInfo:TauthInfo){
    return authRequest.post("/index/login",authInfo);
}