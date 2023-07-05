import { Button, Table, Form, Modal, message, Select, Divider, Input} from "antd";
import React, {useState, useEffect} from "react";
import { ScheduleOutlined } from "@ant-design/icons";
import { searchDoctorByName } from "../../utils/SearchUtils";
import { createAppointment } from "../../utils/AppointmentUtils";
const { Column, ColumnGroup } = Table;
const {Option} = Select;
const {TextArea} = Input;

const AvailableTime = ({availableTimes, id}) => {
    const [auth, SetAuth] = useState(false);
    const [modal, setModal] = useState(false);
    const [form] = Form.useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    
    // useEffect(async() => {
    //     fetchDoctorInfo();
    // }, [])

    // const fetchDoctorInfo = async () => {
    //     try {
    //         const response = searchDoctorByName({"firstName": firstName, "lastName" :lastName});
    //         const {availableTimes} = response;
    //         setAvailableTime(availableTimes || {});
    //     } catch (error) {
    //         message.error(error.messsage);
    //     }
    // }

    const handleDateChange = (date) => {
      setSelectedDate(date);
      // Clear the selected time when the date changes
      setSelectedTime(null);
    };
  
    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };
  
    const filteredTimeOptions = selectedDate
      ? availableTimes.filter((time) => time.date === selectedDate)
      : [];

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time"
        },
    ]

    const onHandleCancel = () => {
        setModal(false);
    }

    const onclick = () => {
        setModal(true);
    }

    const onAppointmentCreated = async(query) => {
        query.doctorId = Number(id);
        query.isOngoing = true;
        console.log(query);
        try {
            await createAppointment(query);
            message.success("Successful");
        } catch (error) {
            message.error(error.message);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 10}}>
                <h1 style={{fontSize: 20 ,fontWeight: "bold"}}> AvailableTimes </h1>
                <Button icon={<ScheduleOutlined />} type="primary" onClick={onclick}>Request an Appointment</Button>
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
                    onFinish={onAppointmentCreated}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                <Form.Item label="Select Date" name="appointmentDate" rules={[{ required: true, message: 'Please select a date' }]}>
                    <Select onChange={handleDateChange}>
                    {availableTimes.map((time) => (
                        <Option key={time.date} value={time.date}>
                        {time.date}
                        </Option>
                    ))}
                    </Select>
                </Form.Item>
                {selectedDate && (
                    <Form.Item label="Select Time" name="appointmentTime" rules={[{ required: true, message: 'Please select a time' }]}>
                    <Select onChange={handleTimeChange}>
                        {filteredTimeOptions.map((time) => (
                        <Option key={time.time} value={time.time}>
                            {time.time}
                        </Option>
                        ))}
                    </Select>                
                    </Form.Item>
                )}
                <Form.Item label="Description" name="description"><TextArea rows={3}/></Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!selectedDate || !selectedTime}>
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={availableTimes} columns={columns} />
        </>

    )
    
}
export default AvailableTime;