import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';

import data from './data.json';

const ProductsPage = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
      fixed: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: '10%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '5%',
      sorter: {
        compare: (a, b) => a.price - b.price,
      },
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      width: '5%',
    },
    {
      title: 'Count',
      dataIndex: 'countAvailable',
      key: 'countAvailable',
      width: '5%',
      sorter: {
        compare: (a, b) => a.countAvailable - b.countAvailable,
      },
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: '5%',
      render: () => (
        <span>
          <a style={{ marginRight: 16 }}>Delete</a>
          <Link to={ROUTES.CHANGE_PRODUCT} className="ant-dropdown-link">
            Edit
          </Link>
        </span>
      ),
    },
  ];

  return (
    <div className="container">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export { ProductsPage };
