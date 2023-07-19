import Paragraph from 'antd/es/typography/Paragraph';
import Table from '../Table/Table';
import { Space } from 'antd';

function App() {
  return (
    <>
      <Space direction='vertical' align='center'>
        <Paragraph>Таблица 1 — Список маршрутов</Paragraph>
        <Table />
      </Space>
    </>
  );
}

export default App;
