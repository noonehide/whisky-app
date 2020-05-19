import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="新建应用"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values: any)=> {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="appname"
          label="应用名称"
          rules={[{ required: true, message: '请输入应用名称!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
            name="des" 
            label="应用描述"
            rules={[{ required: true, message: '请输入应用描述!' }]}
        >
            <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;