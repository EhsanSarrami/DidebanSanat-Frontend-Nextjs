import { useEffect, useRef } from "react";
import L from "leaflet";

const useMap = (center, zoom, mapFunc) => {
  // create map element ref
  let mapElementRef = useRef();

  // make map wrapper component
  const MapElement = () => {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={mapElementRef} />
    );
  };

  // initialize map
  useEffect(() => {
    const mapBase = L.map(mapElementRef.current, {
      center: center ? center : [51.505, -0.09],
      zoom: zoom ? zoom : 13,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapBase);

    if (mapFunc) mapFunc(mapBase, L);
  }, [mapElementRef, center, zoom, mapFunc]);

  return MapElement;
};

export default useMap;
