import { Layout } from '@douyinfe/semi-ui';
import { Header } from '@/components/Header';

export default () => {
  const { Header: BHeader, Sider, Content } = Layout;
  return (
    <Layout className='h-screen w-screen'>
      <BHeader>
        <Header />
      </BHeader>
      <Layout>
        <Sider className='w-1/5'>Sider</Sider>
        <Content>Content</Content>
        <Sider className='w-1/5'>Sider</Sider>
      </Layout>
    </Layout>
  );
}
