import React from "react";
import TextAreaFieldInput from "./style";
import { useField, ErrorMessage } from "formik";
import TextFieldError from "../text-field-error";

const TextAreaField = ({ ...props }) => {
  // use field
  const [field] = useField(props);

  return (
    <>
      <TextAreaFieldInput {...field} {...props} />
      <TextFieldError>
        <ErrorMessage name={field.name} />
        &nbsp;
      </TextFieldError>
    </>
  );
};

export default TextAreaField;
