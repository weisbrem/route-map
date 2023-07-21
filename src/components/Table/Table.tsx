import ForwardTable from 'antd/es/table/Table';
import { useAppSelector } from '../../hooks';

import { renderData } from '../../helpers';

import { AlignType } from 'rc-table/lib/interface';

const contentPosition: AlignType = 'center';

const columns = [
  {
    title: 'Маршрут',
    dataIndex: 'routeName',
    key: 'routeName',
    align: contentPosition,
  },
  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'point-1',
    key: 'point-1',
    align: contentPosition,
    render: renderData,
  },
  {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'point-2',
    key: 'point-2',
    align: contentPosition,
    render: renderData,
  },
  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'point-3',
    key: 'point-3',
    align: contentPosition,
    render: renderData,
  },
];

function Table() {
  const routes = useAppSelector((state) => state.routes.routes);

  if (!routes) {
    return null;
  }

  const dataSource = Object.entries(routes).map(([name, route]) => {
    const { key, routeName, points } = route;

    return {
      key,
      name,
      routeName,
      ...points,
    };
  });

  return <ForwardTable columns={columns} dataSource={dataSource} pagination={false}></ForwardTable>;
}

export default Table;
