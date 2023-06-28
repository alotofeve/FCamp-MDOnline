import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        date: 'Monday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Tuesday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Wednesday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Thursday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Friday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Saturday',
        time: '2pm - 4.30pm',
        comment: ''
    },
    {
        key: '1',
        date: 'Sunday',
        time: '2pm - 4.30pm',
        comment: ''
    },
]

const Calendar = () => {
    return (
        <Table dataSource={data} style={{padding: '5 20px'}}>
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Time" dataIndex="time" key="time" />
            <Column title="Comment" dataIndex="comment" key="comment" />
        </Table>
    )
    
}
export default Calendar