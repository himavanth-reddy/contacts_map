import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
const Map = () => {
  return (
    <div className="m-8 fixed z-20 w-5/6">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={6}
        style={{ height: "80vh", width: "80%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
