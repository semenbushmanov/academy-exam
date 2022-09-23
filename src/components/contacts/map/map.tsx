import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from 'hooks/useMap';
import { MapCity, MapPoint } from 'const';
import 'leaflet/dist/leaflet.css';
import { ContactsMap } from '../contacts.styled';

type MapProps = {
  city: typeof MapCity;
  point: typeof MapPoint;
};

const customIcon = new Icon({
  iconUrl: 'pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({city, point}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {      
      const marker = new Marker({
        lat: point.Lat,
        lng: point.Lng,
      });

      marker.setIcon(customIcon).addTo(map);      
    }
  }, [point, city, map]);

  return <ContactsMap ref={mapRef}/>;
}

export default Map;
