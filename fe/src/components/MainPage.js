import React, {Link}from 'react';
import { Breadcrumb, Layout, Menu, Button,Divider, List, Typography } from 'antd';
// import Link from 'antd/lib/typography/Link';
import SearchDoctor from './SearchDoctor';
const { Header, Content } = Layout;
function MainPage(){
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];
    return (
        <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
              // height: 100%
            }}
          >
            <div style={{height: '300px',}}>
                <Button type="primary" shape="round">Chat with bot</Button>
                <Button type="primary" shape="round">See a doctor</Button>
                {/* <Link to="./SearchDoctor">
                    <Button type="primary" shape="round">See a doctor</Button>
                </Link> */}
                
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