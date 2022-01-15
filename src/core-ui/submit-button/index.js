import React from "react";
import SubmitButtonBtn from "./style";

const SubmitButton = ({ children, ...props }) => {
  return <SubmitButtonBtn {...props}>{children}</SubmitButtonBtn>;
};

export default SubmitButton;
