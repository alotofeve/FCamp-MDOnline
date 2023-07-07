import { Dropdown, Layout, Button, theme, message } from "antd";
import React, { useEffect, useState } from "react";
import { getDoctorInfo, getDoctorInfoById } from "../utils";
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import AvailableTime from "./DoctorComponent/AvailableTime";
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;

const DoctorProfile = ({ id }) => {
    const [authed, setAuthed] = useState(true);
    const [doctorInfo, setDoctorInfo] = useState();
    const [doctorProfile, setDoctorProfile] = useState();

    useEffect(() => {
        fetchDoctorInfo(id);
    }, [])

    const fetchDoctorInfo = async (id) => {
        try {
            const data = await getDoctorInfoById(id);
            setDoctorInfo(data);
            console.log(doctorInfo);
        } catch (error) {
            message.error(error.message);
        }
    }

    const fetchDoctorProfile = async () => {
        try {
            const response = await getDoctorInfo();
            setDoctorProfile(response);
        } catch (error) {
            message.error(error.message);
        }
    }
    const availableTimes =
    [
    {
    appointmentDate: "2023-01-01",
    appointmentTime: "10 AM"
    },
    {
    appointmentDate: "2024-02-02",
    appointmentTime: "15:00:00"
    },
    {
    appointmentDate: "2025-03-03",
    appointmentTime: "18:00:00"
    },
    {
    appointmentDate: "2026-04-04",
    appointmentTime: "19:00:00"
    }
    ]

    const { token: { colorBgContainer } } = theme.useToken();   
    return(
        <Layout style={{ height: "100vh" }}>
        <Content style={{ height: "calc(100% - 64px)", overflow: "auto", padding: "15px"}}>
            <Layout style={{ padding: '10px', background: colorBgContainer}}>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume doctorInfo={doctorProfile}/>
                </Sider>
                <Content style={{dispaly: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                    <div>
                        <AvailableTime availableTimes={availableTimes} id={1}/>
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