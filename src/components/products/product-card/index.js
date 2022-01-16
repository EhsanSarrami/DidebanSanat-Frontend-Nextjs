import { useRouter } from "next/router";
import { ProductCardWrapper } from "./style";
import StyledLink from "../../../core-ui/styled-link";
import Config from "../../../services/Config.json";
import Image from "next/image";
import funcImageLoader from "../../../helper/funcImageLoader";
import funcReplaceAll from "../../../helper/funcReplaceAll";

const ProductCard = ({ data, type }) => {
  // destructure data
  const { slug, image, id, title, name } = data;

  // use router hook to get pathname
  const { pathname } = useRouter();

  // render card url
  const renderUrl = () => {
    if (type === "parent")
      return `${pathname}/${data.parentCategory.slug}/${funcReplaceAll(
        name,
        " ",
        "-"
      )}`;
    else return `${pathname}/${data.productSecondSubCategory.slug}-${slug}`;
  };

  return (
    <ProductCardWrapper>
      <StyledLink
        className="product-card-image"
        href={renderUrl()}
        notRound={true}
      >
        <Image
          src={funcImageLoader(image)}
          layout="fill"
          objectFit="cover"
          quality={60}
          alt={type === "parent" ? name : title}
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
