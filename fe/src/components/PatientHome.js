import { Layout, theme, List, Divider, message } from "antd";
import React, { useState, useEffect } from "react";
import { MedicineBoxOutlined, TagOutlined} from "@ant-design/icons"
import 'antd/dist/reset.css';
import Resume from "./PatientComponent/Resume";
import Lecture from "./DoctorComponent/Lecture";


const { Header, Content, Sider } = Layout;

const PatientHome = ({ appointments, patientInfo, fetchPatientInfo}) => {

    useEffect(() => {
        fetchPatientInfo();
        console.log(patientInfo);
    })

    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <Layout style={{ height: "100vh", background: colorBgContainer}}>
        <Content style={{overflow: "auto", paddingTop: 20, paddingBottom: 20, paddingLeft: 35, paddingRight: 20}}>
            <Layout>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume patientInfo={patientInfo}/>
                </Sider>
                <Content style={{dispaly: "flex", flexDirection: "column", justifyContent: "space-evenly", background: colorBgContainer}}>
                    <div style={{paddingLeft: 10}}>
                        <div style={{ fontSize: 20, fontWeight: "bold"}}>Appointments</div>
                        <List
                            itemLayout="horizontal"
                            dataSource={appointments}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        style={{display: 'flex', alignItems: "center"}}
                                        title={
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                <strong style={{fontSize: 21}}>{item.appointmentDate}</strong>
                                                <div style={{color: "grey", paddingLeft: 15}}>{item.appointmentTime}</div>
                                            </div>
                                        }
                                        avatar={<MedicineBoxOutlined />}
                                    />
                                        <TagOutlined style={{paddingRight: 10}}/>
                                        {item.description}
                                </List.Item>
                            )}
                        />
                    </div>
                    {/* <Divider></Divider> */}
                    <div style={{ paddingTop: 20, paddingLeft: 10}}>
                        <Lecture />
                    </div>
                </Content>
            </Layout>
        </Content>
        </Layout>
    )
}
export default PatientHome;