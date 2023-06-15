import { Tabs } from "antd";

const Lecture = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Lecture',
            children: 'Content of Lecture'
        },
        {
            key: '2',
            label: 'Information',
            children: 'Content of Information'
        }
    ]
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} type='card' />
    );
}
export default Lecture;