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
          // -7.06432184554814, 113.67460428315444
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [113.67460428315444, -7.06432184554814],
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
    <div className="flex items-center space-x-4 p-4">
      <div
        ref={mapContainer}
        className="w-full h-[700px] border rounded-md shadow-lg"
      />
      <div className="w-[800px] h-[700px] flex flex-col justify-between bg-white p-6 rounded-md shadow-lg ">
        <h1 className="text-black text-center mt-10 text-3xl">Insert New Location</h1>
        <img src="/logoUA.png" alt="" width={150} className="mx-auto" />
        <form
          action={action}
          className="flex flex-col mx-auto w-full max-w-md space-y-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="latitude"
              className="text-gray-700 font-medium mb-2"
            >
              Latitude:
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
              Longitude:
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
              Keterangan:
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
    </div>
  );
};

export default Map;
