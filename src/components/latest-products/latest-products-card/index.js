import React from "react";
import { LatestProductsCardWrapper } from "./style";

const LatestProductsCard = ({ data }) => {
  const { image, name } = data;

  return (
    <LatestProductsCardWrapper
      className="flex-wrapper"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <img
        src={`${Confige.HostMediaEndpoint}/${image}`}
        alt={name}
        className="latest-products-card__image"
      />
      <h2 className="latest-products-card__name">{name}</h2>
    </LatestProductsCardWrapper>
  );
};

export default LatestProductsCard;
