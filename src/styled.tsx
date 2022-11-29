import styled from '@emotion/styled';
import { Layout } from 'antd';


export const AppLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
`;

export const AppHeader = styled(Layout.Header)`
  && {
    background-color: #fff;
    line-height: normal;
    padding-inline: 0;
    height: auto;
    padding: 5px 10px;
    border-bottom: 1px solid #efefef;
  }
`;

export const AppFooter = styled(Layout.Footer)`
  && {
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #efefef;
  }
`;
