import {
  CloudServerOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

export const allRouteCfg = [
  {
    path: '/',
    index: true,
    key: 'portal',
    menu: { label: '主页', key: 'portal', icon: <HomeOutlined /> },
    element: React.lazy(() => import('../views/portal/Portal')),
  },
  {
    path: '/system/host',
    index: true,
    key: 'host',
    menu: { label: 'Host配置', key: 'host', icon: <CloudServerOutlined /> },
    element: React.lazy(() => import('../views/system/host')),
  },
  {
    path: '/preferences',
    index: true,
    key: 'preferences',
    menu: { label: '偏好', key: 'preferences', icon: <SettingOutlined /> },
    element: () => <div>Hello @</div>,
  },
  {
    path: '/practices',
    index: true,
    key: 'practices',
    menu: { label: 'API测试', key: 'practices', icon: <SettingOutlined /> },
    element: React.lazy(() => import('../views/practices/ApiPractices'))
  }
];

export const findIdByRoute = (pathname: string) =>
  allRouteCfg.find((r) => r.path === pathname);
export const findRouteById = (key: string) =>
  allRouteCfg.find((r) => r.key === key);

export const menus = allRouteCfg.map((r) => r.menu);

export const routes = allRouteCfg.map(({ path, index, element }) => {
  const Comp = element;
  return {
    path,
    index,
    element: (
      <Suspense>
        <Comp />
      </Suspense>
    ),
  } as RouteObject;
});
