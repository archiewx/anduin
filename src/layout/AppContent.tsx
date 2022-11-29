import styled from '@emotion/styled';
import { Layout, Switch } from 'antd';
import { Route, useNavigation, Routes, useRoutes } from 'react-router-dom';
import { routes } from './config';


const AntdLayoutContent = styled(Layout.Content)`
  && {
    background-color: #fff;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
  }
`;

export const AppContent = () => {
  const view = useRoutes(routes);
  
  return <AntdLayoutContent>
    {view}
  </AntdLayoutContent>;
};
