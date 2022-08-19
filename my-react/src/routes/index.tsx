import { Outlet, useRoutes,Navigate } from "react-router-dom";
import { lazy,ReactElement,Suspense } from "react";
import Loading from "@/components/Loading";
import AuthComponent from "@/components/authComponent";
import Index from "@/pages/Index";
const lazyLoad = (path:string):ReactElement =>{
    const Comp = lazy(()=>import("@/pages/"+path))
    return (
        <Suspense fallback={<Loading/>}>
        <Comp/>
        </Suspense>
    )
}
export default function RenderRouter():ReactElement{
    return useRoutes([
        {
            path:"/",
            element:<AuthComponent><Index/></AuthComponent>,
            children:[
                {
                    path:'/',
                    element:lazyLoad("home")
                },
                {
                    //数据管理
                    path:"/cmn",
                    element:<Outlet/>,
                    children:[
                        {
                            index:true,
                            element:<Navigate to="/cmn/dict"/>
                        },
                        {
                            // 数据字典
                            path:"/cmn/dict",
                            element:lazyLoad("cmn/dict")
                        }
                    ]
                },
                {
                    //医院管理
                    path:"/hospital",
                    element:<Outlet/>,
                    children:[
                        {
                            index:true,
                            element:<Navigate to="/hospital/hospitalSet"/>
                        },
                        {
                            //医院设置
                            path:"/hospital/hospitalSet",
                            element:lazyLoad("hospital/hospitalSet"),
                        }
                    ]
                }
            ]
        },
        {
            path:"/Login",
            element:lazyLoad("Login")
        },
        {
            path:"*",
            element:lazyLoad("NotFound")
        },
    ]) as ReactElement
}