import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { Sidebar } from '../components';
import {
  SignInPage,
  ProductsPage,
  ChangePage,
  AddPage,
  OrdersPage,
  OneOrderPage,
} from '../pages';
import { autoSignIn, signOut } from '../actions/AuthActions';
import { ROUTES } from '../const';
import './style.css';

import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const Navigation = () => {
  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      dispatch(autoSignIn({ decoded }));
    }
  }, [token, dispatch]);

  const authRoutes = [
    <Route exact path={ROUTES.ADD_PRODUCT} component={AddPage} />,
    <Route exact path={ROUTES.CHANGE_ONE_PRODUCT} component={ChangePage} />,
    <Route exact path={ROUTES.PRODUCTS} component={ProductsPage} />,
    <Route exact path={ROUTES.ONE_ORDER} component={OneOrderPage} />,
    <Route exact path={ROUTES.ORDERS} component={OrdersPage} />,
  ];

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          {user && (
            <Link to={ROUTES.SIGNIN}>
              <Button
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                Logout
              </Button>
            </Link>
          )}
        </Header>
        <Content>
          <Layout>
            {user && <Sidebar />}
            <Content>
              <Switch>
                {user && authRoutes}
                <Route exact path={ROUTES.SIGNIN} component={SignInPage} />
                <Route exact path={ROUTES.MAIN} component={SignInPage} />
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
