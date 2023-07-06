import logo from './logo.svg';
import './App.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button, message, Modal} from 'antd';
import React, {useState}from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import PageHeader from './components/Header';
import SearchPage from './components/SearchPage';
import DoctorProfile from './components/DoctorProfile';
import Setting from './components/Setting';
import { logout } from './utils';
import PatientProfile from './components/PatientProfile';
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
  const [loggedIn, setLoggedIn] = useState(false);
  const[buttonState, setButtonState] = useState(true)
  const [pageState, setPageState] = useState('');
  const [loginReminder, setLoginReminder] = useState(false);
  const [role,setRole] = useState("")
  const signinOnSuccess = () => {
    setLoggedIn(true);
  }
  const signoutOnClick = () => {
    logout().then(() => {
        setLoggedIn(false)
        setPageState("")
        setButtonState(true)
        message.success('Successfully Signed out')
    }).catch((err) => {
        message.error(err.message)
    })
  }
  const handleCancel = () => {
    setLoginReminder(false);
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
  const showProfile = () => {
    setButtonState(false)
    if (role === "Patient") {
      setPageState("Patient Profile")
    }else{
      setPageState("Doctor Profile")
    }
  }
  const renderContent = (pageState) => {
    if (pageState === "search") {
      return <SearchPage changePageState = {changePageState}/>
    }
    if (pageState === "profile") {
      return <DoctorProfile />
    }
    if (pageState === "Doctor") {
      return <Setting />
    }
    if (pageState === "Patient Profile"){
      return <PatientProfile />
    }
    if (pageState === "Doctor Profile"){
      return <DoctorProfile />
    }
    else{
      return <MainPage />;
    }
  }
  const searchDoctor = () => {
    if (!loggedIn) {
      setLoginReminder(true);
    }else{
      setPageState("search")
      setButtonState(false)
    }
  }
  const closeReminder = () => {
    setLoginReminder(false);
  }
  const changePageState = (data) => {
    setPageState(data);
    setRole(data)
    if(data === "Doctor"){
      setButtonState(false);
    }
    
  }
  return (
    <Layout>
      <Header>
          <PageHeader
              loggedIn={loggedIn}
              signoutOnClick={signoutOnClick}
              signinOnSuccess={signinOnSuccess}
              showProfile = {showProfile}
              closeReminder = {closeReminder}
              changePageState = {changePageState}
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
            <Modal 
              title="Login Required"
              visible={loginReminder}
              onCancel={handleCancel}
              footer={null}
              destroyOnClose={true}
            >
              <p>You need to log in before using this function</p>
              <div style={{height:'20px'}}>
                  
              </div> 
              <div>
              <Login onSuccess={signinOnSuccess} closeReminder={closeReminder} changePageState={changePageState}/>
              <Register onSuccess={signinOnSuccess} closeReminder={closeReminder} changePageState={changePageState}/>
              </div> 
            </Modal>
            {showButton()}
            {renderContent(pageState)}
            {/* <Button type="primary" shape="round" onClick={renderContent}>See a doctor</Button> */}
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
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


