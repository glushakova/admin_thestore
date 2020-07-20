import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Inputs } from '../../components';

const AddPage = () => {
  const history = useHistory();

  const product = {
    id: '',
    name: '',
    price: '',
    country: '',
    description: '',
    countAvailable: '',
    imageUrl: '',
  };

  const onFinish = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_API}/products`, values);
      history.push('/products');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Add new product</title>
      </Helmet>
      <Inputs product={product} onFinish={onFinish} />
    </>
  );
};

export { AddPage };
