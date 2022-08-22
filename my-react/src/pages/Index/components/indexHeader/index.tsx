import { Layout, Breadcrumb, Menu, Dropdown, Space, Avatar, MenuProps } from "antd";
import utils, { getRouteTitle } from "@/utils";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import "./index.less";
import { logoutAsync, useAuthState } from "@/store/modules/auth";
import { useAppDispatch } from "@/store";
const { Header } = Layout;

export default function IndexHeader() {
  // 点击退出登录
  const dispatch = useAppDispatch();
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          icon: <HomeOutlined />,
          label: <Link to="/">返回首页</Link>,
        },
        {
          key: "2",
          icon: <LogoutOutlined />,
          label: (
            <a
              onClick={e => {
                e.preventDefault();
                dispatch(logoutAsync());
              }}
            >
              退出登陆
            </a>
          ),
        },
      ]}
    />
  );
  // 通过useAuthState获取管理员模块中的信息
  const { adminName, avatar } = useAuthState(); // useSelector(authSelector);
  const location = useLocation();
  // 1
  //  utils.getRouteTitle = getRouteTitle(location.pathname);
  // 2
  //  const routeTitle = getRouteTitle(location.pathname);
  //  console.log("header:",routeTitle);
  //  将获得的标题做为初始值
  const [routeTitle, setRouteTitle] = useState(getRouteTitle(location.pathname));
  useEffect(() => {
    setRouteTitle(getRouteTitle(location.pathname));
  }, [location.pathname]);

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>{routeTitle.title}</Breadcrumb.Item>
        <Breadcrumb.Item>{routeTitle.subTitle}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <span>欢迎回来{adminName}！</span>
        <Dropdown overlay={menu}>
          <Avatar src={avatar} />
        </Dropdown>
      </div>
    </Header>
  );
}
