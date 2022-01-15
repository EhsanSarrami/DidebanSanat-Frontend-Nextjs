import PagesHeader from "../src/components/pages-header";
import LocationData from "../src/json/location-data/Services.json";
import SectionTitle from "../src/components/section-title";
import SectionTitleData from "../src/json/section-title/Services.json";
import Axios from "../src/services/AxiosConfig";
import { GET_SERVICES_POST } from "../src/graphql";
import ServicesList from "../src/components/services/services-list";
import CallToActionOne from "../src/components/call-to-actions/call-to-action-one";
import CallToActionOneData from "../src/json/call-to-action/Services.json";

const services = ({ services }) => {
  return (
    <>
      <PagesHeader
        title="خدمات دیده بان صنعت"
        locationList={LocationData}
        staticBg="pic4.jpg"
      />
      <SectionTitle {...SectionTitleData} />
      <ServicesList data={services} />
      <CallToActionOne data={CallToActionOneData} />
    </>
  );
};

export default services;

export const getServerSideProps = async () => {
  // get services
  const {
    data: {
      data: { services },
    },
  } = await Axios(GET_SERVICES_POST);

  return {
    props: {
      services,
    },
  };
};
