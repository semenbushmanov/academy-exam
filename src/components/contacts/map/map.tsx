import { useRef, useEffect } from 'react';
import { Marker } from 'leaflet';
import useMap from 'hooks/useMap';
import { MapCity, MapPoint } from 'const';
import 'leaflet/dist/leaflet.css';
import { ContactsMap } from '../contacts.styled';

type MapProps = {
  city: typeof MapCity;
  point: typeof MapPoint;
};

const Map = ({city, point}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {      
      const marker = new Marker({
          lat: point.Lat,
          lng: point.Lng,
      });

      marker.addTo(map);      
    }
  }, [point, city, map]);

  return <ContactsMap ref={mapRef}/>;
}

export default Map;
