import { ProductsCategoriesListCardWrapper } from "./style";
import Image from "next/image";
import StyledLink from "../../../core-ui/styled-link";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const ProductsCategoriesListCard = ({ data }) => {
  const { image, name } = data;

  return (
    <StyledLink href={`/products-categories/#${name.replace(" ", "-")}`}>
      <ProductsCategoriesListCardWrapper
        className="flex-wrapper"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {image && (
          <Image
            src={image}
            loader={funcImageLoader}
            alt={name}
            className="products-categories-list-card__image"
            layout="fill"
            objectFit="cover"
            quality={60}
            placeholder="blur"
            blurDataURL={funcBlurDataUrl()}
          />
        )}
        <h2 className="products-categories-list-card__name">{name}</h2>
      </ProductsCategoriesListCardWrapper>
    </StyledLink>
  );
};

export default ProductsCategoriesListCard;
