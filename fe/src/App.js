import logo from './logo.svg';
import './App.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button} from 'antd';
import React, {useState}from 'react';
import LoginPage from './components/Login';
import MainPage from './components/MainPage';
import PageHeader from './components/Header';
import SearchPage from './components/SearchPage';
import DoctorProfile from './components/DoctorProfile';
const { Header, Content } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const[buttonState, setButtonState] = useState(true)
  const [pageState, setPageState] = useState('');
  const signinOnSuccess = () => {
    console.log("sign in")
  }
  const signoutOnClick = () => {
    
  }
  const handleLogin = () => {
    return (<LoginPage/>);
  }
  const showButton = () => {
    if (buttonState) {
      return(
        <div>
          <Button type="primary" shape="round">Chat with bot</Button>
          <Button type="primary" shape="round" onClick={searchDoctor}>See a doctor</Button> 
        </div>
      )
    }
  }
  const renderContent = (pageState) => {
    if (pageState === "search") {
      return <SearchPage />
    }
    if (pageState === "profile") {
      return <DoctorProfile />
    }
    else{
      return <MainPage />;
    }
    
  }
  const searchDoctor = () => {
    setPageState("search")
    setButtonState(false)
  }
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <Layout>
      {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Button type="primary" shape="round" onClick={handleLogin}>Log in</Button>
      </Header> */}
      <Header>
          <PageHeader
              loggedIn={loggedIn}
              signoutOnClick={signoutOnClick}
              signinOnSuccess={signinOnSuccess}
          />
        </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{
            padding: '24px 0',
            // background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
              // height: 100%
            }}
          >
            {showButton()}
            {renderContent(pageState)}
            {/* <Button type="primary" shape="round" onClick={renderContent}>See a doctor</Button> */}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

