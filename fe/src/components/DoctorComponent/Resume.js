
import { Card, Image, List, Skeleton } from "antd";

const { Meta } = Card;

const Resume = () => {
    const data = [
        {
            title: "gender"
        },
        {
            title: "email"
        },
        {
            title: "phone"
        },
        {
            title: "doctor license"
        }
    ]
    return (
        <>
        <Card 
            hoverable
            style={{width:350}} 
        >
            <Image 
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            width="100%"
            height={250}
            placeholder={<Skeleton active />}
            />

            <Meta
            style={{textAlign: "center", padding: 15}}
            title="Doctor Name"
            description="description" 
            />
        </Card>
        <List 
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, idnex) => (
                <List.Item>
                    <List.Item.Meta 
                        title={item.title}
                        description="TBD"
                    />
                </List.Item>
            )}

        />
        </>
    )
}
export default Resume;