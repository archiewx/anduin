import { createVPNView } from '@@/window/remote-vpn-token';
import { invoke } from '@tauri-apps/api';
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/api/notification';
import { Button } from 'antd';

export default function Portal() {
  return (
    <div>
      <Button
        onClick={() => {
          createVPNView();
        }}
      >
        创建新窗口
      </Button>
      <Button
        onClick={async () => {
          let permissionGranted = await isPermissionGranted();
          if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === 'granted';
          }
          if (permissionGranted) {
            sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
          }
        }}
      >
        提醒
      </Button>
      <Button
        onClick={async () => {
          const hosts = await invoke('read_hosts');
          console.debug('hosts =', hosts);
        }}
      >
        读取 hosts
      </Button>
    </div>
  );
}
