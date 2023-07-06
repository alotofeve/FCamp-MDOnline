import { Dropdown, Layout, Button, theme, message } from "antd";
import React, { useEffect, useState } from "react";
import { getDoctorInfo } from "../utils";
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import AvailableTime from "./DoctorComponent/AvailableTime";
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;

const DoctorProfile = () => {
    const [authed, setAuthed] = useState(true);
    const [doctorInfo, setDoctorInfo] = useState([]);

    useEffect(() => {
        fetchDoctorInfo();
        console.log(doctorInfo);
    }, [])

    const fetchDoctorInfo = async () => {
        try {
            const data = await getDoctorInfo();
            setDoctorInfo(data || []);
        } catch (error) {
            message.error(error.message);
        }
    }

    const { token: { colorBgContainer } } = theme.useToken();
    return(
        <Layout style={{ height: "100vh" }}>
        <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
            <Layout style={{ padding: '10px', background: colorBgContainer}}>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume doctorInfo={doctorInfo}/>
                </Sider>
                <Content style={{dispaly: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                    <div>
                        <AvailableTime availableTimes={doctorInfo.availables} id={doctorInfo.Id}/>
                    </div>
                    <div style={{ padding: "0 20px"}}>
                        <Lecture />
                    </div>
                </Content>
            </Layout>
        </Content>
        </Layout>
    )
}

export default DoctorProfile;