import { ContactUsFormWrapper } from "./style";
import FormWrapper from "../../../components/form-wrapper";
import TextField from "../../../core-ui/text-field";
import SubmitButton from "../../../core-ui/submit-button";
import TextAreaField from "../../../core-ui/text-area-field";
import { ContactUsValidate } from "../../../validations";
import Axios from "../../../services/AxiosConfig";
import { CREATE_CONTACT } from "../../../graphql/Mutation";
import toast from "react-hot-toast";

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
  const handleSubmit = async (values, event) => {
    try {
      const {
        data: {
          data: {
            createTicket: {
              ticket: { fullName },
            },
          },
        },
        status,
      } = await Axios(CREATE_CONTACT, values);

      // if status was 200 show toast
      if (status === 200) {
        toast.success(`${fullName} عزیز پیام شما با موفقیت ارسال شد.`);
        event.resetForm();
      }
    } catch (error) {
      toast.error(
        `${values.fullName} عزیز فرایند ارسال پیام شما با مشکل مواجه شد.`
      );
    }
  };

  return (
    <ContactUsFormWrapper>
      <FormWrapper
        handleSubmit={handleSubmit}
        formValues={formValues}
        validationObj={ContactUsValidate}
      >
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
