import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Tunggu hingga Mapbox GL tersedia di global scope
    const interval = setInterval(() => {
      if (typeof mapboxgl !== "undefined") {
        clearInterval(interval);

        // Set access token
        // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;
        mapboxgl.accessToken = "pk.eyJ1IjoibG9uamhlciIsImEiOiJjbHlxcWsxNnMxNW5mMmpzNDZsZGZ6Z3RpIn0.Ec929E9mYpzsMfKqdPIuOQ";


        // Inisialisasi Mapbox
        new mapboxgl.Map({
          container: mapContainer.current, // ID elemen HTML
          style: "mapbox://styles/mapbox/streets-v11", // Gaya Mapbox
          center: [-122.420679, 37.772537], // Koordinat awal
          zoom: 13, // Zoom awal
        });
      }
    }, 100);

    return () => clearInterval(interval); // Bersihkan interval saat komponen dihapus
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
