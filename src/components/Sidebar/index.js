import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';

const { Sider } = Layout;

const Sidebar = () => (
  <Sider className="site-layout-background" width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      <Menu.Item key="1">
        <Link to={ROUTES.PRODUCTS}>Products</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={ROUTES.CHANGE_PRODUCT}>Orders</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export { Sidebar };
