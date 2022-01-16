import { ProductsCategoriesListCardWrapper } from "./style";
import Config from "../../../services/Config.json";
import StyledLink from "../../../core-ui/styled-link";

const ProductsCategoriesListCard = ({ data }) => {
  const { image, name } = data;

  return (
    <StyledLink href={`/products-categories/#${name.replace(" ", "-")}`}>
      <ProductsCategoriesListCardWrapper
        className="flex-wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img
          src={`${Config.mediaURL}/${image}`}
          alt={name}
          className="products-categories-list-card__image"
        />
        <h2 className="products-categories-list-card__name">{name}</h2>
      </ProductsCategoriesListCardWrapper>
    </StyledLink>
  );
};

export default ProductsCategoriesListCard;
