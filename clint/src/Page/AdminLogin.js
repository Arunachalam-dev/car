import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../Redux/Action/useraction';  // create this action to login admin
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(adminLogin(values))
      .then((res) => {
        if (res.payload.role === 'admin') {
          navigate('/adminpanel'); // redirect admin to admin panel
        } else {
          alert('Access denied: Not an admin');
        }
      });
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">Admin Login</Button>
    </Form>
  );
};

export default AdminLogin;
