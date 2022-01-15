import { useRef, useEffect } from "react";
import ContactUsMapWrapper from "./style";
import L from "leaflet";

const ContactUsMap = () => {
  // declare map ref
  const mapRef = useRef();

  // add map to ref when component mount
  useEffect(() => {
    let map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

  }, []);

  return (
    <ContactUsMapWrapper>
      <div className="map-container" ref={mapRef} />
    </ContactUsMapWrapper>
  );
};

export default ContactUsMap;
