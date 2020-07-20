import React from 'react';
import { Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import { onChangeEmail, onChangePassword, signIn } from '../../actions/';
import './style.css';

const SignInPage = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="sign-in container">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Input.Group>
        {error && <div>{`Error: ${error}`}</div>}
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => dispatch(onChangeEmail(event.target.value))}
        />
        <Input.Password
          placeholder="password"
          value={password}
          onChange={(event) => dispatch(onChangePassword(event.target.value))}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Button
          onClick={() => {
            dispatch(signIn({ email, password, history }));
          }}
        >
          Sign In
        </Button>
      </Input.Group>
    </div>
  );
};

export { SignInPage };
