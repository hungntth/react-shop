import { Form, Input, Modal } from 'antd';
import React from 'react';

const ModalLogin = ({ isModalOpen, handleOk, handleCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            open={isModalOpen}
            title="Form Login"
            okText="Login"
            cancelText="Cancel"
            onCancel={handleCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        handleOk(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the username of collection!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Passsword" rules={[
                        {
                            required: true,
                            message: 'Please input the password of collection!',
                        },
                    ]}>
                    <Input type="password" />
                </Form.Item>
                {/* <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item> */}
            </Form>
        </Modal>
    );
};

export default ModalLogin;