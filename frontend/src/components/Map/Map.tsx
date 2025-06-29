import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const cafes = [
  {
    lat: -26.2825,
    lng: -48.8553,
    name: "Kaffee Eleganz América",
    endereco: "Rua Rolf Colin, 109 - América, Joinville - SC",
  },
  {
    lat: -26.2863,
    lng: -48.8182,
    name: "Kaffee Eleganz Aventureiro",
    endereco: "Rua Tuiuti, 2160 - Aventureiro, Joinville - SC",
  },
  {
    lat: -26.3045,
    lng: -48.8497,
    name: "Kaffee Eleganz Centro",
    endereco: "Rua Ministro Calógeras, 840 - Centro, Joinville - SC",
  },
  {
    lat: -26.2973,
    lng: -48.8351,
    name: "Kaffee Eleganz Saguaçú",
    endereco: "Rua Chapecó, 101 - Saguaçú, Joinville - SC",
  },
  {
    lat: -26.2941,
    lng: -48.8524,
    name: "Kaffee Eleganz Guimarães",
    endereco: "Rua Orestes Guimarães, 480 - América, Joinville - SC",
  },
  {
    lat: -26.2917,
    lng: -48.8559,
    name: "Kaffee Eleganz Lages",
    endereco: "Rua Lages, 978 - América, Joinville - SC",
  },
  {
    lat: -26.2936,
    lng: -48.8596,
    name: "Kaffee Eleganz Jaraguá",
    endereco: "Rua Jaraguá, 1019 - América, Joinville - SC",
  },
  {
    lat: -26.2847,
    lng: -48.8632,
    name: "Kaffee Eleganz Santo Antônio",
    endereco: "Rua Alexandre Humboldt, 386 - Santo Antônio, Joinville - SC",
  },
  {
    lat: -26.3075,
    lng: -48.8508,
    name: "Kaffee Eleganz Imperial",
    endereco: "Rua Rui Barbosa, 576 - Centro, Joinville - SC",
  },
  {
    lat: -26.3020,
    lng: -48.8573,
    name: "Kaffee Eleganz Atiradores",
    endereco: "Rua Aquidaban, 382 - Atiradores, Joinville - SC",
  },
  {
    lat: -26.3025,
    lng: -48.8569,
    name: "Kaffee Eleganz Boulevard",
    endereco: "Rua Aquidaban, 330 - Atiradores, Joinville - SC",
  },
  {
    lat: -26.2995,
    lng: -48.8570,
    name: "Kaffee Eleganz Otto Boehm",
    endereco: "Rua Otto Boehm, 578 - América, Joinville - SC",
  },
  {
    lat: -26.2965,
    lng: -48.8593,
    name: "Kaffee Eleganz Orleans",
    endereco: "Rua Benjamin Constant, 851 - América, Joinville - SC",
  },
  {
    lat: -26.2899,
    lng: -48.8239,
    name: "Kaffee Eleganz Bucarein",
    endereco: "Rua Dr. Plácido Olímpio de Oliveira, 804 - Bucarein, Joinville - SC",
  },
  {
    lat: -26.2573,
    lng: -48.8527,
    name: "Kaffee Eleganz Norte",
    endereco: "Avenida Santos Dumont, 9700 - Zona Industrial Norte, Joinville - SC",
  },
  {
    lat: -26.3155,
    lng: -48.8437,
    name: "Kaffee Eleganz Anita Garibaldi",
    endereco: "Avenida Getúlio Vargas, 328 - Anita Garibaldi, Joinville - SC",
  },
  {
    lat: -26.2804,
    lng: -48.8797,
    name: "Kaffee Eleganz Glória",
    endereco: "Rua Presidente de Gaulle, 3331 - Glória, Joinville - SC",
  }
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
