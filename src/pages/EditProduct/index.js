import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Inputs } from '../../components';

const ChangePage = (props) => {
  const [product, changeProduct] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/products/${props.match.params.inex}`
        );
        changeProduct(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, [props.match.params.inex]);

  const onFinish = async (values) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API}/products/${props.match.params.inex}`,
        values
      );
      history.push('/products');
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!product) return null;

  return <Inputs product={product} onFinish={onFinish} />;
};

export { ChangePage };
