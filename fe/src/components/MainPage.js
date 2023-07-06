import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Button,Divider, List, Typography, message } from 'antd';
import SearchPage from './SearchPage';
import { getFiveLectures } from '../utils/LectureUtils';
// import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
const { Header, Content } = Layout;
function MainPage(){
    const [lectureData, setLectureData] = useState([]);
    // const data = [
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    // ];
    useEffect(() => {
        getFiveLectures()
            .then((data) => {
                setLectureData(data)
            }).catch((err) => {
            message.error(err.message)
        })
    }, [])
    return (
        <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
              // height: 100%
            }}
          >
            <div style={{height: '300px',}}>
                {/* <Button type="primary" shape="round">Chat with bot</Button>
                <Button type="primary" shape="round" onClick={handleDoctor}>See a doctor</Button>  */}
            </div>
            <div>
                <List
                    header={<div>Recent Lecture</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={lectureData}
                    renderItem={(item) => (
                        <List.Item>
                        <Typography.Text mark>[lecture]</Typography.Text> {item.title}
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    );
};

export default MainPage;