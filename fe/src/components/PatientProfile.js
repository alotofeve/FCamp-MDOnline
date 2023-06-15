import '../styles/PatientProfile.css';
import React, { useState } from 'react';
import axios from 'axios';

const PatientProfile = ({username }) => {
    // State variables to store patient information
    const [userInfo, setUserInfo] = useState({});    
    const[appointments, setAppointments] = useState([]);
    const[lectures, setLectures] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const [userInfoRes, appointmentsRes, lecturesRes] = await Promise.all([
                    axios.get(`/api/user/${username}`),
                    axios.get(`/api/appointments/${username}`)
                ]);
                setUserInfo(userInfoRes.data);
                setAppointments(appointmentsRes.data);
                setLectures(lecturesRes.data);
                } catch (error) {
                console.log(error);
                }
            };
        
            fetchData();
    }, [username]);

    // Assuming that the API for restrieving lectures returns an array of lecture objects with properties 'title' and 'url 
    const fetchLectues = async () => {
        try {
            const lecturesRes = await axios.get(`/api/lectures/${username}`);
            setLectures(lecturesRes.data);
        } catch(error){
            console.error(error);
        }
    }; 

    useEffect(()=>{
        fetchLectues();
    });

    return (
        <div>
            <h1>Hello, {username}!</h1>
            <div className="columns">
                <div className = "column is-one-quarter">
                    <h2>Personal Information</h2>
                    <p>Name:{userInfo.name}</p>
                    <p>Gender:{userInfo.gender}</p>
                    <p>filling later</p>
                </div>
                <div className="column">
                    <h2>Appointments</h2>
                    <ul>
                        {appointments.map(appointment => (
                            <li key={appointment.id}>
                            {appointment.title}-{appointment.date}
                            </li>
                        ))}
                    </ul>
                    <h2>Collected Lectures</h2>
                    <ul>
                        {lectures.map(lecture => (
                            <li key = {lecture.url}>
                                <a href = {lecture.url} target="_blank" rel="noopener noreferrer " >{lecture.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
