import React from "react";
import dynamic from "next/dynamic";
import FormMapWrapper from "./style";
import ContactUsForm from "./form";
const ContactUsMap = dynamic(() => import("./map"), {
  ssr: false,
});

const ContactUsWrapper = () => {
  return (
    <section className="container flex-wrapper flex-center space-top">
      <FormMapWrapper className="wrapper flex-wrapper">
        <ContactUsForm />
        <ContactUsMap />
      </FormMapWrapper>
    </section>
  );
};

export default ContactUsWrapper;
