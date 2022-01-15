import { TextFieldInput } from "./style";
import { useField, ErrorMessage } from "formik";
import TextFieldError from "../text-field-error";

const TextField = ({ ...props }) => {
  // use field
  const [field] = useField(props);

  return (
    <>
      <TextFieldInput {...field} {...props} />
      <TextFieldError>
        <ErrorMessage name={field.name} />
        &nbsp;
      </TextFieldError>
    </>
  );
};

export default TextField;
