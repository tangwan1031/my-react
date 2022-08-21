import { getAdminInfo, postLogin } from "@/api/auth";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
    token:localStorage.getItem("token"),
    adminName:localStorage.getItem("adminName"),
    avatar:localStorage.getItem("avatar")
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        upToken(state,{payload}){
            state.token = localStorage.token = payload;
        },
        upInfo(state,{payload}){
            state.adminName = localStorage.adminName =  payload.name;
            state.avatar = localStorage.avatar =  payload.avatar;
        }
    }
})
const {upToken,upInfo} = authSlice.actions;
// 登陆接口
export const loginAsync = (authInfo:any) =>{
    return async (dispatch:any)=>{
        // 响应体数据
        const body:any = await postLogin(authInfo);
        dispatch(upToken(body.data.token));
        message.success(body.message);
    }
}
// 管理员信息接口
export const getInfoAsync = ()=>{
    return async (dispatch:any,getState:any)=>{
        // 判断当前是否已经获取了用户信息。
        if(getState.auth.adminName) return;
        const {data} = await  getAdminInfo();
        dispatch(upInfo(data))
        // console.log("body",body);
    }
}
export const authSelector = (state:any) => state.auth;
export default authSlice.reducer;