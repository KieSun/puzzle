import { Layout } from '@douyinfe/semi-ui';

export default () => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout className='h-screen w-screen'>
      <Header className='h-16'>Header</Header>
      <Layout>
        <Sider className='w-1/5'>Sider</Sider>
        <Content>Content</Content>
        <Sider className='w-1/5'>Sider</Sider>
      </Layout>
    </Layout>
  );
}
