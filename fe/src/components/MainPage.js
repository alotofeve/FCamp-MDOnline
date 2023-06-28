import React from 'react';
import { Breadcrumb, Layout, Menu, Button,Divider, List, Typography } from 'antd';
import SearchPage from './SearchPage';
// import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
const { Header, Content } = Layout;
function MainPage(){
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    const handleDoctor = () =>{
        // return(
        //     <BrowserRouter>
        //         <Routes>
        //             {/* <Route path="/" element={<Button type="primary" shape="round"><Link to="/SearchPage">See a doctor</Link></Button>}></Route> */}
        //             <Route path="SearchPage" element={<SearchPage />}></Route>
        //         </Routes>
        //     </BrowserRouter>
        // )
    }
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
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    );
};

export default MainPage;