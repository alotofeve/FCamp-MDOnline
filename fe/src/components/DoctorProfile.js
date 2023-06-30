import { Dropdown, Layout, Button, theme } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import Calendar from './DoctorComponent/Calendar'
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;

const DoctorProfile = () => {
    const [authed, setAuthed] = useState(true);

    const { token: { colorBgContainer } } = theme.useToken();
    return(
        <Layout style={{ height: "100vh" }}>
        <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
            <Layout style={{ padding: '10px', background: colorBgContainer}}>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume />
                </Sider>
                <Content >
                    <div>
                        <Calendar />
                    </div>
                    <div style={{ padding: '0 20px'}}>
                        <Lecture />
                    </div>
                </Content>
            </Layout>
        </Content>
        </Layout>
    )
}

export default DoctorProfile;