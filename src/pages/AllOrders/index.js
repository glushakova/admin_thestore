import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ROUTES } from '../../const';

const OrdersPage = () => {
  const [orders, changeOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/orders`);
      changeOrders(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);

  // {
  // 	"address": "string",
  // 	"phone": "string",

  // }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
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
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
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
            to={`${ROUTES.CHANGE_PRODUCT}/${orders.id}`}
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