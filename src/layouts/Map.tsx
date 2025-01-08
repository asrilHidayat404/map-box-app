import { addCoordinate } from "@/action/addCoordinate";
import React, { useActionState, useEffect, useRef, useState } from "react";

const Map = () => {
  const mapContainer = useRef(null);
  const [coordinate, setCoordinate] = useState({ lat: "", lng: "" }); // Berikan nilai awal

  const [error, action, loading] = useActionState(addCoordinate)

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof mapboxgl !== "undefined") {
        clearInterval(interval);

        // Set access token
        mapboxgl.accessToken =
          "pk.eyJ1IjoibG9uamhlciIsImEiOiJjbHlxcWsxNnMxNW5mMmpzNDZsZGZ6Z3RpIn0.Ec929E9mYpzsMfKqdPIuOQ";

        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-122.420679, 37.772537],
          zoom: 13,
        });

        // Tambahkan event listener untuk mendapatkan koordinat pada klik
        map.on("click", (e) => {
          const { lat, lng } = e.lngLat; // Ambil latitude dan longitude
          setCoordinate({ lat, lng }); // Perbarui state
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div
        ref={mapContainer}
        className="w-full h-[500px] border rounded-md shadow-lg"
      />
      <form
        action={action}
        className="flex flex-col w-full max-w-md bg-white p-6 rounded-md shadow-lg space-y-4"
      >
        <div className="flex flex-col">
          <label
            htmlFor="latitude"
            className="text-gray-700 font-medium mb-2"
          >
            Latitude
          </label>
          <input
            type="text"
            name="latitude"
            value={coordinate.lat} // Nilai diambil dari state
            readOnly
            className="border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="longitude"
            className="text-gray-700 font-medium mb-2"
          >
            Longitude
          </label>
          <input
            type="text"
            name="longitude"
            value={coordinate.lng} // Nilai diambil dari state
            readOnly
            className="border border-gray-300 rounded-md p-2  text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="keterangan"
            className="text-gray-700 font-medium mb-2"
          >
            Keterangan
          </label>
          <input
            type="text"
            name="keterangan"
            placeholder="Masukkan keterangan"
            className="border border-gray-300 rounded-md p-2 
            text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Map;
