import '../styles/PatientProfile.css';
import { Dropdown, Layout, Button, theme, message } from "antd";
import React, { useEffect, useState } from "react";
import { getDoctorInfo } from "../utils";
import 'antd/dist/reset.css';
import Resume from "./DoctorComponent/Resume";
import AvailableTime from "./DoctorComponent/AvailableTime";
import Lecture from "./DoctorComponent/Lecture";

const { Header, Content, Sider } = Layout;
const PatientProfile = () => {
    const [authed, setAuthed] = useState(true);
    // const [doctorInfo, setDoctorInfo] = useState([]);

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
            "time": "10:00:00"
        },
        {
            "date": "2023-06-25",
            "time": "2:30:00"
        },
        {
            "date": "2023-06-25",
            "time": "6:15:00"
        }
    ],
    "mailAddress": "1234 A street San_jose CA United_States",
    "license": "guessguess123"
  }

    // useEffect(async() => {
    //     try {
    //         const data = getDoctorInfo();
    //         setDoctorInfo(data || []);
    //     } catch (error) {
    //         message.error(error.message);
    //     }
    // }, [])

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
    // // State variables to store patient information
    // const [userInfo, setUserInfo] = useState({});    
    // const[appointments, setAppointments] = useState([]);
    // const[lectures, setLectures] = useState([]);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try {
    //             const [userInfoRes, appointmentsRes, lecturesRes] = await Promise.all([
    //                 axios.get(`/api/user/${username}`),
    //                 axios.get(`/api/appointments/${username}`)
    //             ]);
    //             setUserInfo(userInfoRes.data);
    //             setAppointments(appointmentsRes.data);
    //             setLectures(lecturesRes.data);
    //             } catch (error) {
    //             console.log(error);
    //             }
    //         };
        
    //         fetchData();
    // }, [username]);

    // // Assuming that the API for restrieving lectures returns an array of lecture objects with properties 'title' and 'url 
    // const fetchLectues = async () => {
    //     try {
    //         const lecturesRes = await axios.get(`/api/lectures/${username}`);
    //         setLectures(lecturesRes.data);
    //     } catch(error){
    //         console.error(error);
    //     }
    // }; 

    // useEffect(()=>{
    //     fetchLectues();
    // });

    // return (
    //     <div>
    //         <h1>Hello, {username}!</h1>
    //         <div className="columns">
    //             <div className = "column is-one-quarter">
    //                 <h2>Personal Information</h2>
    //                 <p>Name:{userInfo.name}</p>
    //                 <p>Gender:{userInfo.gender}</p>
    //                 <p>filling later</p>
    //             </div>
    //             <div className="column">
    //                 <h2>Appointments</h2>
    //                 <ul>
    //                     {appointments.map(appointment => (
    //                         <li key={appointment.id}>
    //                         {appointment.title}-{appointment.date}
    //                         </li>
    //                     ))}
    //                 </ul>
    //                 <h2>Collected Lectures</h2>
    //                 <ul>
    //                     {lectures.map(lecture => (
    //                         <li key = {lecture.url}>
    //                             <a href = {lecture.url} target="_blank" rel="noopener noreferrer " >{lecture.title}</a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default PatientProfile;
