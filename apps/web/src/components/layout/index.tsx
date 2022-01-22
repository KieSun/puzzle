import { Layout } from '@douyinfe/semi-ui';

export default () => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
    </Layout>
  );
}
