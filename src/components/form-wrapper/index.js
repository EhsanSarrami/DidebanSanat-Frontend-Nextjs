import { Formik, Form } from "formik";

const FormWrapper = ({
  formValues,
  validationObj,
  handleSubmit,
  needProps,
  children,
}) => {
  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationObj}
      onSubmit={handleSubmit}
    >
      {needProps ? (
        (formik) => <Form>{children(formik)}</Form>
      ) : (
        <Form>{children}</Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
