import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from 'hooks/use-map';
import { City, Point } from 'types/map';
import 'leaflet/dist/leaflet.css';
import { ContactsMap } from '../contacts.styled';

type MapProps = {
  city: City;
  point: Point;
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
        lat: point.lat,
        lng: point.lng,
      });

      marker.setIcon(customIcon).addTo(map);      
    }
  }, [point, city, map]);

  return <ContactsMap ref={mapRef}/>;
}

export default Map;
