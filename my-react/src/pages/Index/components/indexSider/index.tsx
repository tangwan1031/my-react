import { useEffect,useState } from "react";
import {Layout,Menu} from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import "./index.less";
import { useLocation,useNavigate } from "react-router-dom";
import { Console } from "console";
const { Sider } = Layout;
export default function IndexSider() {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.pathname);// /cmn/dict
    // console.log(location.pathname.split("/"));// ["","cmn","dict"]
    // console.log(location.pathname.split("/").filter(v=>v));// ['cmn', 'dict']
    const [keys,setKeys]=useState("/"+(location.pathname.split("/").filter(v=>v)[0] || ""));
    const [collapsed, setCollapsed] = useState(false);
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    const items: MenuItem[] = [
        getItem('首页', '/', <PieChartOutlined />),
        getItem('数据管理', '/cmn', <UserOutlined />, [
            getItem('数据字典', '/cmn/dict')
        ]),
        getItem('医院管理', '/hospital', <UserOutlined />, [
            getItem('医院设置', '/hospital/hospitalSet')
        ]),
    ];

    useEffect(()=>{
        setKeys("/"+(location.pathname.split("/").filter(v=>v)[0] || ""));
    },[location.pathname])
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <div className="logo" >
                <img src="/logo.png" alt="" />
                <span>医疗管理系统</span>
            </div>
            <Menu
            openKeys={[keys]}
            selectedKeys={[location.pathname]}
            onOpenChange = {(openKeys)=>{
                console.log(1111,openKeys[1]);
                setKeys(openKeys[1]);
                // console.log("onOpenChange")
            }}
            onClick={({key})=>{
                navigate(key);
            }} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />


        </Sider>
    )
}