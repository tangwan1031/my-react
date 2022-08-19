import {ReactElement} from 'react'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "@/store/modules/auth";
type Props = {
    children:ReactElement
}
export default function AuthComponent({children}:Props) {
    const { token } = useSelector(authSelector);
    // console.log(authState);
    //  登录成功
    if(localStorage.getItem("token")) return children;
    else return <Navigate to="/login"/>
}
