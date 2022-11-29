import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router-dom';
import { ReactNode } from 'react';

export const allRouteCfg = [
  {
    path: '/',
    index: true,
    key: 'portal',
    menu: { label: '主页', key: 'portal', icon: <HomeOutlined /> },
    element: () => <div>Hello Good</div>,
  },
  {
    path: '/settings',
    index: true,
    key: 'setting',
    menu: { label: '设置', key: 'setting', icon: <SettingOutlined /> },
    element: () => <div>Hello @</div>,
  },
];

export const findRouteById = (key: string) => allRouteCfg.find(r => r.key === key);
export const menus = allRouteCfg.map((r) => r.menu);
export const routes = allRouteCfg.map(({ path, index, element }) => {
  const Comp = element;
  return {
    path,
    index,
    element: <Comp />,
  } as RouteObject;
});
