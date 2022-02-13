import React from "react";
import ContentNotFound from "../../../../content-not-found";

const Tecnical = ({ data }) => {
  return data ? (
    <div
      className="info-section-fetures"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  ) : (
    <ContentNotFound
      description="مشخصات فنی برای محصول یافت نشد !"
      type="notFound"
      margin="4em 0"
    />
  );
};
export default Tecnical;
