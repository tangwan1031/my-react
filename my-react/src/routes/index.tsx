import { useRoutes,Outlet,Navigate,RouteObject} from "react-router-dom";
import React, { lazy, ReactElement, Suspense } from "react";
import Loading from "@/components/Loading";
import AuthComponent from "@/components/authComponent";
import Index from "@/pages/Index";
import {
    HomeOutlined,
    MedicineBoxOutlined,
    DatabaseOutlined
} from '@ant-design/icons';
const lazyLoad = (path: string):ReactElement => {
    const Comp = lazy(()=>import("@/pages/"+path))
    return (
        <Suspense fallback={<Loading/>}>
            <Comp/>    
        </Suspense>
    )
}
export interface IRoutes extends RouteObject {
    title?:string,
    children?:IRoutes[],
    icon?:React.ReactElement
}
export type TRoutes = IRoutes[];
const routes:TRoutes = [
    {
        path: "/",
        element: <AuthComponent><Index/></AuthComponent>,
        children:[    
            {
                title:"首页",
                path:"/",
                icon:<HomeOutlined />,
                element:lazyLoad("home")

            },      
            {
                 // 数据管理
                path:"/cmn",
                title:"数据管理",
                icon:<DatabaseOutlined />,
                element:<Outlet/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="/cmn/dict"/>
                    },
                    {
                        // 数据字典
                        path:"/cmn/dict",
                        title:"数据字典",
                        element:lazyLoad("cmn/dict")
                    }
                ]
            },                
            {
                // 医院管理
                title:"医院管理",
                path:"/hospital",
                icon:<MedicineBoxOutlined />,
                element:<Outlet/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="/hospital/hospitalSet"/>
                    },
                    {
                        // 医院设置
                        title:"医院设置",
                        path:"/hospital/hospitalSet",
                        element:lazyLoad("hospital/hospitalSet"),
                    }
                ]
            }
        ]
    },
    {
        path: "/Login",
        element: lazyLoad("Login")
    },
    {
        path: "*",
        element: lazyLoad("NotFound")
    }
]
//  侧边栏需要的路由信息
export function findSiderRouter():IRoutes[]{
    const info:any = routes.find(v=>v.path === "/") as IRoutes;
    return info.children as IRoutes[];
}
// 整体的路由配置信息
export default function RenderRouter(): ReactElement {
    return useRoutes(routes) as ReactElement;
}