import React from 'react';
import { Input, InputNumber, Button, Form } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12,
  },
};

const product = {
  name: 'Cvetok',
  price: 20,
};

const Inputs = () => {
  const { TextArea } = Input;
  return (
    <Form
      {...layout}
      name="basic"
      className="container"
      initialValues={product}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input name!' }]}
      >
        <Input
          allowClear
          // onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input price!' }]}
      >
        <InputNumber
          allowClear
          min="1"
          // onChange={onChange}
        />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Please input country!' }]}
      >
        <Input
          placeholder="country"
          allowClear
          // onChange={onChange}
        />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input description!' }]}
      >
        <TextArea placeholder="description" allowClear />
      </Form.Item>
      <Form.Item
        label="Count available"
        name="countAvailable"
        rules={[{ required: true, message: 'Please input count available!' }]}
      >
        <InputNumber
          placeholder="count"
          allowClear
          min="0"
          // onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        label="Image Url"
        name="imageUrl"
        rules={[{ required: true, message: 'Please input image url!' }]}
      >
        <Input
          placeholder="imageUrl"
          allowClear
          // onChange={onChange}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { Inputs };
