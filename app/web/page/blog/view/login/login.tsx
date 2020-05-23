import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Wrap } from '@component/wrap';
import request from '@framework/request';
import { withRouter } from 'react-router';
import Cookies from 'js-cookie';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@withRouter
export default class Login extends React.Component<any, any> {

  onFinish = values => {
    console.log('Success:', values);
    request.post('/blog/login', values).then(res => {
      Cookies.set('token', res.access_token);
      this.props.history.push('/app-list');
    });
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <Wrap>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>
      </Wrap>
    );
  }
}
