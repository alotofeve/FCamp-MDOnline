import React, { useState } from 'react';
import { Button, Form, Input, message, Select } from 'antd';
import { updateDoctorProfile, updatePatientProfile } from '../utils';

const { Option } = Select;

const UpdateInfo = ({ doctorInfo }) => {
  const [form] = Form.useForm();

  const initialValues = {
    "first_name": doctorInfo.firstName,
    "last_name": doctorInfo.lastName,
    "gender": doctorInfo.gender,
    "date_of_birth": doctorInfo.dateOfBirth,
    "email": doctorInfo.email,
    "phone": doctorInfo.phone,
    "spec": doctorInfo.spec,
    "mail_address": doctorInfo.mailAddress,
    "license": doctorInfo.license,
  };

  const onFinish = async (data) => {
    try {
      await updateDoctorProfile(data);
      message.success('Profile updated successfully');
    } catch (error) {
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main style={{ paddingTop: 30, paddingBottom: 20, paddingLeft: 35, textAlign: 'center' }}>
      <Form
        form={form}
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
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Firstname" name="first_name">
          <Input />
        </Form.Item>

        <Form.Item label="Lastname" name="last_name">
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Select>
            <Option value="Female">Female</Option>
            <Option value="Male">Male</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Birth" name="date_of_birth">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Spec" name="spec">
          <Input />
        </Form.Item>

        <Form.Item label="MailAddress" name="mail_address">
          <Input />
        </Form.Item>

        <Form.Item label="License" name="license">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default UpdateInfo;
