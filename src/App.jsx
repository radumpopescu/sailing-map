import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-custom-control";

import { useState } from "react";
import "leaflet/dist/leaflet.css";

import one from "./resources/one.json";
import two from "./resources/two.json";

function App() {
  const [data, setData] = useState(one);
  const [dataKey, setDataKey] = useState(1);
  const midPoint = [43.803947, 28.54872];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <MapContainer
        center={midPoint}
        zoom={14}
        scrollWheelZoom={false}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON key={dataKey} data={data} />
        <Control prepend position="topright">
          <div className="inline-flex rounded-md shadow-sm isolate">
            <button
              type="button"
              className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 ${
                dataKey === 1 ? "bg-blue-200" : "bg-white"
              }`}
              onClick={() => {
                setData(one);
                setDataKey(1);
              }}
            >
              Ziua
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 ${
                dataKey === 2 ? "bg-blue-200" : "bg-white"
              }`}
              onClick={() => {
                setData(two);
                setDataKey(2);
              }}
            >
              Noaptea
            </button>
          </div>
        </Control>
      </MapContainer>
    </div>
  );
}

export default App;
