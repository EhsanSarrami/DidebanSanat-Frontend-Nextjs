import { ProductCardWrapper } from "./style";
import StyledLink from "../../../core-ui/styled-link";
import Image from "next/image";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcReplaceAll from "../../../helper/funcReplaceAll";
import funcBlurDataUrl from "../../../helper/funcBlurDataUrl";

const ProductCard = ({ data, type }) => {
  // destructure data
  const { image, title, name, id } = data;

  // use router hook to get pathname
  const pathname = typeof window !== "undefined" && window.location.pathname;

  // render card url
  const renderUrl = () => {
    if (type === "parent")
      return `${pathname}/${data.parentCategory.slug}/${funcReplaceAll(
        name,
        " ",
        "-"
      )}`;
    else
      return `${pathname}/${data.slug}-${funcReplaceAll(
        title,
        " ",
        "-"
      )}?id=${id}`;
  };

  return (
    <ProductCardWrapper>
      <StyledLink
        className="product-card-image"
        href={renderUrl()}
        notRound={true}
      >
        <Image
          src={image}
          loader={funcImageLoader}
          layout="fill"
          objectFit="cover"
          quality={60}
          alt={type === "parent" ? name : title}
          placeholder="blur"
          blurDataURL={funcBlurDataUrl()}
        />
      </StyledLink>
      <StyledLink className="product-card__name" href={renderUrl()}>
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
