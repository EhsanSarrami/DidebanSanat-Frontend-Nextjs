import { ContactUsFormWrapper } from "./style";
import FormWrapper from "../../../components/form-wrapper";
import TextField from "../../../core-ui/text-field";
import SubmitButton from "../../../core-ui/submit-button";
import TextAreaField from "../../../core-ui/text-area-field";

const ContactUsForm = () => {
  // initial form values
  const formValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    discription: "",
  };

  // handle submit form
  const handleSubmit = (values) => console.log(values);

  return (
    <ContactUsFormWrapper data-aos="fade-right">
      <FormWrapper handleSubmit={handleSubmit} formValues={formValues}>
        <TextField
          name="fullName"
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <TextField name="email" type="email" placeholder="آدرس ایمیل" />
        <TextField name="phoneNumber" type="tel" placeholder="شماره تماس " />
        <TextField name="subject" type="text" placeholder="موضوع پیام" />
        <TextAreaField name="discription" type="text" placeholder="پیام شما" />
        <SubmitButton space="1em 4.2em" type="submit">
          ارسال پیام
        </SubmitButton>
      </FormWrapper>
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;
