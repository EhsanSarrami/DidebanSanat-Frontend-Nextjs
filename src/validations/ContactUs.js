import * as yup from "yup";
import { phoneRegEx } from "./Regex";

const ContactUsValidate = yup.object({
  fullName: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  email: yup.string().required("لطفا ایمیل خود را وارد کنید"),
  phoneNumber: yup
    .string()
    .required("لطفا شماره تلفن خود را وارد کنید")
    .matches(phoneRegEx, "لطفا یک شماره تلفن معتبر وارد کنید")
    .max(11, "شماره تلفن باید 11 رقم باشد")
    .min(11, "شماره تلفن باید 11 رقم باشد"),
  subject: yup.string().required("لطفا موضوع پیام خود را وارد کنید"),
  discription: yup.string().required("لطفا پیام خود را وارد کنید"),
});

export default ContactUsValidate;