import React from "react";
import ContentNotFound from "../../../../content-not-found";

const Description = ({ data }) => {
  return data ? (
    <div
      className="info-section-desc"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  ) : (
    <ContentNotFound
      description="توضیحاتی برای محصول یافت نشد !"
      type="notFound"
      margin="4em 0"
    />
  );
};

export default Description;
