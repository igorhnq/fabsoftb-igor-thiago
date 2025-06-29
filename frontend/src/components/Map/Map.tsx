import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { coffeeShops } from "../../data/coffeeShops";
import MapController from "./MapController";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapProps {
    selectedLocation?: [number, number] | null;
}

export default function Map({ selectedLocation }: MapProps) {
  return (
    <MapContainer
      center={[-26.3044, -48.8487]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {coffeeShops.map((cafe) => (
        <Marker key={cafe.id} position={[cafe.lat, cafe.lng]}>
          <Popup>
            <strong>{cafe.name}</strong>
            <br />
            {cafe.endereco}
          </Popup>
        </Marker>
      ))}

      <MapController center={selectedLocation} />
    </MapContainer>
  );
}
