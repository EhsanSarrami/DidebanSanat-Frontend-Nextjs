import PagesHeader from "../src/components/pages-header";
import LocationData from "../src/json/location-data/ContactUs.json";
import SectionTitle from "../src/components/section-title";
import InfoSection from "../src/components/contact-us/info-section";
import ContactUsWrapper from "../src/components/contact-us";
import CostomHead from "../src/components/custom-head";
import { ContactUsHead } from "../src/json/heades";

const ContactUs = () => {
  return (
    <>
      <CostomHead data={ContactUsHead} />
      <PagesHeader
        title="راه های ارتباطی دیده بان صنعت"
        locationList={LocationData}
        staticBg="pic6.jpg"
      />
      <SectionTitle
        subTitle="تماس با ما"
        title="با ما همیشه در ارتباط باشید"
        spacTop="true"
      />
      <InfoSection />
      <ContactUsWrapper />
    </>
  );
};

export default ContactUs;
