import React, { useEffect, useState } from 'react';
import { Descriptions, Table } from 'antd';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const OneOrderPage = (props) => {
  const authorization = () =>
    (axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`);

  useEffect(() => {
    getOrder();
  }, [props.match.params.inex]);

  const [order, changeOrder] = useState([]);

  const [info, changeInfo] = useState([]);

  const getOrder = async () => {
    try {
      authorization();
      const response = await axios.get(
        `${process.env.REACT_APP_API}/orders/${props.match.params.inex}`
      );
      changeOrder(response.data.orderProducts);
      changeInfo(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: ['product', 'name'],
      key: 'name',
      fixed: 'left',
      width: '20%',
    },
    {
      title: 'Price',
      dataIndex: ['product', 'price'],
      key: 'price',
      width: '20%',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      width: '20%',
    },
  ];

  return (
    <div className="container">
      <Helmet>
        <title>{`Order № ${props.match.params.inex}`}</title>
      </Helmet>
      <Descriptions title="User">
        <Descriptions.Item label="Name">{info.fullName}</Descriptions.Item>
        <Descriptions.Item label="Phone">{info.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">{info.address}</Descriptions.Item>
        <Descriptions.Item label="Comment">{info.comment}</Descriptions.Item>
      </Descriptions>
      <div>
        <Table
          rowClassName={() => 'editable-row'}
          bordered
          columns={columns}
          dataSource={order}
          pagination={false}
        />
      </div>
    </div>
  );
};
export { OneOrderPage };

// import { Descriptions } from 'antd';

// ReactDOM.render(
//   <Descriptions title="User Info">
//     <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
//     <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
//     <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
//     <Descriptions.Item label="Remark">empty</Descriptions.Item>
//     <Descriptions.Item label="Address">
//       No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
//     </Descriptions.Item>
//   </Descriptions>,
//   mountNode,
// );
