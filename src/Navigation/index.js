import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { Sidebar } from '../components';
import { SignInPage, ProductsPage, ChangePage } from '../pages';
import { autoSignIn, signOut } from '../actions';
import { ROUTES } from '../const';
import './style.css';

import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const Navigation = () => {
  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const toMainPage = () => {
    history.push('/main');
  };

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      dispatch(autoSignIn({ decoded }));
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          {user && (
            <Button
              onClick={() => {
                dispatch(signOut());
                toMainPage();
              }}
            >
              Logout
            </Button>
          )}
        </Header>
        <Content>
          <Layout>
            <Sidebar />
            <Content>
              <Switch>
                <Route path={ROUTES.SIGNIN} component={SignInPage} />
                <Route path={ROUTES.CHANGE_PRODUCT} component={ChangePage} />
                <Route path={ROUTES.PRODUCTS} component={ProductsPage} />
                <Route path={ROUTES.ORDERS} component={SignInPage} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer className="footer">By Glushakova ©2020</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
