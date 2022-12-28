import { Input, Layout } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useState } from 'react';
import { Box } from '@layout/styled';
import { HostMenu, HostSider } from './styled';
import { invoke } from '@tauri-apps/api';

const HostProviderPage = () => {
  const items: ItemType[] = [
    { label: '默认', key: 'default' },
    { label: '默认2', key: 'default2' },
  ];
  const [activeKeys, updateActiveKeys] = useState(['default']);
  const [hosts, updateHosts] = useState('');

  useEffect(() => {
    invoke<string>('read_hosts').then((systemHosts) => {
      updateHosts(systemHosts);
    });
  }, []);

  return (
    <Layout style={{ height: '100%' }}>
      <HostSider>
        <HostMenu
          selectedKeys={activeKeys}
          items={items}
        />
      </HostSider>
      <Layout.Content style={{ padding: 0 }}>
        <Box
          pl={15}
          pr={15}
        >
          <Input.TextArea
            style={{ background: '#fff' }}
            value={hosts}
            autoSize
            bordered={false}
          />
        </Box>
      </Layout.Content>
    </Layout>
  );
};

export default HostProviderPage;

HostProviderPage.displayName = 'HostConfigurePage';
