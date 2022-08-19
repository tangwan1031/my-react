import React from 'react';
import { Form, message,Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from "./index.module.less";
import { useDispatch } from 'react-redux';
import type { Tdispatch } from '@/store';
import { loginAsync } from '@/store/modules/auth';
const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<Tdispatch>();
    // values是表单的内容
    const onFinish = async (values: any) => {
        await dispatch(loginAsync(values));
        navigate("/");
    };

    return (
        <div className={styles.login}>
            <div>
                <h1>尚医通管理系统</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    // 设置初始值
                    // initialValues={{ username: "zhangsan"}}
                    // 当点击登陆按钮所拥有的函数为onFinish
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        // reqquired:为true,不允许为空，如果为空则会给予提示：message
                        rules={[{ required: true, message: '请输入管理员的名字' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入管理员的密码' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>

    );
};

export default Login;