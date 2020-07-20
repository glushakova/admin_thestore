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

const Inputs = ({ product, onFinish }) => {
  const { TextArea } = Input;
  const {
    name,
    price,
    country,
    description,
    countAvailable,
    imageUrl,
  } = product;

  return (
    <Form
      {...layout}
      name="basic"
      className="container"
      initialValues={product}
      onFinish={(values) => {
        console.log(values);
        onFinish(values);
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input name!' }]}
        value={name}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input price!' }]}
        value={price}
      >
        <InputNumber allowClear min="1" size="small" />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Please input country!' }]}
        value={country}
      >
        <Input placeholder="country" allowClear />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input description!' }]}
        value={description}
      >
        <TextArea placeholder="description" allowClear />
      </Form.Item>

      <Form.Item
        label="Count available"
        name="countAvailable"
        rules={[{ required: true, message: 'Please input count available!' }]}
        value={countAvailable}
      >
        <InputNumber placeholder="count" allowClear min="0" size="small" />
      </Form.Item>

      <Form.Item
        label="Image Url"
        name="imageUrl"
        rules={[{ required: true, message: 'Please input image url!' }]}
        value={imageUrl}
      >
        <Input placeholder="imageUrl" allowClear />
      </Form.Item>
      <Form.Item {...tailLayout}>
        {name.length > 0 ? (
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        ) : (
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export { Inputs };
