import { Layout, Switch } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AppLayout } from './styled';
import { AppSider } from './layout/AppAsider';
import { AppContent } from './layout/AppContent';

function App() {
  return (
    <>
      <Router>
        <AppLayout>
          {/*<AppHeader>Header</AppHeader>*/}
          <Layout>
            <AppSider />
            <AppContent />
          </Layout>
          {/*<AppFooter>Footer</AppFooter>*/}
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
