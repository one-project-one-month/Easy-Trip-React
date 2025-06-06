import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

type MyMapProps = {
  lat: number;
  lng: number;
  place: string;
};

const SetView = ({
  center,
  zoom,
}: {
  center: LatLngExpression;
  zoom: number;
}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = ({ lat, lng, place }: MyMapProps) => {
  const position: LatLngExpression = [lat, lng];

  return (
    <div className="my-4 w-full relative z-0">
      <MapContainer zoom={13} center={[0, 0]} scrollWheelZoom={false}>
        <SetView center={position} zoom={10} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{place}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
