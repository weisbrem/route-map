import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const ZOOM = 17;

function RouteMap() {
  return (
    <>
      <MapContainer
        // center={position}
        zoom={ZOOM}
        style={{ height: '80vh', width: '100%' }}
        center={[51.505, -0.09]}
        scrollWheelZoom={false}
      >
        <TileLayer url={LAYER_URL} attribution={LAYER_COPYRIGHT} />
        {/* <Marker position={position} icon={defaultIcon} /> */}
      </MapContainer>
    </>
  );

  // return <section style={{ width: '500px', height: '500px' }} />;
}

export default RouteMap;
