import { Tabs, message, List, Space } from "antd";
import React, { useEffect, useState } from "react";
import { getLecture } from "../../utils/LectureUtils";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons"

const Lecture = () => {
    const [lecture, setLecture] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLecture();
    }, [])

    const fetchLecture = async () => {
        setLoading(true);
        try {
            const data = await getLecture();
            setLecture(data || []);
        } catch (error) {
            message.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    const IconText = ({icon, text}) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )

    return (
    <>
        <div style={{fontSize: 20, fontWeight: "bold"}}>
            Lecture
        </div>
        <List
        itemLayout='horizontal'
        dataSource={lecture}
        renderItem={(item) => (
            <List.Item
                actions={[
                    <IconText icon={LikeOutlined} text="0" />,
                    <IconText icon={MessageOutlined} text="0" />
                ]}    
            >
                <List.Item.Meta
                    title={item.title}
                    description={item.body}
                />
            </List.Item>
        )}
    />
    </>
    )
}
export default Lecture;