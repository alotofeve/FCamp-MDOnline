import { Button, Form, Input, message, Modal, Select, Radio } from 'antd';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login, registerPatient, setPatientProfile, registerDoctor, setDoctorProfile } from '../utils';
const { Option } = Select;
function Register({ onSuccess, closeReminder, changePageState }) {
    const [displayDoctorModal, setDisplayDoctorModal] = useState(false)
    const [displayPatientModal, setDisplayPatientModal] = useState(false)
    const [RoleSelectModal, setRoleSelectModal] = useState(false)
    const [selectRole, setSelectRole] = useState('')
    const [value, setValue] = useState("");
    const handleCancel = () => {
        if (displayDoctorModal) {
            setDisplayDoctorModal(false)
        }
        if (RoleSelectModal) {
            setRoleSelectModal(false)
        }
        if (displayPatientModal) {
            setDisplayPatientModal(false)
        }
    }

    const signupOnClick = () => {
        setRoleSelectModal(false)
        if (selectRole === 'Doctor') {
            setDisplayDoctorModal(true)
        }
        if (selectRole === 'Patient') {
            setDisplayPatientModal(true)
        }
    }

    const RoleSelectClick = () => {
        setRoleSelectModal(true)
    }

    const handelSelectRole = (event) =>{
        setSelectRole(event)
    }
    
    const finishDoctorRegister = (data) => {
        const registerData = {"username": data.username, "password":data.password}
        const profileData = {"first_name": data.first_name, "last_name":data.last_name,
                             "gender": data.gender, "date_of_birth": data.date_of_birth,
                             "email": data.email, "phone": data.phone, "spec": data.spec,
                             "mail_address": data.mail_address, "license": data.license}
        registerDoctor(registerData)
            .then(() => {
                console.log("register doctor")
                setDisplayDoctorModal(false)
                setDisplayPatientModal(false)
                closeReminder()
                // message.success('Successfully signed up');
                login(registerData).then(()=>{
                    console.log("log in")
                    setDoctorProfile(profileData)
                        .then(() => {
                            message.success('Successfully signed up');
                            changePageState(selectRole)
                            { onSuccess() }
                        })
                })
            }).catch((err) => {
            message.error(err.message);
        })
    }

    const finishPatientRegister = (data) => {
        // console.log(data)
        const registerData = {"username": data.username, "password":data.password}
        const profileData = {"first_name": data.first_name, "last_name":data.last_name,
                             "gender": data.gender, "date_of_birth": data.date_of_birth,
                             "email": data.email, "phone": data.phone, "insurance": data.insurance,
                             "mail_address": data.mail_address}
        registerPatient(registerData)
            .then(() => {
                console.log("register patient")
                setDisplayDoctorModal(false)
                setDisplayPatientModal(false)
                closeReminder()
                // message.success('Successfully signed up');
                login(registerData).then(()=>{
                    console.log("log in")
                    setPatientProfile(profileData)
                        .then(() => {
                            message.success('Successfully signed up');
                            changePageState(selectRole);
                            { onSuccess() }
                        })
                })
            }).catch((err) => {
            message.error(err.message);
        })
    }

    return (
        <>
            <Button shape="round" type="primary" onClick={RoleSelectClick}>
                Register</Button>

            <Modal 
                title="Register"
                visible={RoleSelectModal}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <p>Are you Patient or Doctor?</p>
                <Select style={{ width: 120 }} onChange={handelSelectRole}>
                    <Option value="Doctor">Doctor</Option>
                    <Option value="Patient">Patient</Option>
                </Select> 
                <div style={{height:'20px'}}>
                    
                </div>  
                <Button type="primary" onClick={signupOnClick}>
                    Next
                </Button>
            </Modal>

            <Modal
                title="Doctor Register"
                visible={displayDoctorModal}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <Form
                    name="normal_register"
                    initialValues={{ remember: true }}
                    onFinish={finishDoctorRegister}
                    preserve={false}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your Firstname!' }]}
                    >
                        <Input
                            placeholder="firstname"
                        />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your Lastname!' }]}
                    >
                        <Input
                            placeholder="lastname"
                        />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select style={{ width: 120 }}>
                            <Option value="Female">Female</Option>
                            <Option value="Male">Male</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="date_of_birth"
                        rules={[{ required: true, message: 'Please input your Date of birth!' }]}
                    >
                        <Input
                            placeholder="date of birth"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            placeholder="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                    >
                        <Input
                            placeholder="phone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="spec"
                        rules={[{ required: true, message: 'Please input your Specialization!' }]}
                    >
                        <Input
                            placeholder="specialization"
                        />
                    </Form.Item>
                    <Form.Item
                        name="mail_address"
                        rules={[{ required: true, message: 'Please input your Mail Address!' }]}
                    >
                        <Input
                            placeholder="address"
                        />
                    </Form.Item>
                    <Form.Item
                        name="license"
                        rules={[{ required: true, message: 'Please input your License Number!' }]}
                    >
                        <Input
                            placeholder="license"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Patient Register"
                visible={displayPatientModal}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <Form
                    name="normal_register"
                    initialValues={{ remember: true }}
                    onFinish={finishPatientRegister}
                    preserve={false}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your Firstname!' }]}
                    >
                        <Input
                            placeholder="firstname"
                        />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your Lastname!' }]}
                    >
                        <Input
                            placeholder="lastname"
                        />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select style={{ width: 120 }}>
                            <Option value="Female">Female</Option>
                            <Option value="Male">Male</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="date_of_birth"
                        rules={[{ required: true, message: 'Please input your Date of birth!' }]}
                    >
                        <Input
                            placeholder="date of birth"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            placeholder="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                    >
                        <Input
                            placeholder="phone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="mail_address"
                        rules={[{ required: true, message: 'Please input your Mail Address!' }]}
                    >
                        <Input
                            placeholder="address"
                        />
                    </Form.Item>
                    <Form.Item
                        name="insurance"
                        rules={[{ required: true, message: 'Please input your Insurance Number!' }]}
                    >
                        <Radio.Group value={value}>
                            <Radio value={true}>I have insurance</Radio>
                            <Radio value={false}>I don't have insurance</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>


    )
}
export default Register;

