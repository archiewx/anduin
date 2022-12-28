import { window } from '@tauri-apps/api';

// https://login.nio.com/login
// https://signin.nio.com/login?service=https%3A%2F%2Fvpntoken.niohome.com/api/1/opensso/vpntoken/login
export const createVPNView = () => {
  const webview = new window.WebviewWindow('vpn-token', {
    url: 'https://vpntoken.niohome.com/v2/token_sso.html',
  });
};
