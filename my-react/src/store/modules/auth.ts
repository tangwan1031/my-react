import { postLogin } from "@/api/auth";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
    token:localStorage.getItem("token")
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        upToken(state,{payload}){
            state.token = localStorage.token = payload;
        }
    }
})
const {upToken} = authSlice.actions;
export const loginAsync = (authInfo:any)=>{
    return async (dispatch:any)=>{
        // 响应体数据
        const body:any = await postLogin(authInfo);
        dispatch(upToken(body.data.token));
        message.success(body.message);
    }
}
export const authSelector = (state:any)=> state.auth;
export default authSlice.reducer;