import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const OneOrderPage = (props) => {
  const authorization = () =>
    (axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`);

  const [order, changeOrder] = useState([]);

  const getOrder = async () => {
    try {
      authorization();
      const response = await axios.get(
        `${process.env.REACT_APP_API}/orders/${props.match.params.inex}`
      );
      changeOrder(response.data.orderProducts);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

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
