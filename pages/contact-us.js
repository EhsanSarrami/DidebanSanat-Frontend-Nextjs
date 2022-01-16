import PagesHeader from "../src/components/pages-header";
import LocationData from "../src/json/location-data/ContactUs.json";
import SectionTitle from "../src/components/section-title";
import InfoSection from "../src/components/contact-us/info-section";
import ContactUsWrapper from "../src/components/contact-us";

const ContactUs = () => {
  return (
    <>
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
