import { useEffect, useState } from "react";
import { getAppointment, setAvailableTime } from "../utils/AppointmentUtils";
import { Button, Divider, Form, Input, Modal, Table, message } from "antd";

const Appointment = ({ appointments }) => {
    const [ongoing, setOngoing] = useState(true);
    const [modal, setModal] = useState(false);
    const [form] = Form.useForm();
    // const [appointments, setAppointments] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const fetchData = async () => {
    //     try {
    //         const res = await getAppointment();
    //         setAppointments(res || []);
    //     } catch (error) {
    //         message.error(error.message);
    //     }
    // };

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
                    <div style={{color: color}}>
                        ongoing
                    </div>
                )
            }
        }
    ]

    const onHandleCancel = () => {
        setModal(false);
    }

    const onclick = () => {
        setModal(true);
    } 

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const onAvailableTimeSetted = async (query) => {
        let availables = [];
        availables.push(query);
        try {
            await setAvailableTime(availables);
            message.success("Successful");
        } catch (error) {
            message.error(error.message);
        } finally {
            setModal(false)
        }
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10}}>
                <div></div>
                <Button type="primary" onClick={onclick}>Add new AvailableTimes</Button>
            </div>
            <Modal title="New Appointment" open={modal} onCancel={onHandleCancel} footer={null} destroyOnClose={true}>
                <Divider></Divider>
                <Form
                    form={form} 
                    labelCol={{
                        span: 8,
                        }}
                        wrapperCol={{
                        span: 16,
                        }}
                        style={{
                        maxWidth: 600,
                        }}
                        initialValues={{
                        remember: true,
                    }}
                    onFinish={onAvailableTimeSetted}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Date" name="date">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Time" name="time">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={appointments} />
            
        </>


    )
} 
export default Appointment;