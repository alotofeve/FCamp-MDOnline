
import { Card, Image, List, Skeleton, message } from "antd";
import { getDoctorInfo } from "../../utils";
import { useState, useEffect } from "react";

const { Meta } = Card;

const Resume = ({patientInfo}) => {
    const fields = ["Gender", "Email", "Phone"]

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
            title={patientInfo.firstName + " " + patientInfo.lastName}
            />
        </Card>
        <List 
            itemLayout="horizontal"
            dataSource={fields}
            renderItem={(field) => (
                <List.Item>
                    <List.Item.Meta 
                        title={field}
                        description={patientInfo[field.toLowerCase()]}
                    />
                </List.Item>
            )}

        />
        </>
    )
}
export default Resume;