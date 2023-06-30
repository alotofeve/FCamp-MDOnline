import { Button, Checkbox, Form, Input, message } from 'antd';
import react, { useState } from 'react';
import { updateDoctorProfile } from '../utils';
const UpdateInfo = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async(data) => {
    setLoading(true);
    try {
      const response = await updateDoctorProfile(data);
      message.success("Success");
    } catch (error) {
        message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Firstname"
        name="firstname"
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastname"
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Gender"
        name="gender"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Birth"
        name="birth"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Spec"
        name="spec"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="MailAddress"
        name="mail_address"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="License"
        name="license"
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
export default UpdateInfo;