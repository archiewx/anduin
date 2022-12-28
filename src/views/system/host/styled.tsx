import styled from '@emotion/styled';
import { Layout, Menu } from 'antd';

export const HostMenu = styled(Menu)`
  color: currentColor;

  && > .ant-menu-item-selected {
    background-color: #fff;
    font-weight: 700;
  }

  && > .ant-menu-item {
    margin: 0;
  }
`;

export const HostSider = styled(Layout.Sider)`
  box-shadow: 5px -5px 5px -5px #efefef;
  user-select: none;

  && {
    background-color: #fff;
  }

  && > .ant-menu {
    border-inline-end: none;
  }
`;
