import { Tabs, message, List} from "antd";
import { useEffect, useState } from "react";
import { getLecture } from "../../utils/LectureUtils";

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

    return (
    <>
        <h1>Lecture</h1>
        <List
        itemLayout='horizontal'
        dataSource={lecture}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    title={item.lectureTitle}
                    description={item.lectureDescription}
                />
            </List.Item>
        )}
    />
    </>
    )
}
export default Lecture;