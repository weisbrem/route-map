import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { AppState } from '../../store/store.interface';
import { LatLngExpression, Map } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { PolylineRouteData } from '../../store/polyline-slice/polyline-slice.interface';

const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const ZOOM = 6;

const renderMarkers = (currentWaypoints: number[][] | undefined) => {
  if (!currentWaypoints) {
    return;
  }

  const testt: LatLngExpression[] = currentWaypoints.map(([lat, lng]) => [lat, lng]);

  return testt.map((item, i) => <Marker key={`marker-${i}`} position={item} />);
};

const renderPolyline = (test: LatLngExpression[] | undefined) => {
  if (!test) {
    return;
  }

  return <Polyline pathOptions={{ color: 'red' }} positions={test} />;
};

const getCenter = (polylineRoute: PolylineRouteData | null) => {
  if (!polylineRoute) {
    return [59.9342802, 30.3350986] as LatLngExpression; // питер
  }

  const res: LatLngExpression = {
    lat: polylineRoute.waypoints[0].location[0],
    lng: polylineRoute.waypoints[0].location[1],
  };

  return res;
};

function RouteMap() {
  const { polylineRoute } = useAppSelector((state: AppState) => state.polylineRoute);
  const [currentWaypoints, setCurrentWaypoints] = useState<number[][] | undefined>([]);
  const [test, setTest] = useState<LatLngExpression[] | undefined>([]);
  const [center, setCenter] = useState<LatLngExpression>([59.9342802, 30.3350986]);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    setCurrentWaypoints(polylineRoute?.waypoints.map(({ location }) => location));
    setTest(currentWaypoints?.map(([lat, lng]) => [lat, lng]));
    setCenter(getCenter(polylineRoute));

    mapRef.current?.setView(center);

    console.log('render polylineRoute', polylineRoute);
    console.log('render');
    return () => {
      console.log('unmound');
    };
  }, [polylineRoute]);

  return (
    <>
      <MapContainer
        ref={mapRef}
        zoom={ZOOM}
        style={{ height: '80vh', width: '100%' }}
        center={center}
      >
        <TileLayer url={LAYER_URL} attribution={LAYER_COPYRIGHT} />
        {renderMarkers(currentWaypoints)}
        {renderPolyline(test)}
      </MapContainer>
    </>
  );
}

export default RouteMap;
