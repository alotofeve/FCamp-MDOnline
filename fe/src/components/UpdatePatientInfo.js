import React, { useState } from 'react';
import { Button, Form, Input, message, Select } from 'antd';
import { updateDoctorProfile, updatePatientProfile } from '../utils';

const { Option } = Select;

const UpdatePatientInfo = ({ patientInfo}) => {
  const [form] = Form.useForm();

  const initialValues = {
    "first_name": patientInfo.firstName,
    "last_name": patientInfo.lastName,
    "gender": patientInfo.gender,
    "date_of_birth": patientInfo.dateOfBirth,
    "insurance": patientInfo.insurance,
    "email": patientInfo.email,
    "phone": patientInfo.phone,
    "mail_address": patientInfo.mailAddress,
  };

  const onFinish = async (data) => {
    try {
      await updatePatientProfile(data);
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

        <Form.Item label="Insurance" name="insurance">
          <Select>
            <Option value={true}>True</Option>
            <Option value={false}>False</Option>
          </Select>
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

export default UpdatePatientInfo;
