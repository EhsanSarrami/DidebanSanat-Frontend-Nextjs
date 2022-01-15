import { useRouter } from "next/router";
import { ProductCardWrapper } from "./style";
import StyledLink from "../../../core-ui/styled-link";
import Config from "../../../services/Config.json";

const ProductCard = ({ data, type }) => {
  // destructure data
  const { slug, image, id, title, name } = data;

  // use router hook to get pathname
  const { pathname } = useRouter();

  return (
    <ProductCardWrapper>
      <StyledLink
        className="product-card-image"
        href={`${pathname}/${slug}?id=${id}`}
      >
        <img src={`${Config.mediaURL}/${image}`} alt={slug} />
      </StyledLink>
      <StyledLink
        className="product-card__name"
        href={`${pathname}/${slug}?id=${id}`}
      >
        {type === "parent" ? name : title}
      </StyledLink>
      {data.parentCategory || data.productSecondSubCategory ? (
        <h4 className="product-card__category">
          {type === "parent"
            ? data.parentCategory.name
            : data.productSecondSubCategory.name}
        </h4>
      ) : (
        <h4 className="product-card__category">
          {type === "parent"
            ? data.firstSubCategory.name
            : data.productFirstSubCategory.name}
        </h4>
      )}
    </ProductCardWrapper>
  );
};

export default ProductCard;
