export const getAllRoutes = async () => {
  const response = await fetch('../../db/route.json');

  return response.json();
};

export const getPolylineRouteData = async (coordinates: string) => {
  const res = await fetch(
    `http://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=polyline6`
    // `http://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`
  );

  return res.json();
};
