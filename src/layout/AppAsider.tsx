import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { findIdByRoute, findRouteById, menus } from './config';

const { Sider } = Layout;

export const AppSider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKeys, updateActiveKeys] = useState(['/']);

  useEffect(() => {
    const route = findIdByRoute(location.pathname)!;
    updateActiveKeys([route.key]);
  }, []);

  return (
    <Sider theme="light">
      <Menu
        items={menus}
        selectedKeys={activeKeys}
        onClick={(e) => {
          const { path: pathname } = findRouteById(e.key)!;
          updateActiveKeys([e.key]);
          navigate({ pathname });
        }}
      />
    </Sider>
  );
};

AppSider.displayName = 'AppSider';
