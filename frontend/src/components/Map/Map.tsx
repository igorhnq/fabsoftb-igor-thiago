import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Correção dos ícones
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const cafes = [
  {
    lat: -26.3044,
    lng: -48.8487,
    name: "Kaffee Eleganz Leste Aventureiro",
    endereco: "Rua Dilan Rutherford - Aventureiro - Joinville - SC",
  },
  {
    lat: -26.3150,
    lng: -48.8520,
    name: "Kaffee Eleganz Centro",
    endereco: "Centro de Joinville - SC",
  },
  {
    lat: -26.3195,
    lng: -48.8432,
    name: "Kaffee Eleganz",
    endereco: "Rua Dilan Rutherford - Aventureiro - Joinville - SC",
  },
];

export default function Map() {
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

      {/* Mapeando todas as cafeterias */}
      {cafes.map((cafe, index) => (
        <Marker key={index} position={[cafe.lat, cafe.lng]}>
          <Popup>
            <strong>{cafe.name}</strong>
            <br />
            {cafe.endereco}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
