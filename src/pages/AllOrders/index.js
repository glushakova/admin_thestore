import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { ROUTES } from '../../const';

const OrdersPage = () => {
  const authorization = () =>
    (axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`);

  const [orders, changeOrders] = useState([]);

  const getOrders = async () => {
    try {
      authorization();
      const response = await axios.get(`${process.env.REACT_APP_API}/orders`);
      changeOrders(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
      width: '10%',
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      key: 'totalCost',
      fixed: 'left',
      width: '5%',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: '10%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '10%',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: '5%',
      render: (orders) => (
        <span>
          <Link
            key={orders.id}
            to={`${ROUTES.ORDERS}/${orders.id}`}
            className="ant-dropdown-link"
          >
            Show
          </Link>
        </span>
      ),
    },
  ];

  return (
    <div className="container">
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <div>
        <Table
          rowClassName={() => 'editable-row'}
          bordered
          columns={columns}
          dataSource={orders}
          pagination={false}
        />
      </div>
    </div>
  );
};
export { OrdersPage };
