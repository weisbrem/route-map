import ForwardTable from 'antd/es/table/Table';
import { AlignType } from 'rc-table/lib/interface';

const contentPosition: AlignType = 'center';

/**
 * получить точки из db и заполнить массив dataSource
 */

const dataSource = [
  {
    key: 1,
    name: 'route 1',
    route: 'Маршрут №1',
    ['point-1']: ['59.84660399, ', '30.29496392'],
    ['point-2']: ['59.82934196, ', '30.42423701'],
    ['point-3']: ['59.83567701, ', '30.38064206'],
  },
  {
    key: 2,
    name: 'Маршрут 2',
    route: 'Маршрут №2',
    ['point-1']: ['59.82934196, ', '30.42423701'],
    ['point-2']: ['59.82761295, ', '30.41705607'],
    ['point-3']: ['59.84660399, ', '30.41705607'],
  },
  {
    key: 3,
    name: 'Маршрут 3',
    route: 'Маршрут №3',
    ['point-1']: ['59.83567701, ', '30.38064206'],
    ['point-2']: ['59.84660399, ', '30.29496392'],
    ['point-3']: ['59.82761295, ', '30.41705607'],
  },
];

const columns = [
  {
    title: 'Маршрут',
    dataIndex: 'route',
    key: 'route',
    align: contentPosition,
  },
  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'point-1',
    key: 'point-1',
    align: contentPosition,
  },
  {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'point-2',
    key: 'point-2',
    align: contentPosition,
  },
  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'point-3',
    key: 'point-3',
    align: contentPosition,
  },
];

function Table() {
  return <ForwardTable columns={columns} dataSource={dataSource} pagination={false}></ForwardTable>;
}

export default Table;
