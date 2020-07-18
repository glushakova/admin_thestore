import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ROUTES } from '../../const';

const ProductsPage = () => {
  const [products, changeProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/products`);
      changeProducts(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const delProduct = async (prop) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/products/${prop.id}`);
      getProducts();
    } catch (err) {
      console.log(err.message);
    }
  };

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
      render: (product) => (
        <span>
          <a onClick={() => delProduct(product)} style={{ marginRight: 16 }}>
            Delete
          </a>
          <Link
            key={product.id}
            to={`${ROUTES.CHANGE_PRODUCT}/${product.id}`}
            className="ant-dropdown-link"
          >
            Edit
          </Link>
        </span>
      ),
    },
  ];

  return (
    <div className="container">
      <Link to={ROUTES.ADD_PRODUCT}>
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a product
        </Button>
      </Link>
      <Table columns={columns} dataSource={products} pagination={false} />
    </div>
  );
};
export { ProductsPage };
