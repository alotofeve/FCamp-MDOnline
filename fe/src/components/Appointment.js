import { useEffect, useState } from "react";
import { getAppointment } from "../utils/AppointmentUtils";
import { Table, message } from "antd";

const Appointment = () => {
    const [ongoing, setOngoing] = useState(true);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res = await getAppointment();
            setAppointments(res || []);
        } catch (error) {
            message.error(error.message);
        }
    };

    const columns = [
        {
            title: "AppointmentDate",
            dataIndex: "appointmentDate",
            key: "appointmentDate"
        },
        {
            title: "AppointmentTime",
            dataIndex: "appointmentTime",
            key: "appointmentTime"
        },{
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "IsOngoing",
            dataIndex: "isOngoing",
            key: "isOngoing",
            render: (isOngoing) => {
                const color = isOngoing ? "blue" : "grey";
                return (
                    <div color={color}>
                        ongoing
                    </div>
                )
            }
        }
    ]

    return (
        <Table columns={columns} dataSource={appointments} />

    )
} 
export default Appointment;