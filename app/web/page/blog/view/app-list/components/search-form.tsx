import React, { useState } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import CollectionCreateForm from './create-app-dialog';
import request from '@framework/request'
const AdvancedSearchForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const [visible, setVisible] = useState(false);

    const onCreate = values => {
        request.post('/app/create', values).then(res => {
            setVisible(false);
        })
    };

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item
                            name={`appname`}
                            label={`应用名称`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            查找
                        </Button>
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            重置
                         </Button>
                        <Button
                            style={{ marginRight: '8px' }}
                            onClick={() => {
                                setVisible(true)
                            }}
                        >
                            创建
                        </Button>
                    </Col>
                </Row>
            </Form>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </>
    );
};

export default AdvancedSearchForm;