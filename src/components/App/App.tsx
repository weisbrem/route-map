import { Row, Col, Space, Layout } from 'antd';

import Paragraph from 'antd/es/typography/Paragraph';
import Table from '../Table/Table';
import RouteMap from '../RouteMap/RouteMap';

import styles from './App.module.css';

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout className={styles['main-layout']}>
      <Header className={styles['header']}>Header</Header>
      <Content>
        <Row justify={'space-between'} wrap={false}>
          <Col span={12}>
            <Space direction='vertical' align='center'>
              <Paragraph>Таблица 1 — Список маршрутов</Paragraph>
              <Table />
            </Space>
          </Col>
          <Col span={12}>
            <RouteMap />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
