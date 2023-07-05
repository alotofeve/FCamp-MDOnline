import { Layout, theme, List, Divider } from "antd";
import React, {  } from "react";
import { MedicineBoxOutlined, TagOutlined} from "@ant-design/icons"
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;

const DoctorHome = ({ appointments }) => {
    // const [doctorInfo, setDoctorInfo] = useState([]);

    // useEffect(() => {
    //     fetchDoctorInfo();
    // })

    // const fetchDoctorInfo = async() => {
    //     try {
    //         const res = getDoctorInfo();
    //         setDoctorInfo(res || []);
    //     } catch (error) {
    //         message.error(error.message)
    //     }
    // }

    const doctorInfo =  {"Id": "1",
    "firstName": "John",
    "lastName": "Doe",
    "gender": "male",
    "dateOfBirth": "19891122",
    "email": "123@gmail.com",
    "phone": "1231231234",
    "spec": "BrainDead",
    "availables": [
        {
            "date": "2023-06-25",
            "time": "10:00 AM"
        },
        {
            "date": "2023-06-25",
            "time": "2:30 PM"
        },
        {
            "date": "2023-06-25",
            "time": "6:15 PM"
        }
    ],
    "mailAddress": "1234 A street San_jose CA United_States",
    "license": "guessguess123"
  }

    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <Layout style={{ height: "100vh", background: colorBgContainer}}>
        <Content style={{overflow: "auto", paddingTop: 20, paddingBottom: 20, paddingLeft: 35, paddingRight: 20}}>
            <Layout>
                < Sider style={{ minHeight: 1000, background: colorBgContainer}} width={380} >
                    <Resume doctorInfo={doctorInfo}/>
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
export default DoctorHome;