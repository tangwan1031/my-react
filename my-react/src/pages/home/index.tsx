import { Tdispatch } from "@/store"
import { authSelector, getInfoAsync } from "@/store/modules/auth";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
    const dispatch = useDispatch<Tdispatch>();
    const {adminName,avatar} = useSelector(authSelector);
    useEffect(()=>{
        dispatch(getInfoAsync());
    },[])
    return (
        <div>
            <h3>账号：{adminName}</h3>
            <img src={avatar} alt="" />
        </div>
    )
}