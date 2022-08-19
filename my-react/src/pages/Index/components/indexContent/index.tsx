import { Layout,Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";
const {Content} = Layout;
export default function IndexContent() {
    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Outlet/>
            </div>
        </Content>
    )
}