import styled from '@emotion/styled';
import { Layout } from 'antd';
import { useRoutes } from 'react-router-dom';
import { routes } from './config';

const LayoutContent = styled(Layout.Content)`
  && {
    background-color: #fff;
    border-radius: 4px;
    margin: 10px;
    /* padding: 10px; */
    height: calc(100vh - 2 * 10px);
  }
`;

export const AppContent = () => {
  const view = useRoutes(routes);

  return <LayoutContent>{view}</LayoutContent>;
};
