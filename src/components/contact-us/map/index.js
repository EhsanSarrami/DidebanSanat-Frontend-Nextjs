import ContactUsMapWrapper from "./style";
import useMap from "../../../hooks/useMap";
import L from "leaflet";

const ContactUsMap = () => {
  // create marker
  const MapMarker = L.icon({
    iconUrl: "/image/map-marker.png",
    iconSize: [42, 42], // size of the icon
  });

  // nake marker and pass to use map hook
  const mapFunc = (mapBase, L) => {
    L.marker([35.72212780479392, 51.3283235442065], { icon: MapMarker })
      .addTo(mapBase)
      .bindPopup(
        "آدرس : فلکه دوم صادقیه خیابان ولیعصر - خیابان اعتمادیان پلاک 36 واحد 2"
      );
  };

  // use map hook
  const MapElement = useMap([35.72212780479392, 51.3283235442065], 15, mapFunc);

  return (
    <ContactUsMapWrapper>
      <MapElement />
    </ContactUsMapWrapper>
  );
};

export default ContactUsMap;
