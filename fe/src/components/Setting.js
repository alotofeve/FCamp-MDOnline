import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import React, { useState }from 'react';
import Appointment from './Appointment';
import UpdateInfo from './UpdateInfo';
import SetLecture from './SetLecture';
const { Header, Content, Sider } = Layout;
const item1 = [{
    key: 1,
    label: "Profile"
}]

const Setting = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('1');

    const componentsSwitch = (key) => {
        switch(key){
        case "1": 
            return (<Appointment />)  
        case "2":
            return (<UpdateInfo />)
        case "3":
            return (<SetLecture />)    
        }      
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
    <Layout>
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Button type="primary" ghost>Back</Button>
            <div style={{ marginLeft: 25, color: "white", fontSize: 20}}>Setting</div>
        </Header>
        <Layout>
            <Sider
            width={200}
            style={{
                background: colorBgContainer,
            }}
            >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                height: '100%',
                borderRight: 0,
                }}
                selectedKeys={selectedMenuItem}
                onClick={(e) => {setSelectedMenuItem(e.key)}}
            >
            <Menu.Item key="1">Appointment</Menu.Item>
            <Menu.Item key="2">UpdateInfo</Menu.Item>
            <Menu.Item key="3">SetLecture</Menu.Item>
            </Menu>
            </Sider>
            <Layout
            style={{
                padding: '0 24px 24px',
            }}
            >
            <Content
                style={{
                padding: 24,
                marginTop: 16,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                minHeight: 280,
                background: colorBgContainer,
                minHeight: "580px"
                }}
            >
                <div>
                    {componentsSwitch(selectedMenuItem)}
                </div>
            </Content>
            </Layout>
        </Layout>
    </Layout>
  );
};
export default Setting;