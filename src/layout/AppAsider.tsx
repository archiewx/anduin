import { Layout, Menu } from 'antd';
import { findRouteById, menus } from './config';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const { Sider } = Layout;


export const AppSider = () => {
  const navigate = useNavigate();
  
  return <Sider theme="light">
    <Menu items={menus} onClick={(e) => {
      const { path: pathname } = findRouteById(e.key)!;
      navigate({ pathname });
    }} />
  </Sider>;
};

AppSider.displayName = 'AppSider';