// import "./Register.css";

// const Registration = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [isDoctor, setIsDoctor] = useState(false);
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [isRegistered, setIsRegistered] = useState(false);
//     const [gender, setGender] = useState("");
//     const [dob, setDob] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [insurance, setInsurance] = useState("");
//     const [licenseCode, setLicenseCode] = useState("");

//     const handleRegistration = async (event) => {
//         const registrationData = {
//             username: 'exampleUsername',
//             password: 'examplePassword',
//             name: 'exampleName',
//             gender: 'exampleGender',
//             dob: 'exampleDob'
//         };


//         if (isDoctor) {
//             // Registration for doctor
//             api.registerFoctor(registrationData)
//                 .then(response => {
//                     console.log(response);
//                     setIsRegistered(true);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 });
//         } else {
//             // Registration for patient
//             api.registerPatient(registrationData)
//                 .then(response => {
//                     console.log(response);
//                     setIsRegistered(true);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 });
//         }
//     };

//     return (
//         <div>
//             <h2>Registration</h2>
//             <label><input type="checkbox" checked={isDoctor} onChange={(e) => setIsDoctor(e.target.checked)} />
//             I'm a doctor
//             </label>
//             <br />
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Name:
//                 <input value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Gender:
//                 <input value={gender} onChange={(e) => setGender(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Date of Birth:
//                 <input value={dob} onChange={(e) => setDob(e.target.value)} />
//             </label>
//             <br />
//             {!isDoctor && ( 
//                 <label>
//                     Address:
//                     <input value={address} onChange={(e) => setAddress(e.target.value)} />
//                 </label>
//             )}
//             {isDoctor && (
//                 <label>
//                     License Code:
//                     <input value={licenseCode}
//                        onChange={(e) => setLicenseCode(e.target.value)}
//                     />
//                 </label>
//             )}
//             <br />
//             <button onClick={handleRegistration}>Register</button>
//         </div>
//     )
// }


// export default Registration;