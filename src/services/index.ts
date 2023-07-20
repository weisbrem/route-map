import { RoutesData } from '../components/Table/Table-data.interface';

export const getAllRoutes = async () => {
  const response = await fetch('../../db/route.json');
  const data: RoutesData = response.json();
  return data;
};
