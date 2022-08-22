// 管理员相关接口
import { authRequest } from "@/request";

type TauthInfo = {
  username: string;
  password: string;
};
// 管理员登陆
export const postLogin = function (authInfo: TauthInfo) {
  return authRequest.post("/index/login", authInfo);
};

// 管理员的信息获取:/admin/auth/index/info
export const getAdminInfo = function () {
  return authRequest.get("/index/info");
};

// 登出接口
export const postLogout = function () {
  return authRequest.post("/index/logout");
};
