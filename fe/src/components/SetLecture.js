import { Button, Divider, Form, List, Modal, message, Input, Tooltip } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import react, {useEffect, useState} from 'react';
import { deleteLecture, postLecture} from '../utils/LectureUtils';


const { TextArea } = Input

const SetLecture = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const Dummydata = [
        {
            lectureId: "12345",
            doctorId: "78901",
            lectureTitle: "Introduction to Java Programming",
            lectureDescription: "This lecture covers the basics of Java programming language"
        },
        {
            lectureId: "12345",
            doctorId: "78901",
            lectureTitle: "Introduction to Java Programming",
            lectureDescription: "This lecture covers the basics of Java programming language"
        }
    ]

    // useEffect(() => {
    //     initialize();
    // },[])

    // const initialize = async() => {
    //     setLoading(true);
    //     try{
    //         const res = getLecture();
    //         setData(res || []);
    //     } catch (error) {
    //         message.error(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    const onLectureDeleted = async (id) => {
        setLoading(true);
        try {
            const response = await deleteLecture(id);
            // initialize();
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
            setModal(false);
        }
    }

    const onPostedLecture = async(data) => {
        setLoading(true);
        try {
            await postLecture(data);
            setIsModalOpen(false);
            message.success("Success");
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const onHandleCancel = () => {
        setIsModalOpen(false);
        setModal(false);
    }
    
    return (
        <>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{fontSize: 30}}>
                Posted Lecture
            </div>
            <Button loading={loading} type='primary' onClick={() => {setIsModalOpen(true)}}>New Lecture</Button>
            <Modal title="New Lecture" open={isModalOpen} onCancel={onHandleCancel} footer={null} destroyOnClose={true}>
                <Divider></Divider>
                <Form name="basic"
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
                    onFinish={onPostedLecture}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="LectureTitle" name="lectureTitle"><Input /></Form.Item>
                    <Form.Item label="LectureDescription" name="lectureDescription"><TextArea rows={3}/></Form.Item>
                    <Form.Item 
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        <Divider></Divider>
        <List
            itemLayout='horizontal'
            dataSource={Dummydata}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={item.lectureTitle}
                        description={item.lectureDescription}
                    />
                    <Tooltip title="delete">
                        <Button onClick={() => setModal(true)} type="primary" shape="circle" icon={<DeleteOutlined />} />
                        <Modal open={modal} onCancel={onHandleCancel} footer={null} destroyOnClose={true}>
                            <ExclamationCircleOutlined />
                            <div style={{fontSize: 20, paddingTop: 10, paddingBottom: 10}}>Are you sure to delete</div>
                            <Button onClick={() => onLectureDeleted(item.lectureId)} type="primary">Confirm</Button>
                        </Modal>
                    </Tooltip>
                </List.Item>
            )}
        />
        </>
    );
}
export default SetLecture;