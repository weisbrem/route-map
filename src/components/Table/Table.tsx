import ForwardTable from 'antd/es/table/Table';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { renderData } from '../../helpers';

import { AlignType } from 'rc-table/lib/interface';
import {
  setSelectMapCoordinates,
  setSelectRouteCoordinates,
} from '../../store/polyline-slice/polyline-slice';

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
  const dispatch = useAppDispatch();

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

  return (
    <ForwardTable
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      rowSelection={{
        type: 'radio',
        onChange: (_key, row) => {
          const formatedData = Object.entries(row[0]).filter(
            ([key]) => key.length === key.match(/point-\d/g)?.[0].length
          );

          const coordinateForMap = formatedData.map(([_name, item]) => item as unknown as number[]);
          let resultCoordinates = '';

          formatedData.forEach(([key, value], i) => {
            if (i + 1 === formatedData.length) {
              resultCoordinates = `${resultCoordinates}${value.toString()}`;
              return;
            }

            if (key.includes(`point-${i + 1}`)) {
              resultCoordinates = `${resultCoordinates}${value.toString()};`;
            }
          });

          dispatch(setSelectRouteCoordinates(resultCoordinates));
          dispatch(setSelectMapCoordinates(coordinateForMap));
          dispatch({ type: 'routes/getPolylineRoute' });
        },
      }}
    />
  );
}

export default Table;
