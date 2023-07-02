import { Dropdown, Layout, Button, theme, message } from "antd";
import React, { useEffect, useState } from "react";
import { getDoctorInfo } from "../utils";
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import Calendar from './DoctorComponent/Calendar'
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;

const DoctorProfile = () => {
    const [authed, setAuthed] = useState(true);
    const [doctorInfo, setDoctorInfo] = useState([]);

    useEffect(async() => {
        try {
            const data = getDoctorInfo();
            setDoctorInfo(data || []);
        } catch (error) {
            message.error(error.message);
        }
    })

    const { token: { colorBgContainer } } = theme.useToken();
    return(
        <Layout style={{ height: "100vh" }}>
        <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
            <Layout style={{ padding: '10px', background: colorBgContainer}}>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume doctorInfo={doctorInfo}/>
                </Sider>
                <Content >
                    <div>
                        <Calendar firstName={doctorInfo.firstName} lastName={doctorInfo.lastName} id={doctorInfo.Id}/>
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