import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
import { Layout, Row, Col, Button } from 'antd';
import styles from "../styles.js";
const { Header, Content } = Layout;

function PageHeader({ loggedIn, signoutOnClick, signinOnSuccess}){
    const [loginState] = useState(false);

    return (
        // <Header
        //     style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     }}
        // >
        //     <div className="demo-logo" />
        //     {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
        //     <Button type="primary" shape="round" onClick={handleLogin}>Log in</Button>
        // </Header>
        <Header style={{ backgroundColor: styles.headerBackgroundColor }}>
            <Row justify="space-between" align="middle">
                <Col style={{color: "#6B69D6"}}>
                    MD Online
                </Col>
                <Col>
                    {loggedIn}
                </Col>
                <Col span={14}>
                    <div className="round-input-container custom-search">
                        
                    </div>
                </Col>
                <Col>
                    {loggedIn && <Button shape="round" onClick={signoutOnClick}>Logout</Button>}
                    {!loggedIn && (
                        <>
                            <Login onSuccess={signinOnSuccess}/>
                            <Register />
                        </>
                    )}
                </Col>
            </Row>
        </Header>
    )
}
export default PageHeader;