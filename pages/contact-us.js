import PagesHeader from "../src/components/pages-header";
import LocationData from "../src/json/location-data/ContactUs.json";
import SectionTitle from "../src/components/section-title";
import InfoSection from "../src/components/contact-us/info-section";
import FormMapWrapper from "../src/components/contact-us/style";
import ContactUsForm from "../src/components/contact-us/form";
import dynamic from "next/dynamic";
const ContactUsMap = dynamic(() => import("../src/components/contact-us/map"), {
  ssr: false,
});

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
      <section className="container flex-wrapper flex-center space-top">
        <FormMapWrapper className="wrapper">
          <ContactUsForm />
          <ContactUsMap />
        </FormMapWrapper>
      </section>
    </>
  );
};

export default ContactUs;
