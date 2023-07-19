import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';

const LAYER_URL = `https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=${process.env.REACT_APP_MAP_LAYER_APIKEY}`;
const LAYER_COPYRIGHT =
  'Maps &copy; <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: unknown): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: 1,
          lng: 1,
        },
        zoom: 5,
      });

      const layer = new TileLayer(LAYER_URL, {
        attribution: LAYER_COPYRIGHT,
      });

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
