import React from 'react';
import { Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { onChangeEmail, onChangePassword } from '../../actions/';
import './style.css';

const SignInPage = () => {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  return (
    <div className="sign-in container">
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
      <Button onClick>Sign In</Button>
    </div>
  );
};

export { SignInPage };