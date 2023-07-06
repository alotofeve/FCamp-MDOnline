import { SettingOutlined, ScheduleOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Space, theme, message } from 'antd';
import React, { useState, useEffect }from 'react';
import Appointment from './Appointment';
import UpdateInfo from './UpdateInfo';
import SetLecture from './SetLecture';
import { getAppointment } from '../utils/AppointmentUtils';
import { getPatientInfo } from '../utils';
import PatientHome from './PatientHome';
import UpdatePatientInfo from './UpdatePatientInfo';

const { Header, Content, Sider } = Layout;
const item1 = [{
    key: 1,
    label: "Profile"
}]

const Setting = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('0');
    const [appointments, setAppointments] = useState([]);
    const [patientInfo, setPatientInfo] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
        fetchPatientInfo();
    }, [])

    const fetchData = async () => {
        try {
            const res = await getAppointment();
            setAppointments(res || []);
        } catch (error) {
            message.error(error.message);
        }
    };

    const fetchPatientInfo = async() => {
        try {
            const res = await getPatientInfo();
            setPatientInfo(res || []);
            console.log(patientInfo);
        } catch (error) {
            message.error(error.message)
        }
    }

    const componentsSwitch = (key) => {
        switch(key){
        case "0":
            return (<PatientHome appointments={appointments} patientInfo={patientInfo} fetchPatientInfo={fetchPatientInfo}/>)
        case "1": 
            return (<Appointment appointments={appointments} identity={"patient"}/>)  
        case "2":
            return (<UpdatePatientInfo patientInfo={patientInfo}/>)
        // case "3":
        //     return (<SetLecture />)    
        }      
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
    <Layout>
        {/* <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Button type="primary" ghost>Back</Button>
            <div style={{ marginLeft: 25, color: "white", fontSize: 20}}>Setting</div>
        </Header> */}
        <Layout>
            <Sider
            width={210}
            style={{
                background: colorBgContainer,
            }}
            >
            <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                style={{
                height: '100%',
                borderRight: 0,
                }}
                selectedKeys={selectedMenuItem}
                onClick={(e) => {setSelectedMenuItem(e.key)}}
            >
            <Menu.Item key="0" icon={<UserOutlined />}>You And MDOnline</Menu.Item>
            <Menu.Item key="1" icon={<ScheduleOutlined />}>Appointment</Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>UpdateInfo</Menu.Item>
            {/* <Menu.Item key="3" icon={<BookOutlined />}>SetLecture</Menu.Item> */}
            </Menu>
            </Sider>
            <Layout
            style={{

            }}
            >
            <Content
                style={{
                // padding: 30,
                // marginTop: 16,
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